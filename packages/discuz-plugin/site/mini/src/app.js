import { Component } from 'react'
import './app.scss'
import monitor from '../../../lib/monitor';


class App extends Component {

  componentDidMount () {
    const target = monitor('KqnrSUjzJqQIrbSivZ');
    console.log(target);
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
