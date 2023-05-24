import { Route, Routes } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import Contacts from "./Contacts";
import EditContact from "../Components/EditContact";
import Dashboard from "./ChartsMap";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/contact_form" element={<ContactForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default AllRoutes;
