const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
	await mongoose.connect(process.env.DB_URL);
});

afterEach(async () => {
	await mongoose.connection.close();
});

describe("GET /users", () => {
  it("should return all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });
});


describe("GET /users/65e0b848ae632ccb9e0cd11f", () => {
  it("should return a user", async () => {
    const response = await request(app).get("/users/65e0b848ae632ccb9e0cd11f");
    expect(response.status).toBe(200);
  });
})
