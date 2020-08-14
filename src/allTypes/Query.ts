import { queryType } from "@nexus/schema";
import { data } from "src/data";
import { Bio } from "./index";

export const query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });
  },
});
