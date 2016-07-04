/**
  * This returns a new stylesheet object given a base object and an extension.
  * it effectively applies both styles, taking extendStyle priority over baseStyle
  * this is analogous to subclassing in OOP.
  * Be aware that it only merges elements 1 level deep from the JSON.
  */
export function extendStyle (baseStyle, extendStyle) {
  let newStyle = baseStyle
  for (let key in extendStyle) {
    if (baseStyle[key]) {
      newStyle[key] = Object.assign({}, baseStyle[key], extendStyle[key])
    } else {
      newStyle[key] = extendStyle[key]
    }
  }

  return newStyle
}
