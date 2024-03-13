import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const BlogPostScreen: React.FC<{
  navigation: NavigationProp<any>;
}> = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    // Implement post creation logic here
    console.log('Creating post with:', title, content);
  };
  const navigateMain = () => {
    navigation.navigate('CRUD');
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="Content"
        multiline
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Post" onPress={handlePost} />
      <Button title="Main" onPress={navigateMain} />
    </View>
  );
};

export default BlogPostScreen;
