import {
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const data = [
    {
        id: 1,
        screen: "Home",
        icon: "home",
    },
    {
        id: 2,
        screen: "Calendar",
        icon: "calendar",
    },
    {
        id: 3,
        screen: "Plus",
        icon: "plus",
    },
    {
        id: 4,
        screen: "Map",
        icon: "location-pin",
    },
    {
        id: 5,
        screen: "Settings",
        icon: "settings",
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
                <Icon
                    type="simple-line-icon"
                    color="#ABAFBA"
                    name={item.icon}
                />
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
