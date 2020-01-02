import globalContext from "window-or-global";

const getItem = key => {
  const value =
    globalContext.sessionStorage && globalContext.sessionStorage.getItem(key);

  if (typeof value === "undefined" || value === "false" || value === null) {
    return false;
  }

  if (value === "true") {
    return true;
  }

  return value;
};

const setItem = (key, value) => {
  globalContext.sessionStorage &&
    globalContext.sessionStorage.setItem(key, value);
};

export { getItem, setItem };
