import { combineReducers } from "redux";

import data from "./verificationConsultationReducer";
import loginData from "./loginReducer";
import regMessage from "./registrationReducer";

export default combineReducers({
  verificationConsultation: data,
  loginData,
  regFeedback:regMessage
});
