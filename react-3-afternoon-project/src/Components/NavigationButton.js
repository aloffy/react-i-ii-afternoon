import React from 'react'

function NavigationButton(props){
  return (
    <div className='ButtonBar'>
      <button className='NavigationButton' onClick={props.handleClickPrevious}>{'< Previous'}</button>
      <button className='NavigationButton' onClick={props.handleClickNext}>{'Next >'}</button>
    </div>
  )
}

export default NavigationButton