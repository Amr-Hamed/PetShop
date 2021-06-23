const setLoadingConfigObject = (type, count, dimension, style) => {
    return { type, count, dimension, style }
  }
  
  const shimmerPlaceholderConfig = {
    autoRun: true,
    duration: 600,
    delay: 300
  }
  
  export { setLoadingConfigObject, shimmerPlaceholderConfig }
  