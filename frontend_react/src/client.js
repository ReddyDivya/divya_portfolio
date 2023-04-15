import {createClient}  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "8rkkr4xz",
  dataset: 'portfolio',
  apiVersion: '2023-04-01',
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
