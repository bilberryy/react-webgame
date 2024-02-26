const React = require('react')
const ReactDOM = require('react-dom/client')
// const WordChain = require('./WordChain')
import WordChain from './WordChain'
const WordChainClass = require('./WordChainClass')

ReactDOM.createRoot(document.getElementById('root')).render(<WordChainClass />)
