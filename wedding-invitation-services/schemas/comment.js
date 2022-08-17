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
    {
      title: "created_at",
      name: "created_at",
      type: "date",
      readOnly: true,
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
  ],
};
