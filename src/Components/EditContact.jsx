import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { action } from "../Redux/Reducer";

function EditContact() {
  const { id } = useParams();

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const AllContact = useSelector((state) => state.reducer.contacts);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(action.editContact({ id, ...form }));
    Navigate("/");
  }

  useEffect(() => {
    AllContact.filter((el) => el.id == id && setForm(el));
  }, []);

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Mobile Number
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="tel"
          placeholder="1234567890"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          name="mob"
          value={form.mob}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-md"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
}

export default EditContact;
