'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
} = React;



class Container extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

class Issue3773 extends React.Component {
  render() {
    return (
      <Navigator
        renderScene={(route, navigator) => <route.component {...route.props} />}
        configureScene={(route) => Navigator.SceneConfigs.HorizontalSwipeJump}
        initialRouteStack={ROUTES}
      />
    );
  }
}

let ROUTES = [
  {
    component: Container,
    props: {
      text: 'Swipe right',
      style: {
        backgroundColor: '#fff5c3',
      },
    }
  },
  {
    component: Container,
    props: {
      text: 'Swipe left',
      style: {
        backgroundColor: '#9bd7d5',
      },
    }
  },
]

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#505050'
  }
});

AppRegistry.registerComponent('Issue3773', () => Issue3773);
