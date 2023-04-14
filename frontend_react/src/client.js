//working with images using sanity

// Import using ESM URL imports in environments that supports it
import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "8rkkr4xz",
  dataset: "production",
  // apiVersion: "2023-04-07", // use current date (YYYY-MM-DD) to target the latest API version
  // useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,//Only if you want to update content with the client
});

// export async function fetchText(query) {
//   let response = await fetch(query);
//   console.log('documents >>> ', response);
// }

// // fetchText();

const builder = imageUrlBuilder(createClient);

export const urlFor = (source) => builder.image(source);