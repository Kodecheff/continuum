import React from 'react'
import {css, jsx} from '@emotion/core'

const Slide = ({content}) => {
  return (
    <div css={css`
          height: 100%;
          width: 100%;
          background-image: url(${content});
          background-size: cover;
          background-repeat: no-repeat;
          background-postion: center
      `}
    />
  )
}

export default Slide
