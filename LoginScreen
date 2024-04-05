import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require('./backgroundImage.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Hoş Geldiniz!</Text>
        <Text style={styles.subHeaderText}>Lezzetin Dünyasına Katılın</Text>
        <Text style={styles.descriptionText}>
          Yemek tutkunlarının buluşma noktasına hoş geldiniz! Binlerce lezzetli tarifin yer aldığı uygulamamızla yeni tatlar keşfedin ve mutfağınıza renk katın. Hemen kaydolun ve lezzet dolu bir yolculuğa başlayın!
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#008080',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
