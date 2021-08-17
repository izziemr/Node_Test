const Transaction = require("../Models/Transaction");
const Lender = require("../Models/Lender");
const Loan = require("../Models/Loan");

exports.transactionController = (req, res) => {
  const max_loan_transaction = req.query.max_loan_transaction;
  const reverse_sorted = req.query.reverse_sorted;

  // run queries from question 2
  Loan.find()
    .where("status")
    .in(["Available", "Funded"])
    .populate({
      path: "transaction",
      match: { lenders: { $gte: 2 }, options: { limit: max_loan_transaction } },
    })
    .sort(reverse_sorted)
    .exec(function (err, loans) {
      if (err) {
        return res.status(400).json({ err: err.message });
      }
      return res.json({ loans });
    });
};
