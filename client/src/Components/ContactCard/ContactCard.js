import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deletebtn from "../../assets/deletebtn.png";
import editbtn from "../../assets/editbtn.png";
import { deletecontact, toggletrue } from "../../JS/actions/Actions";
import { Link } from "react-router-dom";
import { getcontact } from "../../JS/actions/Actions";
import { Card } from "react-bootstrap";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.contactReducer.edit);

  return (
    <div className="ContactCard">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text> Name:{contact.name}</Card.Text>

          <Card.Text>
            <span> Email: {contact.email}</span>
          </Card.Text>
          <Card.Text>
            <span>Phone :{contact.phone}</span>
          </Card.Text>
          <div className="btns">
            <div className="deletebtns">
              <img
                src={deletebtn}
                alt="delete-icon"
                onClick={() => dispatch(deletecontact(contact._id))}
              />
            </div>
            <Link to={`/editcontact/${contact._id}`}>
              <img
                src={editbtn}
                alt="edit-icon"
                onClick={() => {
                  dispatch(toggletrue());
                  dispatch(getcontact(contact._id));
                }}
              />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
