export const getLocalStorage = <T>(key: string): null | T => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return null;
  }
  return JSON.parse(data);
};

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
