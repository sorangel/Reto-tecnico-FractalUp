import { createApi } from "unsplash-js";
import { UNSPLASH_ACCESS_KEY } from "../../constants.tsx";

export const unsplashService = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});
