import axios from "axios";
import { SERVER_URL, ROLL_NUMBER } from "../utils/constants";

export function serviceCall() {
  return axios.post(`${SERVER_URL}`);
}

export function callInvoiceAPI(custNum, advancedOp, advancedAmt) {
  //console.log(`Server URL: ${SERVER_URL}${ROLL_NUMBER}/dummy.do?`);
  // console.log("Advanced Search Data: ", advancedOp, advancedAmt)
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/customerInvoiceServlet`,
    {},
    {
      headers: { "Content-Type": "application/json" },
      params: {
        id: custNum,
        advOperation: advancedOp,
        advAmount: advancedAmt,
        limit: 5000,    // override this limitiation if you need
      },
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
        total_open_amount: omtVal,
      },
    }
  );
}

export function callPredictionAPI(data) {
  return axios.post(
    "http://127.0.0.1:5000/predict?",
    {
      // id: "1706124",
      // data: data,
    },
    {
      headers: { "Content-Type": "application/json" },
      /* sending it in Headers might give errors if the data exceeds capacity, 
         so send it in body if required, and modify the flask script accordingly */
      params: {
        data: {
          id: "1706124",
          data: data
        },
      },
    }
  );
}

export function getMessageResponseAPI(msg) {
  // console.log("Sending message to API: ", msg)
  return axios.post(
    "http://localhost:4000/chat",
    {
      message: msg,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
