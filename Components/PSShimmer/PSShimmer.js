import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

import {
  isArray as _isArray,
  isObject as _isObject,
  isString as _isString
} from 'lodash'

import { shimmerPlaceholderConfig as _shimmerPlaceholderConfig } from './PSShimmer.utils'

import styles from './PSShimmer.style'

const renderShapes = (shape, shimmerConfig) => {
  if (_isArray(shape)) {
    const direction = _isString(shape[0]) ? shape[0] : 'column'

    const shapes = shape.map(loadingShape => {
      return renderShapeSection(loadingShape, shimmerConfig)
    })
    return <View style={styles.shapesContainer(direction)}>{shapes}</View>
  } else if (_isObject(shape)) {
    return renderShapeSection(shape, shimmerConfig)
  } else {
    return null
  }
}

const renderShapeSection = (shape, shimmerConfig) => {
  switch (shape.type) {
    case 'circle':
      return renderShape(
        <ShimmerPlaceHolder
          style={[
            {
              height: shape.dimension,
              width: shape.dimension,
              borderRadius: shape.dimension / 2
            },
            shape.style
          ]}
          {...shimmerConfig}
        />,
        shape.count
      )
    case 'square':
      return renderShape(
        <ShimmerPlaceHolder style={shape.style} {...shimmerConfig} />,
        shape.count
      )

    case 'line':
      return renderShape(
        <ShimmerPlaceHolder
          style={[shape.style, { width: shape.dimension }]}
          {...shimmerConfig}
        />,
        shape.count
      )
  }
}

const renderShape = (tag, count) => {
  const shapes = []
  for (let i = 0; i < count; i++) {
    shapes.push(tag)
  }
  return shapes
}

const Shimmer = props => {
  const config = props.config || []

  const { shimmerPlaceholderConfig } = props

  const _themeConfig = {
    shimmerColors: [
        '#eeeeee',
        '#DFDFDF',
        '#eeeeee'
    ],
    LinearGradient: LinearGradient,
    ...shimmerPlaceholderConfig
  }

  return config.map((shape, index) => {
    return (
      <View style={{ ...styles.shimmerContainer, ...shape.containerStyle }}>
        <View
          style={{ ...styles.shimmerContainer, ...shape.style }}
          key={`Config-Shape-${index}`}
        >
          <View>{shape.left && renderShapes(shape.left, _themeConfig)}</View>
          <View style={styles.mainContainer}>
            {shape.main && renderShapes(shape.main, _themeConfig)}
          </View>
          <View>{shape.right && renderShapes(shape.right, _themeConfig)}</View>
        </View>
      </View>
    )
  })
}

Shimmer.defaultProps = {
  shimmerPlaceholderConfig: _shimmerPlaceholderConfig
}

Shimmer.propTypes = {
  config: PropTypes.array,
  shimmerPlaceholderConfig: PropTypes.object
}

export default Shimmer
