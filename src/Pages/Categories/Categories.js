import React from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';

import CategoryCard from '../../Components/Card/CategoryCard/CategoryCard';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import useFetch from '../../Hooks/useFetch/useFetch';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL_CATEGORIES);

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  function renderCategory({item}) {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  }

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{backgroundColor: 'orange'}}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;
