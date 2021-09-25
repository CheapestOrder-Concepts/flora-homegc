import * as api from "../api";
import {
  MAKE_CONSULTATION,
  MAKE_CONSULTATION_FAIL,
  MAKE_CONSULTATION_REQUEST,
} from "../constants";

// verification consultation action
const makeConsultation = (consultationDetails) => async (dispatch) => {
  try {
    dispatch({
      type: MAKE_CONSULTATION_REQUEST,
    });
    const { data } = await api.postConsultation(consultationDetails);
    dispatch({
      type: MAKE_CONSULTATION,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MAKE_CONSULTATION_FAIL,
      payload: error.message,
    });
  }
};
export default makeConsultation;
