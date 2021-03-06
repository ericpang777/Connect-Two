import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const names = [
  {id: 1, title: 'Apple'},
  {id: 2, title: 'Banana'},
  {id: 3, title: 'Coconut'},
  {id: 4, title: 'Apple'},
  {id: 5, title: 'Banana'},
  {id: 6, title: 'Coconut'},
  {id: 7, title: 'Apple'},
  {id: 8, title: 'Banana'},
  {id: 9, title: 'Coconut'},
  {id: 10, title: 'Apple'},
  {id: 11, title: 'Banana'},
  {id: 12, title: 'Coconut'},
];

const names2 = [
  {id: 1, title: 'Banana'},
  {id: 2, title: 'Coconut'},
  {id: 3, title: 'Apple'},
  {id: 4, title: 'Apple'},
  {id: 5, title: 'Banana'},
  {id: 6, title: 'Coconut'},
  {id: 7, title: 'Apple'},
  {id: 8, title: 'Banana'},
  {id: 9, title: 'Coconut'},
  {id: 10, title: 'Apple'},
  {id: 11, title: 'Banana'},
  {id: 12, title: 'Coconut'},
];

export default class ContactsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: names},
            {title: 'B', data: names2},
            {title: 'C', data: names2},
            {title: 'D', data: names2},
          ]}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.title}</Text>
            </View>  
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>  
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
