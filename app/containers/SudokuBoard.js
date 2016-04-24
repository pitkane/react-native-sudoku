import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'


const styles = StyleSheet.create({
  container: {
  //  flex: 1,
  },
})

class SudokuBoard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SudokuBoard: ({Dimensions.get('window').width}, {Dimensions.get('window').height})</Text>
      </View>
    )
  }
}

export default SudokuBoard
