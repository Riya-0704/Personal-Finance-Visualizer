const express = require("express");
const cors = require("cors");
const transactionsRoute = require("./routes/transactionRoute");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionsRoute);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
