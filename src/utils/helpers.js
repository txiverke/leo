export const getSlug = text => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
