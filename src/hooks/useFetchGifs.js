import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorie) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categorie).then((data) =>
      setState({
        data: data,
        loading: false,
      })
    );
  }, [categorie]);

  return state;
};
