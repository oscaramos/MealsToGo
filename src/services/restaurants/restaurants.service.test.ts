import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

test("mockup and transform is working", async () => {
  const response = await restaurantsRequest();
  const transformed = restaurantsTransform(response);
  console.log(transformed);
});
