import React from 'react'
import '../App.css'
import data from '../data'
import NavigationButton from './NavigationButton'

class Card extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      index: 0
    }
  }

  handleClickNext = () => {
    this.setState({index: this.state.index + 1})
    if(this.state.index === data.length - 1){
      this.setState({index: 0})
    }
  }
  handleClickPrevious = () => {
    this.setState({index: this.state.index - 1})
    if(this.state.index === 0){
      this.setState({index: data.length - 1})
    }
  }

  render(){
    return (
      <>
        <div className='CardContainer'>
          <b className='CardId'>{data[this.state.index].id}/25</b>
          <div className='CardText'>
            <div className='PersonName'>{data[this.state.index].name.first} {data[this.state.index].name.last}</div>
              <br/>
            <div><b>From: </b>{data[this.state.index].city}, {data[this.state.index].country}</div>
            <p><b>Job Title: </b>{data[this.state.index].title}</p>
            <p><b>Employer: </b>{data[this.state.index].employer}</p>
              <br/>
            <ol><b>Favorite Movies: </b>
              {data[this.state.index].favoriteMovies.map((el, i) => <li key={i}>{el}</li>)}
            </ol>
          </div>
        </div>
        <NavigationButton handleClickNext={this.handleClickNext} handleClickPrevious={this.handleClickPrevious}/>
      </>
    )
  }
}

export default Card