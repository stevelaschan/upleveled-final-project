import { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LoginContext } from '../../context/LoginContext';

export default function ProfileScreen({ route }) {
  const { restrictedProfile } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 32 }}>
          Profile Screen
        </Text>
        <Text style={styles.text}>
          First name: {restrictedProfile.firstName}
        </Text>
        <Text style={styles.text}>Last name: {restrictedProfile.lastName}</Text>
        <Text style={styles.text}>Age: {restrictedProfile.age}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  text: {
    fontSize: 18,
  },
});
