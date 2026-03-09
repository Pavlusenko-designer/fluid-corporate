import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source).url();
};

export const urlForImage = (source: SanityImageSource) => {
  if (!source) {
    return null;
  }
  return builder.image(source);
};
