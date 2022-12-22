import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: categoryData} = await axios.get(Config.API_URL);
    setData(categoryData);
  };

  function renderCategory({item}) {
    return <Text>{item.strCategory}</Text>;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;
