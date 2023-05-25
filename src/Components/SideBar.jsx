import { AiFillContacts } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="flex border-r-2 ">
      <div className="flex pt-16 flex-col h-screen  p-3 bg-slate-500 shadow w-50 text-white">
        <div className="space-y-3 ">
          <div className="flex items-center">
            <h2 className="text-xl mt-4 font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AiFillContacts size={30} />
                  <span>Contacts</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AiOutlineBarChart size={30} />
                  <span>Charts And Maps</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
