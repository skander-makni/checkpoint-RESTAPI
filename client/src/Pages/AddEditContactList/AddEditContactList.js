import React, { useState, useEffect } from "react";
import addbtn from "../../assets/addbtn.png";
import { Form } from "react-bootstrap";
import { addcontact, updatecontact } from "../../JS/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import editbtn from "../../assets/editbtn.png";

const AddEditContactList = () => {
  const [contact, setcontact] = useState({ name: "", email: "", phone: "" });
  const contactRed = useSelector((state) => state.contactReducer.contact);
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.contactReducer.edit);

  useEffect(() => {
    edit
      ? setcontact(contactRed)
      : setcontact({ name: "", email: "", phone: "" });
  }, [edit, contactRed]);

  const handelchange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact name..."
          name="name"
          value={contact.name}
          onChange={handelchange}
        />
        <Form.Text className="text-muted">name is required !</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="entrer contact email "
          name="email"
          value={contact.email}
          onChange={handelchange}
        />
        <Form.Text className="text-muted">email is required !</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="phone"
          placeholder="entrer contact phone "
          name="phone"
          value={contact.phone}
          onChange={handelchange}
        />
      </Form.Group>

      {edit ? (
        <Link to="/">
          <img
            src={editbtn}
            alt="edittn-icon"
            onClick={() => dispatch(updatecontact(contact._id, contact))}
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            src={addbtn}
            alt="addbtn-icon"
            className="addbtn"
            onClick={() => dispatch(addcontact(contact))}
          />
        </Link>
      )}
    </Form>
  );
};

export default AddEditContactList;
