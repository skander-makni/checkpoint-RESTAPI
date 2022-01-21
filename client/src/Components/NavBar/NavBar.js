import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { togglefalse } from "../../JS/actions/Actions";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn">
      <header>
        <Link to="/">
          <Button variant="secondary" style={{ marginRight: 30 }}>
            contactlist
          </Button>
        </Link>
        <Link to="/addcontact">
          <Button
            variant="secondary"
            className="btn"
            onClick={() => dispatch(togglefalse())}
          >
            addcontact
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default NavBar;
