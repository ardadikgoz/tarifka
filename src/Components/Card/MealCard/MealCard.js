import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelectMeal}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelectMeal}>
      <View style={styles.container}>
        <Image source={{uri: meal.strMealThumb}} style={styles.image} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
