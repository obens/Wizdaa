const balanceService = require("./balanceService");

const requests = [];

function createRequest(employeeId, days) {
  const request = {
    id: requests.length + 1,
    employeeId,
    days,
    status: "PENDING",
  };

  requests.push(request);
  return request;
}

function approveRequest(id) {
  const request = requests.find((r) => r.id == id);

  if (!request) return null;

  const hasBalance = balanceService.deductBalance(
    request.employeeId,
    request.days,
  );

  if (!hasBalance) {
    request.status = "REJECTED";
    return request;
  }

  request.status = "APPROVED";
  return request;
}

function rejectRequest(id) {
  const request = requests.find((r) => r.id == id);
  if (!request) return null;

  request.status = "REJECTED";
  return request;
}

module.exports = {
  createRequest,
  approveRequest,
  rejectRequest,
};
