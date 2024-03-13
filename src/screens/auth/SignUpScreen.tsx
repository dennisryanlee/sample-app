import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const RegisterScreen: React.FC<{
  navigation: NavigationProp<any>;
}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registering with:', email, password);
  };

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="I have an account" onPress={navigateLogin} />
    </View>
  );
};

export default RegisterScreen;
