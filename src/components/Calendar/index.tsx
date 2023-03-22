import { Calendar } from "react-native-calendars";
import "../../utils/localeCalendar";
export const DateManager = () => {
  return (
    <Calendar
      style={{ borderRadius: 10, padding: 5 }}
      theme={{
        dayTextColor: "white",
        monthTextColor: "white",
        calendarBackground: "#212A2D",
        todayBackgroundColor: "#0077B6",
        todayButtonPosition: "center",
        textDayFontFamily: "OswaldLight",
        textMonthFontSize: 16,
        todayButtonFontSize: 12,
      }}
    />
  );
};
