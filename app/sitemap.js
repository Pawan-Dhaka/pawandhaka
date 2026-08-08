import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pawandhaka.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://pawandhaka.vercel.app/About",
      lastModified: new Date(),
    },
    {
      url: "https://pawandhaka.vercel.app/Projects",
      lastModified: new Date(),
    },
    {
      url: "https://pawandhaka.vercel.app/Skills",
      lastModified: new Date(),
    },
    {
      url: "https://pawandhaka.vercel.app/Hobbies",
      lastModified: new Date(),
    },
    {
      url: "https://pawandhaka.vercel.app/Connect",
      lastModified: new Date(),
    },
  ];
}
