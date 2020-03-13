import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

function Home({navigation}) {
  const [info, setInfo] = useState([
    {title: 'Eat fruit', target: 1},
    {title: 'Clean rooms', target: 3},
  ]);
  const addHandler = () => {
    navigation.navigate('AddNewTask');
  };
  const detailsHandler = () => {
    navigation.navigate('TaskDetails');
  };

  return (
    <View>
      <FlatList
        data={info}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDetails', item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title={'Add Task'} onPress={addHandler} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
