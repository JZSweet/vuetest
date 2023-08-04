export const globalSettingsQuery = groq`*[_type == "globalSettings"]`

export const projectQuery = groq`
*[_type == "project"]{
    _id,
    title,
    "slug": slug.current,
    color,
    mainImage,
    description,
}`;