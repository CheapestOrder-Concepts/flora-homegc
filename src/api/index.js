import axios from "axios";

const baseUrl = "https://api.florahomesgc.com/api/v1/client-api";

export const postConsultation = (consultationDetails) =>
  axios.post(`${baseUrl}/verification`, consultationDetails);

export const postLoginDetails = (loginDetails) =>
  axios.post(`${baseUrl}/login`, loginDetails);

export const postRegistrationDetails = (registrationDetails) =>
  axios.post(`${baseUrl}/registration`, registrationDetails);
