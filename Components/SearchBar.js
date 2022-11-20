import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  return (
    <View>
      <Searchbar style={{ margin: 15 }} placeholder="Medikation suchen..." />
    </View>
  );
};

export default SearchBar;
