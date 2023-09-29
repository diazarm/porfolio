import React from 'react'
import style from '../Landing/Landing.module.css'

const Landing = () => {
  return (
    <div className={style.container}>
    <div className={style.box1}>
    <div className={style.vid}>
        <video loop autoPlay muted>
          <source src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4" type="video/mp4" />
          </video>
        </div>
    <div className={style.box2}>

    </div>
    </div>
    </div>
  )
}

export default Landing

