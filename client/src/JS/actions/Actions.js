import axios from "axios";

import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCCESS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_LOAD,
  UPDATE_CONTACT_SUCCESS,
} from "../actionstypes/Actionstypes";

export const getcontacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contacts");
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: result.data.listofcontacts,
    });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};

export const deletecontact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${contactId}`);
    dispatch({ type: DELETE_CONTACT_SUCCESS });
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data });
  }
};

export const addcontact = (newcontact) => async (dispatch) => {
  try {
    await axios.post("/api/contacts/", newcontact);
    dispatch({ type: ADD_CONTACT_SUCCESS });
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data });
  }
};

export const toggletrue = () => {
  return { type: TOGGLE_TRUE };
};

export const togglefalse = () => {
  return { type: TOGGLE_FALSE };
};

export const getcontact = (contactId) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get(`/api/contacts/${contactId}`);
    dispatch({
      type: GET_CONTACT_SUCCESS,
      payload: result.data.contacttofind,
    });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
  }
};
export const updatecontact = (contactId, newcontact) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/${contactId}`, newcontact);
    dispatch({ type: UPDATE_CONTACT_SUCCESS });
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: UPDATE_CONTACT_FAIL, payload: error.response.data });
  }
};
