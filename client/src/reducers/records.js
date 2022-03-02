import { ADD_RECORDS } from "../actions/types";

const initialState = {
  records: [],
};

const records = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("records reducer", action);
  switch (type) {
    case ADD_RECORDS:
      return {
        ...state,
        records: payload,
      };
    default:
      return state;
  }
};

export default records;
