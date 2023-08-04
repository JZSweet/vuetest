import { toHTML } from '@portabletext/to-html';

export default defineNuxtPlugin((nuxtApp) => {

  const portableTextToHTML = (source) => {
    return toHTML(source);
  };

  return {
    provide: {
      portableTextToHTML,
    },
  };
});
