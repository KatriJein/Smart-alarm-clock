
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { puzzleCardStyles } from './puzzle-card-styles'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PuzzleCard({pictureName, id, setPaired, chosen, setChosen}) {

    const [isOpened, setIsOpened] = useState(false);
    const [canPress, setCanPress] = useState(false);
    const [isAlwaysOpened, setIsAlwaysOpened] = useState(false);
    const onCardPress = (isOpened) => {
        if (canPress) {
        setIsOpened(isOpened);
        if (chosen === null) {
            setChosen({id: id, pictureName: pictureName, openedSetter: setIsOpened, alwaysOpenedSetter: setIsAlwaysOpened});
        }
        else {
            if (chosen.id !== id && chosen.pictureName === pictureName) {
                setPaired(prev => prev + 1);
                chosen.alwaysOpenedSetter(true);
                setIsAlwaysOpened(true);
                setChosen(null);
            }
            else {
                let openedSetter = chosen.openedSetter;
                setChosen(null);
                setTimeout(() => {
                    setIsOpened(false);
                    openedSetter(false);
                }, 500)
            }
        }
    }
    }

    useEffect(() => {
        setIsOpened(true);
        setTimeout(() => {
            setIsOpened(false);
            setCanPress(true);
        }, 1000)
    }, [])

  return (
    <TouchableOpacity onPress={() => onCardPress(true)} disabled={isAlwaysOpened ? true : false}>
        <View style={[isAlwaysOpened ? puzzleCardStyles.paired : !isOpened ? puzzleCardStyles.initial : puzzleCardStyles.opened, commonStyle.common]}>
            {isOpened
            ? !isAlwaysOpened ? <Ionicons name={`${pictureName}-outline`} size={70} color={'rgba(210, 120, 158, 1)'}/>
            : <Ionicons name={pictureName} size={70} color={'rgba(255, 255, 255, 1)'} />
            : <></>}
        </View>
    </TouchableOpacity>
  )
}

const commonStyle = StyleSheet.create({
    common: {
        width: 90,
        height: 90,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})