import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import ThemePage from '@components/theme-page';
import store from './store';
import './app.scss';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <Provider {...store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
