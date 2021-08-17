const express = require("express");
const { transactionController } = require("../Controllers/transactions");
const router = express.Router();

router.get(
  "/api/loantransaction?max_load_transaction=5&sorted=stl",
  transactionController
);

module.exports = router;
