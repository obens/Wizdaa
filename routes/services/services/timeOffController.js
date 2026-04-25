const createRequest = (req, res) => {
  return res.json({ message: "created" });
};

const approve = (req, res) => {
  return res.json({ message: "approved" });
};

const reject = (req, res) => {
  return res.json({ message: "rejected" });
};

module.exports = {
  createRequest,
  approve,
  reject,
};
