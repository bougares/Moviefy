import React from 'react';
import { Picker } from 'react-native';

export default class GenrePicker extends React.PureComponent {
  render() {
    const { selected, genres, onChange } = this.props;

    const items = ['All', ...genres];

    return (
      <Picker selectedValue={selected || items[0]} onValueChange={onChange}>
        {items.map(genre => (
          <Picker.Item key={genre} label={genre} value={genre} />
        ))}
      </Picker>
    );
  }
}
