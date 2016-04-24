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
  noteButton: {
    flex: 1,
    alignItems: 'center',
  },
  HintsButtons: {
    flex: 1,
    alignItems: 'center',
  },
})

class TopMenu extends Component {

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
        <View style={styles.noteButton}>
          <Text>
            Note
          </Text>
        </View>
        <View style={styles.HintsButtons}>
          <Text>
            Hints
          </Text>
        </View>
      </View>
    )
  }
}

export default TopMenu
