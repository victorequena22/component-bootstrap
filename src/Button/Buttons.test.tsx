import React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { ButtonConfig, ButtonColor, ButtonChance } from './index'

describe('Prueba de renderizado Botones', () => {
  it('ButtonConfig', () => {
    render(
      <ButtonConfig
        action={() => {
          console.log('prueba')
        }}
        icon=''
      />,
    )
  })
  it('ButtonColor', () => {
    render(
      <ButtonColor
        setData={(c) => {
          console.log(c)
        }}
        color='#555555'
      >
        color
      </ButtonColor>,
    )
  })
  it('ButtonChance', () => {
    render(
      <ButtonChance
        states={['success', 'danger']}
        message={['success', 'danger']}
        change={(c) => {
          console.log(c)
        }}
        value
      />,
    )
  })
})
