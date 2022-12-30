import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    ...tw`antialiased bg-gray-900 text-gray-50`,
  },

  a: {
    ...tw`text-blue-300 hover:text-blue-400 transition`
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
