import { DATA } from "../../data";
import { LOAD_POSTS, TOOGLE_BOOKED } from "../types";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const toogleBooked = (id) => {
  return {
    type: TOOGLE_BOOKED,
    payload: id,
  };
};
