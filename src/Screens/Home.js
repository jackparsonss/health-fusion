import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.font}>Today's Medications</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF6961",
        alignItems: "center",
        paddingTop: 30
    },
    font: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    }
});

export default Home;
