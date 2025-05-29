const allowedOrigins = [
  "http://localhost:3000",
  "https://authentication-gold-xi.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    console.log("CORS Origin:", origin);  // logs the origin of the request
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // allow request
    } else {
      callback(new Error("Not allowed by CORS")); // block request
    }
  },
  credentials: true
}));
