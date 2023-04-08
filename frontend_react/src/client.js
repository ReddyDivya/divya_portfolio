//working with images using sanity

// Import using ESM URL imports in environments that supports it
import {createClient} from '@sanity/client';
import ImageUrlBuilder  from '@sanity/image-url';

// export const client = createClient({
//   projectId: '8rkkr4xz',
//   dataset: 'production',
//   apiVersion: '2023-04-07', // use current date (YYYY-MM-DD) to target the latest API version
//   useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,//Only if you want to update content with the client
// });

export async function getServerSideProps(context){
  const client = createClient({
    projectId: "8rkkr4xz",
    dataset: "production",
    useCdn: false,
  });

  const query = `*[_type == "works"]`;
  const works = await client.fetch(query);
  console.log(works.length);
  return {
    props:{
      works
    }
  }

}