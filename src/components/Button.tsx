import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps {
  title: string;
}

export function Button() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Confirmar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading
  }
})