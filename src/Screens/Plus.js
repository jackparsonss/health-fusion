import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import { PrimaryButton } from "../Components/PrimaryButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { selectUser } from "../slices/authSlice";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

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
    const [medication, setMedication] = useState("");
    const user = useSelector(selectUser);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
    };

    const addMedication = async () => {
        const colRef = collection(db, "medication");
        await addDoc(colRef, {
            medication: [medication],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>What Is</Text>
                <Text style={styles.heading}>The Name Of</Text>
                <Text style={styles.heading}>Your Medication?</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Medication"}
                    value={medication}
                    onChangeText={(text) => setMedication(text)}
                />
            </KeyboardAvoidingView>
            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>What Time </Text>
                <Text style={styles.heading}>Would You Like To</Text>
                <Text style={styles.heading}>Take Your Medication Today?</Text>
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
                <PrimaryButton
                    background={"#04C38E"}
                    label={"SAVE"}
                    isSave={true}
                    updateDB={addMedication}
                />

                <PrimaryButton
                    isSave={false}
                    background={"#ffff"}
                    color={"#3F414E"}
                    label={"NO THANKS"}
                />
            </View>
        </View>
    );
};

export default Plus;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        padding: 20,
    },
    input: {
        marginTop: 10,
        marginLeft: 50,
        marginBottom: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
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
    timePickerWrapper: {
        backgroundColor: "#F2F3F7",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 125,
    },
    dayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
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
        marginTop: 65,
    },
});
