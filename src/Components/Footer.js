import {
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const data = [
    {
        id: 1,
        screen: "Home",
    },
    {
        id: 2,
        screen: "Calendar",
    },
    {
        id: 3,
        screen: "Plus",
    },
    {
        id: 4,
        screen: "Map",
    },
    {
        id: 5,
        screen: "Settings",
    },
];

const Footer = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.screen)}
        >
            <View>
                <Text style={styles.txt}>{item.screen}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
    },
    item: {
        marginLeft: 30,
    },
    txt: {
        color: "#ABAFBA",
    },
});
