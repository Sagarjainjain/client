import * as api from "../api/index";

export const createMovie = (newMovie) => async (dispatch) => {
  try {
    const { data } = await api.createMovie(newMovie);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
