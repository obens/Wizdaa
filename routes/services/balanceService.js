const balances = {};

function setBalance(employeeId, days) {
  balances[employeeId] = days;
}

function getBalance(employeeId) {
  return balances[employeeId] || 0;
}

function deductBalance(employeeId, days) {
  if (balances[employeeId] >= days) {
    balances[employeeId] -= days;
    return true;
  }
  return false;
}

module.exports = {
  setBalance,
  getBalance,
  deductBalance,
};
