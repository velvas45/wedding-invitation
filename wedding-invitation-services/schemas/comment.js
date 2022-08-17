export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "message",
      title: "Message",
      type: "string",
      readOnly: true,
    },
  ],
};
