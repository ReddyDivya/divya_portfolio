// Inside sanity.js

// import { createClient } from "@sanity/client";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
 dataset: "production",
 projectId: "8rkkr4xz",
 apiVersion: "2023-04-14"
};

// This is to fetch data by making a query to the backend in sanity studio
export const sanityClient = createClient(config);

// This will parse the source we get back from the query and give us the image url
export const urlFor = (source) => imageUrlBuilder(config).image(source);

// export const useCurrentUser = createCurrentUserHook(config);
