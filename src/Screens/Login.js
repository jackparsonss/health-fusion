import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
} from "react-native";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("Home");
            }
        });

        return unsubscribe;
    }, []);

    const handleSignUp = async () => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredentials.user;
        } catch (err) {
            alert(err.message);
        }
    };

    const handleLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonOutlineText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: "#04C38E",
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
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#04C38E",
        borderWidth: 2,
    },
    buttonOutlineText: {
        fontWeight: "700",
        fontSize: 18,
        color: "#04C38E",
    },
});
