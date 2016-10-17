export const UPDATE_MAP_SOURCE = 'UPDATE_MAP_SOURCE'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'
export const SHOW_MODAL_ABOUT = 'SHOW_MODAL_ABOUT'
export const HIDE_MODAL_ABOUT = 'HIDE_MODAL_ABOUT'
export const SELECT_CONVERSION = 'SELECT_CONVERSION'
export const UPDATE_SLIDER_VALUE = 'UPDATE_SLIDER_VALUE'
export const UPDATE_OPACITY = 'UPDATE_OPACITY'
export const HIDE_MODAL_CALC = 'HIDE_MODAL_CALC'
export const SHOW_MODAL_CALC = 'SHOW_MODAL_CALC'
export const UPDATE_UCC = 'UPDATE_UCC'
export const UPDATE_NEWCALCID = 'UPDATE_NEWCALCID'
export const TOGGLE_MAP_TYPE = 'TOGGLE_MAP_TYPE'

export function updateMapSource (mapSource) {
  return { type: UPDATE_MAP_SOURCE, data: mapSource }
}

export function updateSelected (feature) {
  return { type: UPDATE_SELECTED, data: feature }
}

export function showModalAbout () {
  return { type: SHOW_MODAL_ABOUT }
}

export function showModalCalc () {
  return { type: SHOW_MODAL_CALC }
}

export function hideModalAbout () {
  return { type: HIDE_MODAL_ABOUT }
}

export function hideModalCalc () {
  return { type: HIDE_MODAL_CALC }
}

export function selectConversion (conversion) {
  return { type: SELECT_CONVERSION, data: conversion }
}

export function updateSliderValue (sliderValue) {
  return { type: UPDATE_SLIDER_VALUE, data: sliderValue }
}

export function updateUCC (cost) {
  return { type: UPDATE_UCC, data: cost }
}

export function newCalcId (id) {
  return { type: UPDATE_NEWCALCID, data: id }
}

export function toggleMapType (type) {
  return { type: TOGGLE_MAP_TYPE, data: type }
}
