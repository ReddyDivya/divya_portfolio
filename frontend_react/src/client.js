import {createClient}  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "8rkkr4xz",
  dataset: 'portfolio',
  apiVersion: '2023-04-01',
  useCdn: true,
  //token is important for creating a field in sanity[see contact]
  token:'skAbD8Pik1s2V4o98TvC9um8SOJuQY65QCMmaQryJpUd8Y9eTLbWoUYOtWBwQPLtPlTcBZudtb2gRi2Fz04NCF6pXQULdbWGJmYiiD0QCO718DcNM3oos0a84CpEpyXYUPtUYbsLUhYbUbfkOaj1mRxvshLt9BK38JyLMmtzBlBMRoNML2pt'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
