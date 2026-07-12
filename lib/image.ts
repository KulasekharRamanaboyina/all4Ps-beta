import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export const getImageUrl = (post: any) => {
  if (post.mainImage && typeof post.mainImage !== "string") {
    try {
      return urlFor(post.mainImage).width(1200).url();
    } catch {
      return "/images/home-page-delivery-robot-futuristic-environment.jpg";
    }
  }
  return post.mainImage || "/images/home-page-delivery-robot-futuristic-environment.jpg";
};