import React from 'react';
import { ScrollView, 
        StyleSheet,
        View,
        Text,
} from 'react-native';

export default class ConnectScreen extends React.Component {
  static navigationOptions = {
    title: 'Connect via NFC',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nfc}>
          <Text>NFC Placeholder</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  nfc: {
    alignItems: 'center',
  }
});
