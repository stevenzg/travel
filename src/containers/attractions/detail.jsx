import React, { Component } from 'react'
import './detail.css'

class AttractionDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attraction: {}
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    fetch(`https://travel-server-api.davidc.ai/attractions/${id}?token=10ktfn`)
      .then(response => response.json())
      .then(json => {
        document.title = json.name
        this.setState({ attraction: json })
      })
  }

  render() {
    const { attraction } = this.state

    return (
      <div className="attraction-detail">
        <div className="name">{attraction.name}</div>
        <div className="info">
          Category: {attraction.category}, {attraction.subCategory}
        </div>
        <div className="info">Hours: {attraction.hours}</div>
        <div className="info">Address: {attraction.address}</div>
        <div className="info">Phone: {attraction.phone}</div>
        <div className="info">Price: {attraction.price}</div>
        <div className="info">Website: {attraction.website}</div>
        <div
          className="detail"
          dangerouslySetInnerHTML={{ __html: attraction.detail }}
        />
      </div>
    )
  }
}

export default AttractionDetail
