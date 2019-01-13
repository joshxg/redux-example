const baseUrl = "http://numbersapi.com";

const trivia = {
  url: "/random/trivia",
  method: "get",
  baseURL: baseUrl
};

const math = {
  url: "/random/math",
  method: "get",
  baseURL: baseUrl
};

const date = {
  url: "/random/date",
  method: "get",
  baseURL: baseUrl
};

const year = {
  url: "/random/year",
  method: "get",
  baseURL: baseUrl
};

const AXIOS_CONFIGS = {
  trivia,
  math,
  date,
  year
};

export default AXIOS_CONFIGS;
