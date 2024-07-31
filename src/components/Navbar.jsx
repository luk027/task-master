import todoImg from '../images/todoList.png'

const Navbar = () => {
  return (
    <nav className="bg-[#e6edf3] dark:bg-[#0d1117] w-full sticky top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={todoImg}
            className="h-8"
            alt="Luk's Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Task_Master
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
