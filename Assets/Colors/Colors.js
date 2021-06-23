const Colors = {
  mainYellow: '#fe9915',
  lightGray: '#F6F6F6',
  darkGray: '#CBCBCB',
  darkestGray: '#596275',
  transparent: '#00000000',
  mainBlack: 'black',
  lightBlack: 'rgba(0, 0, 0, 0.4)',
  shadowColor: 'rgba(0, 0, 0, 0.16)',
  white: '#FFFFFF',
  favRed: '#f21170',
  colorWithOpacity: (red, green, blue, opacity) => `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

const TextColors = {
  buttonTextColorOne: 'white',
  buttonTextColorTwo: '#FE9915'
}

export {
  Colors,
  TextColors
}
