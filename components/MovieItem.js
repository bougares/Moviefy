import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default class MovieItem extends React.PureComponent {
  render() {
    const {
      title, price, genres, onRemoved, selected, id
    } = this.props;

    return (
      <View style={selected ? [styles.container, styles.selected] : styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.genres}>
          {genres.map(genre => (
            <Text key={genre} style={styles.genre}>
              {genre}
            </Text>
          ))}
        </View>
        <Text style={styles.price}>{`${price}$`}</Text>
        {onRemoved && (
          <TouchableOpacity style={styles.remove} onPress={() => onRemoved(id)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    flexDirection: 'row'
  },
  selected: {
    backgroundColor: '#8395a7'
  },
  title: {
    flex: 2,
    fontSize: 14
  },
  price: {
    flex: 1,
    fontSize: 16,
    padding: 5,
    textAlign: 'right'
  },
  genres: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'column'
  },
  genre: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  remove: {
    flex: 1
  },
  removeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ee5253',
    textAlign: 'right'
  }
});
