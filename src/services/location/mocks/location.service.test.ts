import { locationRequest, locationTransform } from "../location.service";

test("Request locations and transform it", async () => {
  const response = await locationRequest("antwerp");
  const { lat, lng } = locationTransform(response);
  console.log({ lat, lng });
});
