// sanity.js
import { createClient } from "@sanity/client";
import configData from "config.json"

export const sanityClient = createClient({
  projectId: "ynmpcv7c",
  // projectId: configData.sanityProjectId
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-08-24", // use current date (YYYY-MM-DD) to target the latest API version
});