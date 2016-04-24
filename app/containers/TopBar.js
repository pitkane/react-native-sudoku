import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
  },
  time: {
    flex: 1,
    alignItems: 'center',
  },
  loveButton: {
    flex: 1,
    alignItems: 'center',
  },
})

class TopBar extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuButton}>
          <Text>
            Menu
          </Text>
        </View>
        <View style={styles.time}>
          <Text>
            Time
          </Text>
        </View>
        <View style={styles.loveButton}>
          <Text>
            Love
          </Text>
        </View>
      </View>
    )
  }
}

export default TopBar
