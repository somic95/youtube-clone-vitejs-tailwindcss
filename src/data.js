export const API_KEY = "AIzaSyBsvxoT5OZ6lLsZv2ExYfQO0VnAfpilFv0";

export const value_converter = (value) => {
  if (value >= 1000000000) {
    return Math.floor(value / 1000000000) + "B";
  } else if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
