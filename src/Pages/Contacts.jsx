import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../Components/PopUp";
import { action } from "../Redux/Reducer";
const Contacts = () => {
  const AllContacts = useSelector((state) => state.reducer.contacts);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState({});
  let data = undefined;

  const togglePopup = (contact) => {
    setSingleContact(contact);

    setIsOpen(!isOpen);
  };

  return (
    <div className="justify-center pt-16 text-gray-50   p-4  w-full ">
      <div className="m-4">
        <button className="rounded-full bg-violet-600 p-2 text-2xl">
          <Link to="/contact_form">Create Contact</Link>
        </button>
      </div>
      {AllContacts.length == 0 && (
        <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">
          <h1 className="text-3xl">
            No Contact Found Please add contact from <br /> Create Contact
            Button
          </h1>
        </div>
      )}
      <div
        id="contact_list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {AllContacts.map((el) => {
          return (
            <div
              onClick={() => togglePopup(el)}
              key={el.id}
              className="bg-blue-950 rounded-lg shadow-md m-4 p-4 text-white"
            >
              <div className="w-3/4 m-auto  ">
                <div className="p-4">
                  {isOpen && (
                    <Popup close={() => togglePopup(data)} el={singleContact} />
                  )}
                </div>{" "}
                <div className="text-left">
                  <p>First Name : {el.first_name}</p>
                  <p>Last Name : {el.last_name}</p>
                  {/* <p>Mobile   : {el.mob}</p> */}
                  <p>
                    Status : {el.status == "active" ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between my-2">
                <Link to={`edit/${el.id}`}>
                  <button className="rounded p-2 bg-violet-600 text-black">
                    Edit
                  </button>
                </Link>

                <button
                  className="rounded p-2 bg-red-600 text-white"
                  onClick={() => dispatch(action.DeleteContact(el.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
