import React from 'react';
import {
  View, FlatList, StyleSheet, TouchableOpacity, Text
} from 'react-native';

import MovieItem from './MovieItem';

const extract = ({ id }) => id;

export default class MovieList extends React.PureComponent {
  renderMovie = ({ item }) => {
    const { selected = [], onRemoved, onSelected } = this.props;

    if (onSelected) {
      const isSelected = selected.find(el => item.id === el.id) !== undefined;

      return (
        <TouchableOpacity onPress={() => onSelected(item)}>
          <MovieItem {...item} onRemoved={onRemoved} selected={isSelected} />
        </TouchableOpacity>
      );
    }

    return <MovieItem {...item} onRemoved={onRemoved} />;
  };

  render() {
    const {
      movies, onRemoved, selected, onSelected, placeholder
    } = this.props;

    const showsPlaceholder = movies.length === 0;

    return (
      <View style={styles.container}>
        {showsPlaceholder && (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>{placeholder || 'No items'}</Text>
          </View>
        )}
        {!showsPlaceholder && (
          <FlatList
            data={movies}
            renderItem={this.renderMovie}
            keyExtractor={extract}
            extraData={selected}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholderText: {
    fontSize: 25,
    textAlign: 'center'
  }
});
