import {
  setLoadingConfigObject,
  shimmerPlaceholderConfig
} from '../../../PSShimmer/PSShimmer.utils'

import styles from './PSHorizontalScrollerLoadingItem.Config.style'
import { Types } from '../../../../Utils'

const loadingConfig = type => {
  switch (type) {
    case Types.HORIZONTAL_SCROLLER_TYPES.CATEGORIES:
      return [
        {
          main: setLoadingConfigObject('square', 1, null, styles.category)
        }
      ]
    case Types.HORIZONTAL_SCROLLER_TYPES.PETS:
      return [
        {
          main: setLoadingConfigObject('circle', 1, null, styles.petImage)
        },
        {
          left: setLoadingConfigObject('square', 1, null, styles.petTitle)
        },
        {
          left: setLoadingConfigObject('square', 1, null, styles.petSubtitle)
        }

      ]
  }
}

export { loadingConfig, shimmerPlaceholderConfig }
