export function setData(data) {
  return {
    type: "SET_FACT",
    payload: data
  };
}

export function getFact(endpoint) {
  return {
    type: "GET_FACT",
    payload: endpoint
  };
}

export function setError(message) {
  return {
    type: "SET_ERROR",
    payload: message
  };
}
