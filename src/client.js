import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1sf816ry",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-06-01",
  token:
    "skPWZfaYmKpd4pqoiSCdkG5cE8Zq3FpLQuKbRGcBUZMtEav3rECBgG8VTWUQ0vuIZlc4I1Ur053lAY5BI8dciY50AEkM5CfnwCJo3D9nm8mYpo4WV2sxgBTVAF9toGW8wFGhpBbmWAIVqgVK5vqjEjfd763KZAigBO6QkKmezFC7pItdgtmG",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
