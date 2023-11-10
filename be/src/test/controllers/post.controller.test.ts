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

describe("API /posts", () => {
  it("should return all posts", async () => {
    const res = await request(app).get("/posts");
    expect(res.statusCode).toBe(200);
    expect(res.body.docs.length).toBeGreaterThan(0);
  });
});

describe("API /posts:/id", () => {
  it("should throw an error if post not found", async () => {
    const res = await request(app)
      .get("/posts/99")
      .catch((e: any) => e);
    expect(res.statusCode).toBe(400);
  });

  it("should return a post", async () => {
    const res = await request(app).get("/posts/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.docs._id).toBe(1);
  });
});
