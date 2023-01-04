import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 400,
  },
  body_container: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  title: {
    color: '#bf0000',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  area: {
    color: '#bf0000',
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  detail: {
    color: 'black',
    fontSize: 18,
  },
  button: {
    elevation: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
