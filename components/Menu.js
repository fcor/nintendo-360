import React from 'react'
import {
  Text,
  View,
  Animated,
  VrButton,
  StyleSheet
} from 'react-360'

const characters = ['Koopa', 'Mario', 'Luigi', 'Bowser', 'Yoshi', 'Donkey Kong']

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        {characters.map(character => {
          return (
            <VrButton key={`button-${character}`} >
              <Text style={styles.characterLabel}>{character}</Text>
            </VrButton>
          )})
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 900,
    height: 400,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'transparent',
    // borderColor: '#303050',
    // borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    transform: [
      {translate: [0, 0, -2]}
    ]
  },
  characterLabel: {
    color: '#000',
    fontSize: 30,
    width: 90,
  }
});