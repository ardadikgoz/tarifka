import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({detail, onSelect}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: detail.strMealThumb}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{detail.strMeal}</Text>
        <Text style={styles.area}>{detail.strArea}</Text>
      </View>
      <Text style={styles.detail}>{detail.strInstructions}</Text>
      <TouchableOpacity onPress={onSelect} style={styles.button}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
