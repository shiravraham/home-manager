import axios from "axios";
import { ADD_RECORDS, ADD_RECORDS_FAIL } from "./types";

export const addRecords = (records) => async (dispatch) => {
  console.log("adding records action", records);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(records);

  try {
    const res = await axios.post("api/records", body, config);

    dispatch({
      type: ADD_RECORDS,
      payload: res.data.map((record) => {
        return {
          key: record._id,
          ...record,
        };
      }),
    });
  } catch (error) {
    console.log("adding records error", error);
    dispatch({
      type: ADD_RECORDS_FAIL,
    });
  }
};
