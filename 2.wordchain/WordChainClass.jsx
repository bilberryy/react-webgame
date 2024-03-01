const React = require('react')
// 구조분해할당, const Component = React.Component
const { Component } = React

class WordChainClass extends Component {
  state = {
    word: '딸기',
    value: '',
    result: '',
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '정답',
        word: this.state.value,
        value: '',
      })
      this.input.focus()
    } else {
      this.setState({
        result: '땡',
        value: '',
      })
      this.input.focus()
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  // ref를 위한 변수 선언
  input

  onRefInput = (c) => {
    this.input = c
  }

  render() {
    return (
      <>
        <h1>제시어:{this.state.word}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>입력</button>
          <p>{this.state.result}</p>
        </form>
      </>
    )
  }
}

module.exports = WordChainClass
