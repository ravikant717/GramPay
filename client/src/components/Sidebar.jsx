import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col items-start p-6">
      <ul className="space-y-4 mt-10 w-full">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `cursor-pointer w-full p-2 rounded block ${isActive ? 'bg-gray-600 text-yellow-300' : ''} hover:bg-gray-700`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/request"
            className={({ isActive }) =>
              `cursor-pointer w-full p-2 rounded block ${isActive ? 'bg-gray-600 text-yellow-300' : ''} hover:bg-gray-700`
            }
          >
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              `cursor-pointer w-full p-2 rounded block ${isActive ? 'bg-gray-600 text-yellow-300' : ''} hover:bg-gray-700`
            }
          >
            Transactions
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
