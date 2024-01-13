import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/background'
import Logo from '../components/logo'
import Header from '../components/header'
import Button from '../components/button'
import TextInput from '../components/text-input'
import BackButton from '../components/back-button'
import { theme } from '../core/theme'

export default function RegisterScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Buat Akun</Header>
      <TextInput
        label="Nama"
      />
      <TextInput
        label="Email"
      />
      <TextInput
        label="Password"
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}
        style={{ marginTop: 24 }}
      >
        Daftar
      </Button>
      <View style={styles.row}>
        <Text>Sudah punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})