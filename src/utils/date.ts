import { formatterTenUnit } from "./formatter";

export const getTodoDate = (date: Date) => {
  const YEAR = date.getFullYear();
  const MONTH = formatterTenUnit(date.getMonth() + 1);
  const DATE = formatterTenUnit(date.getDate());
  return `${YEAR}.${MONTH}.${DATE}`;
};

export const getWeek = (day: number) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return days[day];
};
