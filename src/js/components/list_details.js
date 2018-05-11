import React from 'react'
export default class MobileNewsDetails extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  };
  componentDidMount () {

  };
  render () {
    let id = this.props.params.id
    return (
      <div id='details'>
       这是详情页 id是{id}
      </div>
    )
  };
}
