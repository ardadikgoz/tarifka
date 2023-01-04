import React from 'react';
import {View, FlatList, Text, Linking} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import styles from './Details.style';
import useFetch from '../../Hooks/useFetch/useFetch';
import DetailCard from '../../Components/Card/DetailCard/DetailCard';

const Details = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL_DETAIL}${idMeal}`);

  const renderDetail = ({item}) => {
    console.log({item});
    return (
      <DetailCard
        detail={item}
        onSelect={() => Linking.openURL(item.strYoutube)}
      />
    );
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
};

export default Details;
