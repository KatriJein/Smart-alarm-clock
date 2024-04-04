import { View, Text } from 'react-native'
import React from 'react'
import Gradient from '../../Gradient'
import { commonStyles } from '../../../common-styles'

export default function CardsPuzzle() {
  return (
    <Gradient>
        <View style={commonStyles.container}>
        <Text>CardsPuzzle</Text>
        </View>
    </Gradient>
  )
}