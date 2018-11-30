import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Codes")
export class Codes {
  @JsonProperty("admin_district", String)
  admin_district: string = undefined;
  @JsonProperty("admin_county", String)
  admin_county: string = undefined;
  @JsonProperty("admin_ward", String)
  admin_ward: string = undefined;
  @JsonProperty("parish", String)
  parish: string = undefined;
  @JsonProperty("parliamentary_constituency", String)
  parliamentary_constituency: string = undefined;
  @JsonProperty("ccg", String)
  ccg: string = undefined;
  @JsonProperty("nuts", String)
  nuts: string = undefined;
}
