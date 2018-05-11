import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import MobileIndex from './components/mobile_index'
import ListDetails from './components/list_details'
import 'antd/dist/antd.css'
import '../css/common.css'
import './common/common.js'
import MediaQuery from 'react-responsive'
export default class Root extends React.Component {
  render () {
    return (
      <div>
        <MediaQuery query='(max-device-width: 1920px)'>
          <Router history={hashHistory}>
            <Route path='/' component={MobileIndex} />
            <Route path='/details/:id' component={ListDetails} />
          </Router>
        </MediaQuery>
      </div>
    )
  };
}
ReactDOM.render(
  <Root />, document.getElementById('mainContainer'))
