import * as React from 'react';
// import {connect} from 'react-redux';
// import {setSearchResults} from './../store/reducer/searchInputReducer';
export const SearchUsers = ({searchInput, users, setSearchResult}: any) => {
  if (searchInput !== '') {
    const filteredUsers = users.filter(
      (user: any) =>
        user.name.first.includes(searchInput) ||
        user.name.last.includes(searchInput),
    );
    console.log(filteredUsers, 'filteredusers');

    setSearchResult(filteredUsers);
  } else {
    setSearchResult([]);
  }
};

// const mapStateToProps = (state: any) => {
//   return {
//     searchInput: state.searchInput.searchInput,
//     users: state.user.users,
//   };
// };
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setSearchResult: (searchResults: any) =>
//       dispatch(setSearchResults(searchResults)),
//   };
// };
export default SearchUsers;
