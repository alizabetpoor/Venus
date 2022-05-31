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
    height: 40,
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 8,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchText: {
    flexGrow: 1,
    marginRight: 4,
    height: '100%',
  },
  themeButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 16,
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
  }
});
