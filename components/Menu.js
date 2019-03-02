import React from 'react'
import {
  Text,
  View,
  Animated,
  VrButton,
  StyleSheet,
  Image,
  asset
} from 'react-360'

const characters = ['Koopa', 'Mario', 'Luigi', 'Bowser', 'Yoshi', 'Donkey Kong']

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        <Image style={styles.image} source={asset('mario.png')} />
        <Image style={styles.image} source={asset('mario.png')} />
        <Image style={styles.image} source={asset('mario.png')} />
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    transform: [
      {translate: [0, 0, -2]}
    ]
  },
  characterLabel: {
    color: '#000',
    fontSize: 30,
    width: 90,
  },
  image: {
    width: 130,
    height: 130,
  }
});

// {characters.map(character => {
//   return (
//     <VrButton key={`button-${character}`} >
//       {/* <Text style={styles.characterLabel}>{character}</Text> */}
//       <Image style={styles.image} source={asset('mario.png')} />
//     </VrButton>
//   )})
// }