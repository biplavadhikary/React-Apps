const Dialogflow = require("dialogflow");

// You can find your project ID in your Dialogflow agent settings
const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const sessionId = "123478";
const languageCode = "en-US";
const config = {
  credentials: {
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
    client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
  },
};
const sessionClient = new Dialogflow.SessionsClient(config);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);
async function processMessage(message) {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode,
      },
    },
  };

  const res = await sessionClient
    .detectIntent(request)
    .then((responses) => {

      // allows only single response
      // console.log(JSON.stringify(responses));
      const result = responses[0].queryResult.fulfillmentText;

      // to allow Multiple Messages
      var resultMultiple = ""
      var allResponses = responses[0].queryResult.fulfillmentMessages
      for (var i = 0; i < allResponses.length; i++) {
        //console.log(allResponses[i].text.text[0]);
        resultMultiple += allResponses[i].text.text[0]
        if (i !== allResponses.length - 1) resultMultiple += "\n\n"
      }
      console.log(resultMultiple)

      return resultMultiple;
    })
    .catch((err) => {
      console.error("ERROR:", err);
    });
  return res;
}

module.exports = processMessage;
