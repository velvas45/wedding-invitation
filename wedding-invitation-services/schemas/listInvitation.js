export default {
  name: "list_invitation",
  title: "List Invitation",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Invitation To",
      type: "string",
      description: "Field yang digunakan untuk params url 'invitation_to'",
    },
    {
      name: "url",
      title: "Link Wedding",
      type: "url",
      description: "Field yang digunakan untuk link user yang diundang",
    },
    {
      name: "label",
      title: "Label Description Modal",
      type: "string",
      description:
        "Field yang digunakan untuk labeling di modal awal membuka website",
    },
  ],
  initialValue: {
    slug: Math.random().toString(36).slice(2, 10),
  },
};
