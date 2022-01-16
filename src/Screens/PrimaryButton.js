import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
export const PrimaryButton = (props) => {
  const {label, background, color} = props;
  const background_color = background || '#8E97FD';
  const label_color = color || '#ffff';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: background_color}]}>
        <Text style={[styles.label, {color: label_color}]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  btn: {
    borderRadius: 30,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'HelveticaNeue',
    padding: 20,
  },
});