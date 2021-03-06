import { eventActions } from "../constants/eventConstants";

const initState = {
  sales: [
    {
      id: 1,
      title: "Product Demo",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "sales",
    },
    {
      id: 2,
      title: "Follow up with new clients",
      isEnabled: true,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "sales",
    },
    {
      id: 3,
      title: "Take feedback for new features",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "sales",
    },
  ],
  tech: [
    {
      id: 1,
      title: "Website quotation",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "tech",
    },
    {
      id: 2,
      title: "Android app development",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "tech",
    },
    {
      id: 3,
      title: "IOS App development",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "tech",
    },
  ],
  marketing: [
    {
      id: 1,
      title: "Product Demo",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "marketing",
    },
    {
      id: 2,
      title: "Product Demo",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "marketing",
    },
    {
      id: 3,
      title: "Product Demo",
      isEnabled: false,
      price: 50,
      duration: 45,
      attendees: ["MK", "TS", "AA"],
      link: "http://github.com/",
      type: "marketing",
    },
  ],
};

export const eventReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case eventActions.TOGGLE_EVENT:
      const newEvents = state[payload.type].map((event) => {
        if (event.id === payload.id) {
          event.isEnabled = !event.isEnabled;
        }
        return event;
      });
      const newState = {
        ...state,
        [payload.type]: newEvents,
      };

      return newState;
    default:
      return state;
  }
};
