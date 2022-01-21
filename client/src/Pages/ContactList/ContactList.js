import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../../Components/ContactCard/ContactCard";
import { getcontacts } from "../../JS/actions/Actions";
import "./ContactList.css";

const ContactList = () => {
  const listofcontacts = useSelector(
    (state) => state.contactReducer.listofcontacts
  );
  const load = useSelector((state) => state.contactReducer.load);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcontacts());
  }, [dispatch]);

  return load ? (
    <h1>waaaaitt</h1>
  ) : (
    <div className="contactlist">
      {listofcontacts.map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactList;
