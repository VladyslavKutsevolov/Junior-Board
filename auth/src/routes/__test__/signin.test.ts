import request from "supertest";
import { app } from "../../app";

describe("Sign in Route", () => {
  it("should fail when supplied email not exist ", async () => {
    await request(app)
      .post("/api/users/signin")
      .send({
        email: "q@q.q",
        password: "qewqrqr",
      })
      .expect(400);
  });
  it("should fail when supplied incorrect password", async () => {
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "qewqrqr",
      })
      .expect(201);

    await request(app)
      .post("/api/users/signin")
      .send({
        email: "test@test.com",
        password: "122222",
      })
      .expect(400);
  });
  it("should succeed  with valid credentials", async () => {
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "122222",
      })
      .expect(201);

    const res = await request(app)
      .post("/api/users/signin")
      .send({
        email: "test@test.com",
        password: "122222",
      })
      .expect(200);

    expect(res.get("Set-Cookie")).toBeDefined();
  });
});
