import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Auth from './Auth'
import Main from './Main'
import NavigationService from './NavigationService'

const Navigation = () => {
  const SwitchNavigator = createSwitchNavigator({
    Auth,
    Main,
  })

  const AppContainer = createAppContainer(SwitchNavigator)

  return (
    <AppContainer
      ref={(navigationRef) => {
        NavigationService.setTopLevelNavigator(navigationRef)
      }}
    />
  )
}

export default Navigation
