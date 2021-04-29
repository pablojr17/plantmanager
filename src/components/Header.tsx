import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import colors from '../styles/colors';

import userImg from '../assets/user.png';
import fonts from '../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

export function Header() {
  const [userName, setUserName] = useState<string>();
  const data = [
    "Mantenha as plantas ao alcance dos olhos!",
    "Não deixe a terra exposta.",
    "Tenha o número de vasos que você consegue dar conta.",
    "Lembre-se de adubar suas plantas.",
    "Toque a terra com a pontinha do dedo antes de molhar.",
    "Não precisa comprar um monte de ferramenta na jardinagem.",
    "Teste vários tipos de substratos.",
    "Pesquise sobre suas plantas.",
    "Não desista!",

  ];

  function handleStart() {
    const i = Math.floor(Math.random() * data.length);
    Alert.alert(data[i])
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')

      setUserName(user || '')
    }

    loadStorageUserName();
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>
        <Feather name="info" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.green,
    fontSize: 32,
  }
})