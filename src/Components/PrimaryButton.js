import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export const PrimaryButton = ({
    label,
    background,
    color,
    isSave,
    updateDB,
}) => {
    const background_color = background || "#8E97FD";
    const label_color = color || "#ffff";

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    if (isSave) {
                        updateDB();
                    }
                    navigation.navigate("Home");
                }}
                style={[styles.btn, { backgroundColor: background_color }]}
            >
                <Text style={[styles.label, { color: label_color }]}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingBottom: 15,
    },
    btn: {
        borderRadius: 10,
    },
    label: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "HelveticaNeue",
        padding: 20,
    },
});
