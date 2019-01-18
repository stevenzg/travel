import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Infinite from 'react-infinite'

import './list.css'

let skip = 0

class AttractionList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attractions: [],
      isInfiniteLoading: false
    }
  }

  // async componentDidMount() {
  //   fetch(
  //     'https://travel-server-api.davidc.ai/attractions?token=10ktfn&limit=20&skip=0'
  //   )
  //     .then(response => response.json())
  //     .then(json => this.setState({ attractions: json }))
  // }

  elementInfiniteLoad() {
    return <div className="infinite-list-loading">正在加载....</div>
  }

  handleInfiniteLoad = () => {
    this.setState({
      isInfiniteLoading: true
    })

    const { attractions } = this.state

    fetch(
      `https://travel-server-api.davidc.ai/attractions?token=10ktfn&limit=20&skip=${skip}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ attractions: attractions.concat(json) })
        this.setState({
          isInfiniteLoading: false
        })
        skip += 10
      })
  }

  render() {
    const { attractions } = this.state

    const AttractionsComp = attractions.map((attr, idx) => {
      return (
        <div className="attraction-item" key={idx}>
          <Link to={`/attraction/${attr._id}`}>{attr.name}</Link>
        </div>
      )
    })

    const containerHeight = window.innerHeight

    // return <div>{AttractionsComp}</div>

    return (
      <Infinite
        containerHeight={containerHeight}
        elementHeight={40}
        infiniteLoadBeginEdgeOffset={580}
        onInfiniteLoad={this.handleInfiniteLoad}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}
      >
        {AttractionsComp}
      </Infinite>
    )
  }
}

export default AttractionList
