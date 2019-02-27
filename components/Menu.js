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
    width: 300,
    height: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    transform: [
      {translate: [0, 0, -2]}
    ]
  },
  characterLabel: {
    color: '#fff',
    fontSize: 30,
    width: 90,
  }
});