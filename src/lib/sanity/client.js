import sanityClient from "@sanity/client";
import groq from "groq";

const token = process.env.REACT_APP_SANITY_TOKEN;

export const client = sanityClient({
  projectId: "ayai1klo",
  dataset: "production",
  apiVersion: "2022-08-17",
  token,
});

export const comment_query_list = `*[_type == 'comment'] | order(_createdAt)`;
export const comment_query_list_with_groq = groq`*[_type == 'comment'] | order(_createdAt desc)`;
export const list_invitation_query = `*[_type == 'list_invitation']`;
