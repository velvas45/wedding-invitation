import { gapi } from "gapi-script";

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_GOOGLE_KEY;

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export const handleClickSaveCalendar = () => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: [DISCOVERY_DOC],
      scope: SCOPES,
      plugin_name: "React js",
    });

    gapi.client.load("calendar", "v3", () => {});

    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        const event = {
          summary: "The Wedding of Anggie & Helmi",
          location: "Hotel Swiss-Bel Bogor - Kota Bogor",
          description:
            "We are so excited and can't wait to see you. Help us capture our wedding with joy.",
          start: {
            dateTime: "2022-11-12T01:00:00.000Z",
            timeZone: "Asia/Jakarta",
          },
          end: {
            dateTime: "2022-11-12T06:00:00.000Z",
            timeZone: "Asia/Jakarta",
          },
          recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
          // attendees: [
          //   { email: "lpage@example.com" },
          //   { email: "sbrin@example.com" },
          // ],
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "popup", minutes: 10 },
            ],
          },
        };

        const request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          resource: event,
        });

        request.execute((event) => {
          window.open(event.htmlLink);
        });
      })
      .catch((err) => console.log(err));
  });
};
