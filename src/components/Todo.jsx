import { useState, useEffect } from "react";

const Todo = () => {
  // Load TODOs from local storage on app startup
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("todoList");
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });


  // const [todoList, setTodoList] = useState(storedTodoList);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries());
    formDataObj.complete = false;
    setTodoList([...todoList, formDataObj]);
    form.reset();
  };

  const removeTodo = (event) => {
    let rmTd = event.target.value;
    let newList = todoList.filter(function (item) {
      if (rmTd === item.todo) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newList);
  };
  const CompleteTodo = (event) => {
    let todoName = event.target.value;
    // Map over the todoList and toggle the completion status for the matching todo
    let updatedTodoList = todoList.map((todo) => {
      if (todo.todo === todoName) {
        return {
          ...todo,
          completed: !todo.completed, // Toggle the completion status
        };
      } else {
        return todo;
      }
    });
    // Update the state with the modified todoList
    setTodoList(updatedTodoList);
  };

  return (
    <div className="flex flex-col justify-center  self-center">
      <div className="flex-col justify-center self-center">
        <form onSubmit={addTodo} className="mt-16 p-4 ">
          <input
            type="text"
            className="outline-none rounded-md font-semibold text-2xl px-2"
            placeholder="Add new task..."
            name="todo"
            required
          />
          <button
            type="submit"
            className="bg-[#0d1117] text-white outline-none rounded-md font-semibold text-2xl ml-2 mb-2 px-2 hover:bg-slate-800 "
          >
            +
          </button>
        </form>
      </div>

      <div className="flex-col justify-center self-center">
        {todoList.map(function (val, index) {
          return (
            <ul key={index}>
              <li className="border-[#0d1117] border-2 px-1 mb-2 rounded-lg font-semibold text-2xl cursor-pointer hover:text-slate-700 hover:border-slate-700">
                <div className="flex justify-between py-1">
                  <div>
                    <span
                      style={
                        val.completed
                          ? { textDecoration: "line-through"}
                          : { textDecoration: "none" }
                      }
                    >
                      {val.todo}
                    </span>
                  </div>
                  &nbsp;
                  <div className="flex justify-center self-center">
                    <button onClick={CompleteTodo} value={val.todo}>
                      ✅
                    </button>
                    <button onClick={removeTodo} value={val.todo}>
                      🗑️
                    </button>
                    
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
