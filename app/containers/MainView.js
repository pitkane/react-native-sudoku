import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';

class MainView extends Component {

  constructor(props) {
    super(props)
  }

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

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
})

// function mapStateToProps(state) {
//   return { null }
// }

export default connect()(MainView);
