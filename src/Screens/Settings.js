import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
    const navigation = useNavigation();
    const handleLogout = async () => {
        await signOut(auth);
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text style={styles.txt}>Settings</Text>
                <Text style={styles.txt2}>Welcome</Text>
                <Text style={styles.txt2}>EMAIL</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    txt: {
        fontWeight: "bold",
        fontSize: 40,
    },
    txt2: {
        paddingTop: 10,
        fontWeight: "500",
        fontSize: 20,
    },
    buttonContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        marginTop: 450,
        backgroundColor: "#FF6961",
        width: "80%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
});
