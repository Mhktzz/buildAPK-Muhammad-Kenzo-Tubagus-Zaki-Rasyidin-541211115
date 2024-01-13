import Background from '../components/background';
import BackButton from '../components/back-button';
import Logo from '../components/logo';
import Header from '../components/header';
import TextInput from '../components/text-input';
import Button from '../components/button';

export default function ResetPasswordScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="Alamat Email"
        returnKeyType="done"
        autoCapitalize="none"
        description="Kamu akan mendapatkan email untuk reset password akun kamu."
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
        style={{ marginTop: 16 }}>
        Kirim
      </Button>
    </Background>
  );
}
