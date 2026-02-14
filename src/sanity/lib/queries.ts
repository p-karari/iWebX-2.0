import { defineQuery } from 'next-sanity';

export const POSTS_QUERY = defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "date": publishedAt,
  "imageUrl": mainImage.asset->url,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  "categories": categories[]->title,
  body
}`);