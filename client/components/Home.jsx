import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>'Te Puna Reo o Raparapaririki'</h1>
      <div id='home'>Te tamaiti o Te Waiū Kia ekeina a Tikitiki-o-Rangi Kia tomohia a Rangiātea Kia mau ki te wānanga O te ao Māori O te ao whānui Koia nei te taumata whakahirahira O tōna ake ao.
      </div><br></br>
      <div class="container">
        <div id="image">
          <img src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png" width="100px" height="100px" />
          <h2><span>Whakaahua</span></h2>
        </div>
      <div id="prayers">
          <img src="https://fastpraygive.org/wp-content/uploads/2015/07/PrayIcon-1color.png" width="100px" height="100px" />
          <h2><span>Karakia</span></h2>
        </div>
        <div id="songs">
          <img src="https://cdn4.iconfinder.com/data/icons/miu/24/circle-music-sound-audio-mp3-single_note-glyph-512.png" width="100px" height="100px" />
          <h2><span>Waiata</span></h2>
        </div>
        <div id="teachers">
          <img src="http://www.iconninja.com/files/197/485/186/teacher-icon.svg" width="100px" height="100px" />
          <h2><span>Nga Kaiako</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Home
