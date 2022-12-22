import React from 'react';
import {View, Image, Text} from 'react-native';

const CategoryCard = ({category}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
      <View style={styles.body_container}>
        <Text style={styles.title}> {category.strCategory} </Text>
      </View>
    </View>
  );
};

export default CategoryCard;
