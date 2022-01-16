import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Inter_200ExtraLight } from "@expo-google-fonts/inter";
import Footer from "./src/Components/Footer";
import Calendar from "./src/Screens/CalendarAgenda";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Map from "./src/Screens/Map";
import Plus from "./src/Screens/Plus";
import Settings from "./src/Screens/Settings";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Stack = createNativeStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_200ExtraLight,
    });

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Calendar"
                        component={Calendar}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Map"
                        component={Map}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                    name="Plus"
                    component={Plus}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
                <Footer />
            </NavigationContainer>
        </Provider>
    );
}
