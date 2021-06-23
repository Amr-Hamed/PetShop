import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { isFunction as _isFunction } from 'lodash'

import { Pet, Category } from './Components'
import { Types } from '../../../../Utils'

export default function PSHorizontalScrollerItem({
    type,
    isSelected,
    onItemPress,
    onFavIconPress,
    item,
}) {
    return (
        <>{
            type === Types.HORIZONTAL_SCROLLER_TYPES.CATEGORIES && <Category 
                item={item}
                onItemPress={onItemPress}
                isSelected={isSelected}
            />
        }
        {
            type === Types.HORIZONTAL_SCROLLER_TYPES.PETS && <Pet 
                item={item}
                onItemPress={onItemPress}
                onFavIconPress={onFavIconPress}
            />
        }
        </>
    )
}
