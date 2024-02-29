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

describe("GET /comments", () => {
  it("should return all comments", async () => {
    const response = await request(app).get("/posts");
    expect(response.status).toBe(200);
  });
});

describe("GET /comments?postId", () => {
  it("should return comments by post", async () => {
    const response = await request(app).get("/comments?postId=65e0b867ae632ccb9e0cd121");
    expect(response.status).toBe(200);
  });
});

describe("GET /comments/65e0b898ae632ccb9e0cd127", () => {
  it("should return a comment", async () => {
    const response = await request(app).get("/comments/65e0b898ae632ccb9e0cd127");
    expect(response.status).toBe(200);
  });
})

describe("POST /comments", () => {
  it("should add a comment", async () => {
    const response = await request(app).post("/comments").send({
      owner: "65e0b821ae632ccb9e0cd11b",
      post: "65e0b867ae632ccb9e0cd121",
      content: "This is a test comment"
    });
    expect(response.status).toBe(201);
  });
})

describe("PUT /comments/65e0b898ae632ccb9e0cd127", () => {
  it("should update a comment", async () => {
    const response = await request(app).put("/comments/65e0b898ae632ccb9e0cd127").send({
      post: "65e0b867ae632ccb9e0cd121",
      owner: "65e0b821ae632ccb9e0cd11b",
      content: "This is an updated test comment"
    });
    expect(response.status).toBe(200);
  });
})

describe("DELETE /comments/65e0b898ae632ccb9e0cd127", () => {
  it("should delete a comment", async () => {
    const response = await request(app).delete("/comments/65e0b898ae632ccb9e0cd127");
    expect(response.status).toBe(204);
  });
})