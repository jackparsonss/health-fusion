import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["default"] = {
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
    today: ["Today"]
};
LocaleConfig.defaultLocale = "default";

const CalendarPage = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                items={{
                    "2022-01-15": [{ name: "Aspirin" }],
                    "2022-01-16": [{ name: "Cough Syrup", height: 80 }],
                }}
                theme={{
                    backgroundColor: "#FF6961",
                    calendarBackground: "#ffffff",
                    textSectionTitleColor: "#ABAFBA",
                    textSectionTitleDisabledColor: "#ABAFBA",
                    selectedDayBackgroundColor: "#04C38E",
                    selectedDayTextColor: "#ffffff",
                    dayTextColor: "#000",
                    textDisabledColor: "#ABAFBA",
                    dotColor: "#04C38E",
                    selectedDotColor: "#FF6961",
                    monthTextColor: "#000",
                    textDayFontFamily: "Inter_200ExtraLight",
                    textMonthFontFamily: "Inter_200ExtraLight",
                    textDayHeaderFontFamily: "Inter_200ExtraLight",
                    textDayFontWeight: "200",
                    textMonthFontWeight: "bold",
                    textDayHeaderFontWeight: "200",
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                    agendaDayTextColor: "white",
                    agendaDayNumColor: "white",
                    agendaTodayColor: "#04C38E",
                    agendaKnobColor: "#04C38E",
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF6961",
    }
})

export default CalendarPage;
