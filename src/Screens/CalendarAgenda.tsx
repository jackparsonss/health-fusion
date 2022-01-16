import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, Text } from "react-native";
import { Agenda, LocaleConfig } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";

LocaleConfig.locales["default"] = {
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
    today: ["Today"],
};
LocaleConfig.defaultLocale = "default";

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
};

const Schedule: React.FC = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: "Item for " + strTime + " #" + j,
                            height: Math.max(
                                50,
                                Math.floor(Math.random() * 150)
                            ),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={"2017-05-16"}
                renderItem={renderItem}
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

export default Schedule;
