const syncBalance = (req, res) => {
  return res.json({ message: "synced" });
};

module.exports = {
  syncBalance,
};
