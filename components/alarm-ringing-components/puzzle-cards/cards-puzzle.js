import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Gradient from '../../Gradient'
import { commonStyles } from '../../../common-styles'
import { cardsPuzzlePageStyles } from './cards-puzzle-styles'
import PuzzleCard from './card/puzzle-card'
import { CARDS_TEMPLATES } from '../../../const'
import { shuffle } from '../../common-functions/CommonFunctions'
import { useNavigation } from '@react-navigation/native';

export default function CardsPuzzle({route}) {
  const { amount } = route.params;
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);
  const [paired, setPaired] = useState(0);
  const [chosen, setChosen] = useState(null);

  useEffect(() => {
    const pictures = [...CARDS_TEMPLATES];
    const slicedPictures = pictures.slice(0, Math.floor(amount / 2));
    const resultPictures = [...slicedPictures, ...slicedPictures];
    shuffle(resultPictures);
    let cardsArray = [];
    for (let i = 0; i < resultPictures.length; i++) {
      cardsArray.push({id: i, pictureName: resultPictures[i]});
    }
    setCards(cardsArray);
  }, [])

  useEffect(() => {
    let requiredPairs = Math.floor(amount / 2);
    if (paired === requiredPairs) {
      setTimeout(() => {
        navigation.navigate("RingPage", {canStop: true});
      }, 500)
    }
  }, [paired])

  return (
    <Gradient>
        <View style={commonStyles.container}>
        <View style={cardsPuzzlePageStyles.cardsContainer}>
          <Text style={cardsPuzzlePageStyles.taskDescription}>Открой одинаковые карточки</Text>
          <View style={cardsPuzzlePageStyles.cards}>
            {cards.length > 0 && cards.map(card => <PuzzleCard key={card.id} id={card.id} pictureName={card.pictureName}
            chosen={chosen} setChosen={setChosen} setPaired={setPaired}/>)}
          </View>
        </View>
        </View>
    </Gradient>
  )
}