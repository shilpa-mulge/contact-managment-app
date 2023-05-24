import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contacts:
    //  [
    //   {
    //   id:1,
    //   first_name:"Person1",
    //   last_name:"Lastname1",
    //   mob:"9122545553",
    //   status:"active"
    // },{
    //   id:2,
    //   first_name:"Person2",
    //   last_name:"Lastname2",
    //   mob:"9122545553",
    //   status:'inactive'
    // },{
    //   id:3,
    //   first_name:"Person3",
    //   last_name:"Lastname3",
    //   mob:"9122545553",
    //   status:'active'
    // }

    // ]||
    JSON.parse(localStorage.getItem("contacts")) || [],
};
const Reducer = createSlice({
  name: "resucer",
  initialState: initialState,
  reducers: {
    AddContact(state, action) {
      console.log(action.payload);
      let flag = 0;
      if (
        action.payload.first_name == "" ||
        action.payload.last_name == "" ||
        action.payload.mob == ""
      ) {
        alert("ohh You Missed Required Input , Please fill");
        flag = 1;
      } else {
        state.contacts.forEach((el) => {
          if (
            el.first_name == action.payload.first_name &&
            el.last_name == action.payload.last_name
          ) {
            alert("Name Already Exist In Contact");
            flag = 1;
          }
        });
      }

      if (!flag) {
        alert("Contact Saved Successfully!!!");

        let updatedContacts =
          JSON.parse(localStorage.getItem("contacts")) || [];
        updatedContacts.push({
          id: state.contacts.length + 1,
          ...action.payload,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [
            // ...state.contacts,
            // {
            //   id: state.contacts.length + 1,
            //  ...action.payload
            // },
            ...updatedContacts,
          ],
        };
      }
    },
  },
});
export const action = Reducer.actions;
export default Reducer.reducer;
