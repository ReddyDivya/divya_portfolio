//working with images using sanity
import {createClient} from '@sanity/client';
import ImageUrlBuilder  from '@sanity/image-url';

// export const client = createClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2023-04-06',
//   useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
// });


export const client = createClient({
  projectId: '8rkkr4xz',
  dataset: 'production',
  apiVersion: '2023-04-06',
  useCdn: true,
  token: 'skAbD8Pik1s2V4o98TvC9um8SOJuQY65QCMmaQryJpUd8Y9eTLbWoUYOtWBwQPLtPlTcBZudtb2gRi2Fz04NCF6pXQULdbWGJmYiiD0QCO718DcNM3oos0a84CpEpyXYUPtUYbsLUhYbUbfkOaj1mRxvshLt9BK38JyLMmtzBlBMRoNML2pt',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);