export const setAnchor = (state, val) => {
  state.anchor = val
}
export const setAnchors = (state, val) => {
  if (val === false) {
    state.anchors = []
  } else {
    state.anchors.push(val)
  }
}
export const setScrolling = (state, val) => {
  state.scrolling = val
}

export const setBase = (state, val) => {
  state.base = val
}
export const setRelative = (state, val) => {
  state.relative = val
}
export const setAbsolute = (state, val) => {
  state.absolute = val
}
