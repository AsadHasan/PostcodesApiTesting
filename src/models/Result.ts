import { Codes } from "./Codes";
import { Any, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Result")
export class Result {
  @JsonProperty("postcode", String)
  postcode: string = undefined;
  @JsonProperty("quality", Number)
  quality: number = undefined;
  @JsonProperty("eastings", Number)
  eastings: number = undefined;
  @JsonProperty("northings", Number)
  northings: number = undefined;
  @JsonProperty("country", String)
  country: string = undefined;
  @JsonProperty("nhs_ha", String)
  nhs_ha: string = undefined;
  @JsonProperty("longitude", Number)
  longitude: number = undefined;
  @JsonProperty("latitude", Number)
  latitude: number = undefined;
  @JsonProperty("european_electoral_region", String)
  european_electoral_region: string = undefined;
  @JsonProperty("primary_care_trust", String)
  primary_care_trust: string = undefined;
  @JsonProperty("region", String)
  region: string = undefined;
  @JsonProperty("lsoa", String)
  lsoa: string = undefined;
  @JsonProperty("msoa", String)
  msoa: string = undefined;
  @JsonProperty("incode", String)
  incode: string = undefined;
  @JsonProperty("outcode", String)
  outcode: string = undefined;
  @JsonProperty("parliamentary_constituency", String)
  parliamentary_constituency: string = undefined;
  @JsonProperty("admin_district", String)
  admin_district: string = undefined;
  @JsonProperty("parish", String)
  parish: string = undefined;
  @JsonProperty("admin_county", Any)
  admin_county?: any = undefined;
  @JsonProperty("admin_ward", String)
  admin_ward: string = undefined;
  @JsonProperty("ccg", String)
  ccg: string = undefined;
  @JsonProperty("nuts", String)
  nuts: string = undefined;
  @JsonProperty("codes", Codes)
  codes: Codes = undefined;
}
