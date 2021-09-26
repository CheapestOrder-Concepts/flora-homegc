import { combineReducers } from "redux";

import data from "./verificationConsultationReducer";

export default combineReducers({
  verificationConsultation: data,
});
