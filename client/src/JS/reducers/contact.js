import {
  ADD_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCCESS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  UPDATE_CONTACT_FAIL,
} from "../actionstypes/Actionstypes";

const initstate = {
  listofcontacts: [],
  load: false,
  errors: null,
  edit: false,
  contact: {},
};

export const contactReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, load: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, load: false, listofcontacts: payload };
    case GET_CONTACTS_FAIL:
      return { ...state, load: false, errors: payload };
    case DELETE_CONTACT_FAIL:
      return { ...state, errors: payload };
    case ADD_CONTACT_FAIL:
      return { ...state, erros: payload };
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };

    case GET_CONTACT_LOAD:
      return { ...state, load: true };
    case GET_CONTACT_SUCCESS:
      return { ...state, load: false, contact: payload };
    case GET_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };
    case UPDATE_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};
