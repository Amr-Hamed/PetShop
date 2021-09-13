import {
  setLoadingConfigObject,
  shimmerPlaceholderConfig
} from '../../../PSShimmer/PSShimmer.utils'

import styles from './PSVerticalScrollerLoadingItem.Config.style'

const loadingConfig = () => {
  return [
    {
      main: setLoadingConfigObject('circle', 1, null, styles.image)
    },
    {
      main: setLoadingConfigObject('line', 3, '90%', styles.text),
      style: styles.textsContainer
    }
  ]
}

export { loadingConfig, shimmerPlaceholderConfig }
