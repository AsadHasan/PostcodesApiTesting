import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as request from "superagent";
import { expect } from "chai";
import { JsonConvert } from "json2typescript";
import { GetPostcodesResponse } from "../models/GetPostcodesResponse";

describe("GET request to postcodes API", () => {
  let response: request.Response;
  let jsonConvert: JsonConvert = new JsonConvert();
  it("should return success status", async () => {
    response = await chai
      .use(chaiHttp)
      .request("https://api.postcodes.io/")
      .get("postcodes/sw1a2jr");
    await expect(response.ok).to.be.true;
  });
  it("should return correct admin ward", async () => {
    try {
      let responseBody: GetPostcodesResponse = jsonConvert.deserialize(
        response.body,
        GetPostcodesResponse
      );
      const expectedAdminWard: string = "St James's";
      let result: string = responseBody.result.admin_ward;
      expect(result).to.equal(expectedAdminWard);
    } catch (e) {
      console.log(<Error>e);
    }
  });
});
