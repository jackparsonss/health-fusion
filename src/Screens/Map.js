import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import MapComponent from "../Components/MapComponent";

const Map = () => {
    const [origin, setOrigin] = useState(null);

    return (
        <SafeAreaView>
            <ScrollView>
                <GooglePlacesAutocomplete
                    style={styles.textInput}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Search for nearby pharmacies and hospitals"
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        console.log("INNER", details.geometry.location);
                        setOrigin({
                            location: details.geometry.location, //lat-long
                            description: details.description,
                        });
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                />

                {origin && <MapComponent origin={origin}></MapComponent>}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Map;

const styles = StyleSheet.create({
    textInput: {
        fontSize: 28,
    },
});
