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

describe("GET /posts", () => {
  it("should return all posts", async () => {
    const response = await request(app).get("/posts");
    expect(response.status).toBe(200);
  });
});

describe("GET /posts/65e0b867ae632ccb9e0cd121", () => {
  it("should return a post", async () => {
    const response = await request(app).get("/posts/65e0b867ae632ccb9e0cd121");
    expect(response.status).toBe(200);
  });
});

describe("GET /posts/65e0b867ae632ccb9e0cd121/comments", () => {
  it("should return all comments for a post", async () => {
    const response = await request(app).get("/posts/65e0b867ae632ccb9e0cd121/comments");
    expect(response.status).toBe(200);
  });
})

describe("POST /posts", () => {
  it("should add a post", async () => {
    const response = await request(app).post("/posts").send({
      owner: "65e0b843ae632ccb9e0cd11e",
      tags: ["test"],
      title: "Test Post",
      content: "This is a test post",
    });
    expect(response.status).toBe(201);
  });
});

describe("PUT /posts/65e0b867ae632ccb9e0cd121", () => {
  it("should update a post", async () => {
    const response = await request(app).put("/posts/65e0b867ae632ccb9e0cd121").send({
      owner: "65e0b843ae632ccb9e0cd11e",
      tags: ["test"],
      title: "Test Post",
      content: "This is a test post",
    });
    expect(response.status).toBe(200);
  });
});

describe("DELETE /posts/65e0b867ae632ccb9e0cd122", () => {
  it("should delete a post", async () => {
    const response = await request(app).delete("/posts/65e0b867ae632ccb9e0cd121");
    expect(response.status).toBe(204);
  });
});
