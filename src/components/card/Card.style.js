import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    display: 'flex',
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
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
    marginRight: -14,
  },
  userinfo: {
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  username: {
    fontSize: 11,
    fontWeight: '400',
  },
  country: {
    color: '#BA28DE',
    fontSize: 10,
    fontWeight: '400',
  },
  detail: {
    marginTop: 4,
    marginHorizontal: 4,
    borderTopColor: '#E6BFF3',
    paddingTop: 8,
    borderTopWidth: 1,
    paddingBottom: 15,
  },
  detailElement: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    paddingVertical: 14,
  },
  detailElementText: {
    paddingLeft: 9,
  },
  homeText: {
    width: '80%',
  },
});
