module.exports = {
  createRequest: (req, res) => {
    return res.json({ message: "timeoff request created" });
  },

  approve: (req, res) => {
    return res.json({ message: `request ${req.params.id} approved` });
  },

  reject: (req, res) => {
    return res.json({ message: `request ${req.params.id} rejected` });
  }
};
