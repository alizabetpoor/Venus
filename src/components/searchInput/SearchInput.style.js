import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
    marginVertical: 24,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  searchText: {
    minWidth: 230,
    borderRightColor: '#aaa',
    borderRightWidth: 1,
    marginRight: 12,
  },
  themeButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginVertical: 24,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  }
});
