export const UPDATE_MAP_SOURCE = 'UPDATE_MAP_SOURCE'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'
export const TOGGLE_CALCULATOR = 'TOGGLE_CALCULATOR'
export const SHOW_MODAL_ABOUT = 'SHOW_MODAL_ABOUT'
export const HIDE_MODAL_ABOUT = 'HIDE_MODAL_ABOUT'
export const SELECT_CONVERSION = 'SELECT_CONVERSION'
export const UPDATE_SLIDER_VALUE = 'UPDATE_SLIDER_VALUE'
export const UPDATE_OPACITY = 'UPDATE_OPACITY'

export function updateMapSource (mapSource) {
  return { type: UPDATE_MAP_SOURCE, data: mapSource }
}

export function updateSelected (feature) {
  return { type: UPDATE_SELECTED, data: feature }
}

export function toggleCalculator (toggle) {
  return { type: TOGGLE_CALCULATOR, data: toggle }
}

export function showModalAbout () {
  return { type: SHOW_MODAL_ABOUT }
}

export function hideModalAbout () {
  return { type: HIDE_MODAL_ABOUT }
}

export function selectConversion (conversion) {
  return { type: SELECT_CONVERSION, data: conversion }
}

export function updateSliderValue (sliderValue) {
  return { type: UPDATE_SLIDER_VALUE, data: sliderValue }
}

export function updateOpacity (opacityValue) {
  return { type: UPDATE_OPACITY, data: opacityValue }
}
