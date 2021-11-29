import React, {useState} from 'react';
import OneCard from './OneCard'
import ThreeCards from './ThreeCards'

export default function TarotDisplay ({threeCardData, oneCardData}) {

  return (
    oneCardData ?
    <OneCard oneCardDraw={oneCardData} />
    :
    <ThreeCards threeCardDraw={threeCardData} />
  )
}