import axios from 'axios';
import { SERVER_URL,ROLL_NUMBER } from '../utils/constants';


export function serviceCall() {
  return axios.post(`${SERVER_URL}`);
}

export function callInvoiceAPI(custNum) {
  //console.log(`Server URL: ${SERVER_URL}${ROLL_NUMBER}/dummy.do?`);
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/customerInvoiceServlet`,
    {},
    {
      headers: { 'Content-Type': 'application/json' },
      params: { id: custNum, limit: 20 },
    }
  );
}

export function callCustomerAPI() {
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/customerNameServlet`,
    {},
    {
      headers: { 'Content-Type': 'application/json' },
      params: { },
    }
  );
}