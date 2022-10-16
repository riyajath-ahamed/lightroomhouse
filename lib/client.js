//import sanityClient from '@sanity/client';



const sanityClient = require('@sanity/client');
import imageUrlBuilder from '@sanity/image-url';
// This is the client that connects to the Sanity Studio
//https://www.sanity.io/docs/js-client

export const client = sanityClient({
    projectId:'ey22gi79',
    dataset:'production',
    apiVersion: '2022-10-16',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);