import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    display: 'flex',
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    paddingVertical: 8,
  },
  photo: {
    borderRadius: 10,
    width: 36,
    height: 36,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: -14,
    maxWidth: '42%',
    minWidth: '40%',
  },
  userinfo: {
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '600',
  },
  username: {
    fontSize: 11,
    fontWeight: '400',
  },
  country: {
    fontSize: 10,
    fontWeight: '400',
  },
});
