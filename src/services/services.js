import axios from "axios";

const API_KEY = "17137658-c8f891f03fe3a9735392fc394";
const URL_REQUEST = "https://pixabay.com/api/?";
const DEFAULT_REQUEST =
  "&image_type=photo&orientation=horizontal&per_page=12";

export const fetchImgData = (searchName = "", searchPage = "1") => {
  return axios.get(
    URL_REQUEST +
      `q=${searchName}&page=${searchPage}&key=` +
      API_KEY +
      DEFAULT_REQUEST
  );
};