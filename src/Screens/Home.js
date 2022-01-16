import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Task from "../Components/Task";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { selectUser } from "../slices/authSlice";
import { useSelector } from "react-redux";

const Home = () => {
    const [medicationItems, setMedicationItems] = useState([{}]);
    const user = useSelector(selectUser);

    useEffect(() => {
        fetchDBMedication();
    }, [medicationItems]);

    const completeMedication = (index) => {
        const docId = medicationItems[index].id;

        const docRef = doc(db, "medication", docId);
        deleteDoc(docRef); // remove from db
    };

    const fetchDBMedication = async () => {
        const colRef = collection(db, "medication");
        const snapshot = await getDocs(colRef);
        let medications = [];
        snapshot.docs.forEach((doc) => {
            medications.push({ id: doc.id, data: doc.data().medication });
        });
        setMedicationItems(medications);
    };

    return (
        <View style={styles.container}>
            {/* Scroll view when list gets longer than page */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                keyboardShouldPersistTaps="handled"
            >
                {/* Today's Medications */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Today's Medications</Text>
                    <View style={styles.items}>
                        {/* This is where the Medications entered by the user will go! */}
                        {medicationItems.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => completeMedication(index)}
                                >
                                    <Task text={item.data} />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: "#FF6961",
        alignItems: "center",
        paddingTop: 70,
        paddingBottom: 20,
    },
    sectionTitle: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
    },
    tasksWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addText: {},
});

export default Home;
