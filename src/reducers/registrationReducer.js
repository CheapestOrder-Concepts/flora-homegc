import {
  REGISTRATION_FAIL,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from "../constants";

/* eslint-disable import/no-anonymous-default-export */
export default (regData = {}, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { loading: true };
    case REGISTRATION_SUCCESS:
      localStorage.setItem("FloraReg", JSON.stringify(action.payload?.data));
      return { loading: false, regData: action.payload?.data };
    case REGISTRATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return regData;
  }
};
