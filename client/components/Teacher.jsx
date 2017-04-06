import React from 'react'

import TeacherList from './TeacherList'

const Teacher = () => {
  return (
    <div>
      <h1>Meet our Teachers</h1>
      <div className="w3-row-padding w3-grayscale">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png" className="teacher"/>
          <h2>Batman</h2>
          <h3>The boss</h3>
          <p>Kai whakahaere, kai whakarite.</p>
        </div>

        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png" className="teacher"/>
          <h2>Catwoman</h2>
          <h3>Kaiako</h3>
          <p>Kai whakaako i nga tamariki tau 3-5</p>
        </div>

        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png" className="teacher"/>
          <h2>Superman</h2>
          <h3>Kaiako</h3>
          <p>Kai whakaako i nga tau 0-2</p>
        </div>

        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png" className="teacher"/>
          <h2>Joker</h2>
          <h3>Kaiawhina</h3>
          <p>Awhina I nga wa e hiahia ana</p>
        </div>
      </div>
    </div>
  )
}

export default Teacher
