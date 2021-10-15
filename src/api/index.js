import axios from "axios";
const testUrl = 'http://localhost:9000'
const liveUrl = 'https://api.florahomesgc.com'

const baseUrl = `${testUrl}/api/v1/client-api`;

export const postConsultation = async(consultationDetails) =>{
  console.log('api function called');
const response = await axios.post(`${baseUrl}/verification`, consultationDetails);
console.log(response);
return response
}
export const postLoginDetails = (loginDetails) =>{
axios.post(`${baseUrl}/login`, loginDetails);
//  console.log(response);
//  return response;
}
export const postRegistrationDetails = (registrationDetails) =>
  axios.post(`${baseUrl}/registration`, registrationDetails);
