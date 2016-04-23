import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
})

class MainView extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'testing'})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test :)</Text>
      </View>
    )
  }
}

export default connect()(MainView)
