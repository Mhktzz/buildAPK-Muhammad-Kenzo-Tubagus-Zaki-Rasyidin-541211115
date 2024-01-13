import { TouchableOpacity, StyleSheet, View, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/background';
import Logo from '../components/logo';
import Header from '../components/header';
import Button from '../components/button';
import TextInput from '../components/text-input';
import BackButton from '../components/back-button';
import { theme } from '../core/theme';

export default function LoginScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Selamat datang kembali!</Header>
      <TextInput label="Email" />
      <TextInput label="Password" />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Lupa password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Belum punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Daftar di sini</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
