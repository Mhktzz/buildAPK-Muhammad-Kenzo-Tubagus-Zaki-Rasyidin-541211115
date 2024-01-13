import { Image, StyleSheet } from 'react-native';

export default function ProfilePicture() {
  return (
    <Image source={require('../assets/kenzo-almet.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
