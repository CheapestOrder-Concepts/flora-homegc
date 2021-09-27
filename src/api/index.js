import axios from "axios";

const baseUrl = "https://api.florahomesgc.com/api/v1/client-api";

export const postConsultation = (consultationDetails) =>
  axios.post(`${baseUrl}/verification`, consultationDetails);
