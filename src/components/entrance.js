import PropTypes from "prop-types"
import React from "react"
import styles from "./../styles/entrance.module.scss"
const Entrance = ({ onClick }) => (
  <div onClick={onClick} className={styles.Entrance}>
    <div>
      <img src="https://picsum.photos/500/500?image=503" alt="" />
      <img src="https://picsum.photos/500/500?image=503" alt="" />
      <p>FOLLOW THE WHITE RABBIT</p>
    </div>

    <svg>
      <filter id="transmissionerror">
        <feColorMatrix
          type="saturate"
          values="0"
          in="SourceGraphic"
          result="colormatrix1"
        />
        <feColorMatrix
          type="matrix"
          values="0.95 0 0 0 0  0 0 0 0 0  0 0 0.4 0 0  0 0 0 1 0"
          in="colormatrix1"
          result="colormatrix2"
        />
        <feTurbulence
          type="turbulence"
          baseFrequency="0.002 0.008"
          numOctaves="2"
          seed="5"
          stitchTiles="noStitch"
          result="turbulence"
        >
          <animate
            attributeName="baseFrequency"
            from="0.002 0.008"
            to="0.002 0.01"
            dur="3500ms"
            repeatCount="indefinite"
          />
          <animate
            attributeName="numOctaves"
            from="1"
            to="10"
            dur="750ms"
            repeatCount="indefinite"
          />
          <animate
            attributeName="seed"
            from="1"
            to="100"
            dur="10s"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feColorMatrix
          type="saturate"
          values="30"
          in="turbulence"
          result="colormatrix3"
        />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -15"
          in="colormatrix3"
          result="colormatrix4"
        />
        <feDisplacementMap
          in="colormatrix2"
          in2="colomatrix4"
          scale="15"
          xChannelSelector="R"
          yChannelSelector="A"
          result="displacementMap"
        />
      </filter>
    </svg>
  </div>
)
Entrance.propTypes = {
  onClick: PropTypes.func,
}

export default Entrance
