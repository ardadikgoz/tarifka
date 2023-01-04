import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  body_container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'left',
    paddingTop: 28,
    color: 'black',
  },
});
