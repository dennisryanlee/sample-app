import {NavigationProp} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const CRUDScreen: React.FC<{
  navigation: NavigationProp<any>;
}> = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    // Implement fetching data logic here
    console.log('Fetching data...');
    // Example: fetch('https://api.example.com/data').then(response => response.json()).then(data => setData(data));
  };
  const navigateMain = () => {
    navigation.navigate('BlogPost');
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    // Implement delete logic here
    console.log('Deleting item with id:', id);
  };

  return (
    <View style={{flex: 1, paddingBottom: 50}}>
      <View style={{flex: 1}}>
        <Text>Data:</Text>
        {data.map(item => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        ))}
      </View>
      <Button title="Create a Blog" onPress={navigateMain} />
    </View>
  );
};

export default CRUDScreen;
