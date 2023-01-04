import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 4,
    margin: 10,
    justifyContent: 'flex-end',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
    position: 'relative',
  },
  body_container: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    alignItems: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});
