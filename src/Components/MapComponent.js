import { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapComponent = ({ origin }) => {
    useEffect(() => {
        console.log("RENDERED");
    }, []);
    return (
        <View style={styles.container}>
            <Text style={{ height: 700 }}>Test</Text>
            <MapView
                mapType="mutedStandard"
                style={styles.containerMap}
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Location"
                    description={origin.description}
                    identifier="origin"
                />
            </MapView>
        </View>
    );
};

export default MapComponent;

const styles = StyleSheet.create({
    containerMap: {
        // display: "flex",
        flex: 1,
        // height: 100,
        ...StyleSheet.absoluteFillObject,
        height: Dimensions.get("window").height,
    },
});
