const request = require("supertest");
const app = require("../src/app");

describe("Time Off API", () => {
  it("should create request", async () => {
    const res = await request(app)
      .post("/api/timeoff/request")
      .send({ employeeId: 1, days: 2 });

    expect(res.status).toBe(201);
  });
});
