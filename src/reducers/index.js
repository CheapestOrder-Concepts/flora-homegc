import { combineReducers } from "redux";

import data from "./verificationConsultationReducer";
import loginData from "./loginReducer";
import regData from "./registrationReducer";

export default combineReducers({
  verificationConsultation: data,
  loginData,
  regDetails: regData,
});
