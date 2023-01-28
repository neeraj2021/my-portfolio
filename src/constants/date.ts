import moment from "moment";

export const getExperience = (date) => {
  const currentDate = moment();
  const startDate = moment(date);

  const y_diff = currentDate.diff(startDate, "years");
  const m_diff = currentDate.diff(startDate, "months");

  let diff = "";
  if (y_diff > 0) {
    diff += y_diff + " " + "year ";
  }
  if (m_diff % 12 > 0) {
    diff += (m_diff % 12) + " " + "months";
  }
  return diff;
};
