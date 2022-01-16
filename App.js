import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Inter_200ExtraLight } from "@expo-google-fonts/inter";
import Footer from "./src/Components/Footer";
import Calendar from "./src/Screens/Calendar";
import Home from "./src/Screens/Home";
import Map from "./src/Screens/Map";
import Settings from "./src/Screens/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_200ExtraLight,
    });

    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            <Footer />
        </NavigationContainer>
    );
}
