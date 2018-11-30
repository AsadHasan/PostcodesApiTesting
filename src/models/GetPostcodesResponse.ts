import { Result } from "./Result";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("GetPostcodesResponse")
export class GetPostcodesResponse {
  @JsonProperty("status", Number)
  status: number = undefined;
  @JsonProperty("result", Result)
  result: Result = undefined;
}
