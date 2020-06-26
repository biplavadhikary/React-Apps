require("dotenv").config({ path: "variables.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const processMessage = require("./process-message");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/chat", (req, res) => {
  const { message } = req.body;
  console.log("Received Message: \n", message)
  processMessage(message).then((textRes) => {
    res.send({ message: textRes });
  });
});

app.set("port", 4000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
