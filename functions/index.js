//  FULL BACK END STUFF

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRETE_KEY);


// api

// app config
const app = express();

// middleweres
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Hello World!");
});

app.post("/check-out/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// api roots

// listen commands
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/colon-51fe9/us-central1/api
