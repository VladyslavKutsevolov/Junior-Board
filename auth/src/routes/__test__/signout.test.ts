import request from "supertest";
import { app } from "../../app";
import { raw } from "express";

describe("Sign out Route", () => {
  it("should clear cookie after sign out", async () => {
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "d@d.d",
        password: "12345",
      })
      .expect(201);

    const res = await request(app)
      .post("/api/users/signout")
      .send({})
      .expect(200);

    expect(res.get("Set-Cookie")[0]).toEqual(
      "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
    );
  });
});
