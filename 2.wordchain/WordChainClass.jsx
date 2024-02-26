const React = require('react')
// 구조분해할당, const Component = React.Component
const { Component } = React

class WordChainClass extends Component {
  state = {
    value: 'qwe',
  }
  render() {
    return <> {this.state.value}</>
  }
}

module.exports = WordChainClass
