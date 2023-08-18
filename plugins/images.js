import imageUrlBuilder from '@sanity/image-url';

export default defineNuxtPlugin((nuxtApp) => {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.config);

  const thumbnailURL = (source) => {
    return builder.image(source).width(400).height(400).url();
  };
  const smallImgURL = (source) => {
  return builder.image(source).width(600).url();
  };
  const mediumImgURL = (source) => {
    return builder.image(source).width(800).url();
  };
  function largeImgURL(source) {
    return builder.image(source).width(1200).url();
  }
  function originalImgURL(source) {
    return builder.image(source).url();
  }

  return {
    provide: {
      smallImgURL,
      mediumImgURL,
      largeImgURL,
      originalImgURL,
      thumbnailURL,
    },
  };
});
