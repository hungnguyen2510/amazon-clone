const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IbhHqCio5mE1F624O2xjMEdSXVWTeCSMlX2kkrqtoXvhzAsWa9J6NLvdUg93mxJlVNyNQb1UydckrXjpzTLVFAd00VAy4DCzB"
);

// API for

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - APi routes
app.get("/", (req, res) => res.status(200).send("test api"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK
  console.log("total: ", total);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

//example
//http://localhost:5001/clone-31185/us-central1/api
