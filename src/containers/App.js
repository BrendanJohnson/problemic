import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import app from '../components/app'
import * as Actions from '../actions'

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(app)
