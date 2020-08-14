import { queryType } from "@nexus/schema";

export const query = queryType({
  definition(t) {
    t.string("name", () => "Ankit Kumar");
  },
});
