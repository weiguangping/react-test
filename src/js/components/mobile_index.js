import React from 'react'
import {Tabs, Col} from 'antd'
import {Link} from 'react-router'
import '../../css/mobile.css'
const TabPane = Tabs.TabPane
export default class MobileIndex extends React.Component {
  constructor () {
    super()
    this.state = {
      list: '',
      color: 'white'
    }
  }
  componentWillMount () {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch('http://technicaltesting.herokuapp.com/api/v1/city_guides', myFetchOptions).then(response => response.json()).then(json => { this.setState({list: json.response}); console.log(json) })
  }

  callback (key) {
    if (key === '1') {
      this.setState({color: 'white'})
    } else if (key === '2') {
      this.setState({'color': 'blue'})
    } else {
      this.setState({color: 'green'})
    }
  }
  render () {
    const {list} = this.state
    const {color} = this.state
    const lists = list.length
    ? list.map((listItem, index) => (
      <li key={index}>
        <Link to={`details/${listItem.id}`}>
          {!listItem.is_promote
          ? <div className='is_promote'>
            <Col span={7}>
              <img className='img' src={listItem.image} alt={listItem.alt} />
            </Col>
            <Col span={17} className='text'>
              <div className='title'>{listItem.title}</div>
              <div className='txt'>{listItem.description}</div>
            </Col>
          </div>
       : <img className='bigimg' src={listItem.image} alt={listItem.alt} />}
        </Link>
      </li>
			)) : '没有加载到任何数据'
    return (
      <div>
        <Tabs defaultActiveKey='1' onChange={this.callback.bind(this)}>
          <TabPane tab='CITY GUIDE' key='1' style={{background: color}}>
            <ul className='cityList'>
              {lists}
            </ul>
          </TabPane>
          <TabPane tab='SHOP' key='2' style={{background: color}}>SHOPList</TabPane>
          <TabPane tab='EAT' key='3' style={{background: color}}>EAT</TabPane>
        </Tabs>
      </div>
    )
  };
}
