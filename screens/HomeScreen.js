import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      {/* resto de la pantalla */}
    </>
  );
}
