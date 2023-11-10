const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
import "@types/jest";

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.CONNECTION_STRING as string);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("API /comments", () => {
  it("should return all posts", async () => {
    const res = await request(app).get("/comments");
    expect(res.statusCode).toBe(200);
    expect(res.body.docs.length).toBeGreaterThan(0);
  });
});
