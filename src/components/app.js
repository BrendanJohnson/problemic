import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
  componentWillMount() {
      this.props.fetchPosts()
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return <div>{post}</div>
    })

  }

  render () {
    return <div> Post list: {this.renderPosts()}</div>;
  }
}

export default App
