import { eventActions } from "../constants/eventConstants";

export const toggle_event = (id, type) => {
  return {
    type: eventActions.TOGGLE_EVENT,
    payload: {
      id: id,
      type: type,
    },
  };
};
