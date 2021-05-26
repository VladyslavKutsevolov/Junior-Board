import request from "supertest";
import { app } from "../../app";

describe("Current user Route", () => {
  it("should respond with details about current user", async () => {
    const cookie = await global.signin();
    const res = await request(app)
      .get("/api/users/currentuser")
      .set("Cookie", cookie)
      .send()
      .expect(200);

    expect(res.body.currentUser.email).toEqual("test@test.com");
  });

  it("should respond with current user null if not authenticated", async () => {
    const res = await request(app)
      .get("/api/users/currentuser")
      .send()
      .expect(200);

    expect(res.body.currentUser).toBeNull();
  });
});
