import axios from "axios";
import { SERVER_URL, ROLL_NUMBER } from "../utils/constants";

export function serviceCall() {
  return axios.post(`${SERVER_URL}`);
}

export function callInvoiceAPI(custNum) {
  //console.log(`Server URL: ${SERVER_URL}${ROLL_NUMBER}/dummy.do?`);
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/customerInvoiceServlet`,
    {},
    {
      headers: { "Content-Type": "application/json" },
      params: { id: custNum, limit: 100 },
    }
  );
}

export function callCustomerAPI() {
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/customerNameServlet`,
    {},
    {
      headers: { "Content-Type": "application/json" },
      params: {},
    }
  );
}

export function callForModificationUpdate(pk_id, doctype, omtVal) {
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/invoiceUpdateServlet`,
    {},
    {
      headers: { "Content-Type": "application/json" },
      params: {
        pk_id: pk_id,
        doctype: doctype,
        total_open_amount: omtVal
      },
    }
  );
}

export function callPredictionAPI(data) {
  return axios.post(
    "http://127.0.0.1:5000/predict?",
    {
      id: "1706124",
      data: data
    },
    {
      headers: { "Content-Type": "application/json"},
      params: {
        // data: {
        //   id: "1706124",
        //   data: data
        // },
      },
    }
  );
}

export function getMessageResponseAPI(msg) {
  return axios.post(
    "http://localhost:4000/chat",
    {
      message: msg
    },
    {
      headers: { "Content-Type": "application/json"},
    }
  );
}
