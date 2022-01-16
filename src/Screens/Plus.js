import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from "react-native";
import { PrimaryButton } from "../Components/PrimaryButton";
import DateTimePicker from "@react-native-community/datetimepicker";

const days = [
    { title: "SU", active: true },
    { title: "M", active: true },
    { title: "T", active: true },
    { title: "W", active: true },
    { title: "TH", active: false },
    { title: "F", active: false },
    { title: "S", active: true },
];

export const Plus = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState("time");
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>What Time </Text>
                <Text style={styles.heading}>Would You Like To</Text>
                <Text style={styles.heading}>Take Your Medication Today?</Text>

                <Text style={styles.subHeading}>
                    Be mindful whether or not your medications should be
                    supplemented with a meal!
                </Text>
            </View>

            <View style={styles.timePickerWrapper}>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            </View>

            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>Which Days Of The Week </Text>
                <Text style={styles.heading}>
                    Are You To Take This Medication?
                </Text>

                <Text style={styles.subHeading}>
                    In conjunction with our symptom tracking feature, your
                    physician will be able to assess any side effects from your
                    current medication habits.
                </Text>
            </View>

            <View style={styles.dayContainer}>
                {days.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => (item.active = !item.active)}
                            style={[
                                styles.dayItem,
                                {
                                    backgroundColor: item.active
                                        ? "#3F414E"
                                        : "#E5E5E5",
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.dayTitle,
                                    {
                                        color: item.active
                                            ? "#FFECCC"
                                            : "#A1A4B2",
                                    }, //white shade and gray
                                ]}
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.btnWrapper}>
                <PrimaryButton background={"#8E97FD"} label={"SAVE"} />

                <PrimaryButton
                    background={"#ffff"}
                    color={"#3F414E"}
                    label={"NO THANKS"}
                />
            </View>
        </View>
    );
};

export default Plus;

/*
export const colors = {
    primary: '#8E97FD',
    white: '#ffff',
    whiteShade: '#FFECCC',
    whiteShadeBg: '#EBEAEC',
    gray: '#A1A4B2',
    bg: '#F2F3F7',
    secondaryBg: '#E5E5E5',
    darkBg: '#333242',
    lightBg: '#ECD3C2',
    heading: '#3F414E',
    facebookBg: '#7583CA',
  };
  */

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        padding: 20,
    },
    headingWrapper: {
        marginTop: 30,
    },
    heading: {
        fontSize: 24,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
        lineHeight: 25,
        color: "#3F414E",
        justifyContent: "center",
    },
    subHeading: {
        fontFamily: "HelveticaNeue",
        fontSize: 16,
        fontWeight: "500",
        color: "#FF6961",
        marginTop: 15,
        lineHeight: 25,
    },
    timePickerWrapper: {
        backgroundColor: "#F2F3F7",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 0,
        marginRight: 125,
    },
    dayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
    },
    dayItem: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    dayTitle: {
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        padding: 10,
    },
    btnWrapper: {
        marginTop: 35,
    },
});
