import dayjs from "dayjs";

export const events = [
  {
    id: 1,
    title: "Meeting",
    start: dayjs("2024-02-15T08:00:00").toDate(),
    end: dayjs("2024-02-15T09:00:00").toDate(),
    type: "normal",
    visibility: "public",
  },
  {
    id: 2,
    title: "Stretching",
    start: dayjs("2024-02-15T10:00:00").toDate(),
    end: dayjs("2024-02-15T11:00:00").toDate(),
    type: "stretching",
    visibility: "public",
  },
  {
    id: 3,
    title: "Busy",
    start: dayjs("2024-02-15T13:00:00").toDate(),
    end: dayjs("2024-02-15T14:00:00").toDate(),
    type: "all-day",
    visibility: "private",
  },
];
