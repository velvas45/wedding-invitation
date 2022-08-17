import sanityClient from "@sanity/client";

const token = process.env.REACT_APP_SANITY_TOKEN;

export const client = sanityClient({
  projectId: "ayai1klo",
  dataset: "production",
  apiVersion: "2022-08-17",
  token,
});

export const comment_query_list = `*[_type == 'comment']`;
