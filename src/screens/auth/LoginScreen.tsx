import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const LoginScreen: React.FC<{
  navigation: NavigationProp<any>;
}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    navigation.navigate('BlogPost');
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={navigateSignUp} />
    </View>
  );
};

export default LoginScreen;
