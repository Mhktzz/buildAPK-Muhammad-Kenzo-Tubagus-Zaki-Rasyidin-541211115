import Header from '../components/header';
import Paragraph2 from '../components/paragraph2';
import Button from '../components/button';
import ProfilePicture from '../components/profile-picture';
import { theme } from '../core/theme';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Linking,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';
import React, { useState } from 'react';

export default function Dashboard({ navigation }) {
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const [dislike1, setDislike1] = useState(0);
  const [dislike2, setDislike2] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfilePicture />
        <Header>Muhammad Kenzo</Header>
        <Paragraph2>
          Muhammad Kenzo Tubagus Zaki Rasyidin, seorang pelajar dari SMK Telkom
          Purwokerto, ia memiliki keterampilan dalam pemrograman Mobile
          Developer, Web Develover, dan UI/UX Designer.
        </Paragraph2>

        <Button
          mode="contained"
          onPress={() => Linking.openURL('mailto:tubaguszaki838@gmail.com')}>
          Contact Me
        </Button>
        <View style={{ marginTop: 40 }}>
          <Header>My Recent Project</Header>
        </View>

        <Image
          source={require('../assets/culinara.png')}
          style={styles.project}
        />
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'column',
              marginTop: 6,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: theme.colors.primary,
              }}>
              Culinara
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primary,
              }}>
              Mobile Design
            </Text>
          </View>
          <View style={{ width: '100%', alignItems: 'flex-end', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setLike1(like1 + 1)}>
                <Image
                  style={{ width: 20, height: 20, marginTop: 10, marginRight: 10}}
                  source={require('../assets/thumbs-up.png')}
                />
              </TouchableOpacity>
              <Text style={{marginTop: 10}}>{like1}</Text>
              <TouchableOpacity onPress={() => setDislike1(dislike1 - 1)}>
                <Image
                  style={{ width: 20, height: 20, marginTop: 10 , marginLeft: 10}}
                  source={require('../assets/thumbs-down.png')}
                />
              </TouchableOpacity>
              <Text style={{marginTop: 10, marginLeft: 10}}>{dislike1}</Text>
              <TouchableOpacity onPress={() =>
                  Linking.openURL(
                    'https://dribbble.com/shots/21213741-Culinara-Food-and-Beverage-app?utm_source=Clipboard_Shot&utm_campaign=Muhammmad_kenzo&utm_content=Culinara%20-%20Food%20and%20Beverage%20app&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Muhammmad_kenzo&utm_content=Culinara%20-%20Food%20and%20Beverage%20app&utm_medium=Social_Share'
                  )
                }>
                <Image
                  style={{ width: 40, height: 40, marginLeft: 40 }}
                  source={require('../assets/arrow-right.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Image
          source={require('../assets/yu-haynes.png')}
          style={[styles.project, {marginTop: 50}]}
        />
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'column',
              marginTop: 6,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: theme.colors.primary,
              }}>
              Yu-Haynes
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primary,
              }}>
              Web Design
            </Text>
          </View>
          <View style={{ width: '100%', alignItems: 'flex-end', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setLike2(like2 + 1)}>
                <Image
                  style={{ width: 20, height: 20, marginTop: 10, marginRight: 10}}
                  source={require('../assets/thumbs-up.png')}
                />
              </TouchableOpacity>
              <Text style={{marginTop: 10}}>{like2}</Text>
              <TouchableOpacity onPress={() => setDislike2(dislike2 - 1)}>
                <Image
                  style={{ width: 20, height: 20, marginTop: 10 , marginLeft: 10}}
                  source={require('../assets/thumbs-down.png')}
                />
              </TouchableOpacity>
              <Text style={{marginTop: 10, marginLeft: 10}}>{dislike2}</Text>
              <TouchableOpacity onPress={() =>
                  Linking.openURL(
                    'https://dribbble.com/shots/21213707-Yu-Haynes-E-Learning?utm_source=Clipboard_Shot&utm_campaign=Muhammmad_kenzo&utm_content=Yu-Haynes%20%20-%20%20E-Learning&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Muhammmad_kenzo&utm_content=Yu-Haynes%20%20-%20%20E-Learning&utm_medium=Social_Share'
                  )
                }>
                <Image
                  style={{ width: 40, height: 40, marginLeft: 40 }}
                  source={require('../assets/arrow-right.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          mode="outlined"
          onPress={() => navigation.replace('LoginScreen')}
          style={{marginTop: 100}}>
          Log Out
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    paddingTop: 100,
  },
  project: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 5,
  },
});
