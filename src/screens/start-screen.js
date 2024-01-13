import React from 'react'
import Background from '../components/background'
import Logo from '../components/logo'
import Header from '../components/header'
import Button from '../components/button'
import Paragraph from '../components/paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome!</Header>
      <Paragraph>
        Selamat datang! Silahkan login atau daftar untuk melanjutkan!
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Daftar
      </Button>
    </Background>
  )
}