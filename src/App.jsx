import React, { Component } from 'react'
// 引入Count的容器組件
import Count from './containers/Count'
// 引入Person的容器組件
import Person from './containers/Person'
// import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 給容器組件傳遞store */}
        {/* <Count store={store}/> */}
        <Count />
        <hr/>
        <Person />
      </div>
    );
  }
}