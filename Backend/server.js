const express = require('express');
const cors = require('cors');

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://authentication-gold-xi.vercel.app"  // your deployed frontend URL here
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests (Postman etc)
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// your other middleware and routes here

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started');
});
