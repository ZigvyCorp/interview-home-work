import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextField = props => {
  const {containerStyle, renderPrefix, renderSuffix, inputProps} = props;

  return (
    <View style={[containerStyle]}>
      <View style={styles.contain}>
        {renderPrefix && renderPrefix()}
        <View style={styles.padding} />
        <TextInput
          placeholderTextColor={'#fff'}
          {...inputProps}
          style={[styles.inputStyle, inputProps?.style]}
        />
        <View style={styles.padding} />
        {renderSuffix && renderSuffix()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  padding: {
    width: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'KoHo-Regular'
  },
  contain: {
    flexDirection: 'row',
  },
});

export default React.memo(TextField);
