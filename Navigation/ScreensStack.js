import { createStackNavigator } from 'react-navigation-stack'

import { SCREENS as SCREENS_NAMES } from '../Utils'

import { 
  Splash,
  Auth,
  Home,
  ItemDetails,
  Cart,
  Checkout,
  Address,
  BankCard,
  CheckoutResult
} from '../Screens'

const SCREENS = {
  [SCREENS_NAMES.Splash]: {
    screen: Splash
  },
  [SCREENS_NAMES.Auth]: {
    screen: Auth
  },
  [SCREENS_NAMES.Home]: {
    screen: Home
  },
  [SCREENS_NAMES.ItemDetails]: {
    screen: ItemDetails
  },
  [SCREENS_NAMES.Cart]: {
    screen: Cart
  },
  [SCREENS_NAMES.Checkout]: {
    screen: Checkout
  },
  [SCREENS_NAMES.Address]: {
    screen: Address
  },
  [SCREENS_NAMES.BankCard]: {
    screen: BankCard
  },
  [SCREENS_NAMES.CheckoutResult]: {
    screen: CheckoutResult
  }
}

const stackNavigatorConfig = {
  headerMode: 'none'
}

export const APP_NAVIGATION_STACK = createStackNavigator(SCREENS, {
  ...stackNavigatorConfig
})
