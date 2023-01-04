import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';

import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import MealCard from '../../Components/Card/MealCard/MealCard';
import styles from './Meals.style';

const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;

  const {loading, error, data} = useFetch(
    `${Config.API_URL_MEALS}${strCategory}`,
  );

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailsPage', {idMeal});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelectMeal={() => handleMealSelect(item.idMeal)} />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={data.meals}
        renderItem={renderMeal}
      />
    </View>
  );
};

export default Meals;
