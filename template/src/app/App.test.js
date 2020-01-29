import React from 'react'
import App from './App'
import { renderWithReduxRouterAndChakra } from '../utils/testHelpers'

test('app renders without crashing', () => {
  renderWithReduxRouterAndChakra(<App />)
})
