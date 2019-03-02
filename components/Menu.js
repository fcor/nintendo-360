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

const characters = ['koopa', 'mario', 'luigi', 'bowser', 'yoshi', 'donkeykong']

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        {characters.map(character => {
          return (
            <CharacterButton character={character} />
          )})
        }
      </View>
    )
  }
}

class CharacterButton extends React.Component {
  state = {
    hover: false,
  }

  render() {
    const { character } = this.props
    return (
      <VrButton key={`button-${character}`}  
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
      >
        <Image style={[styles.image, this.state.hover ? styles.imageHover : null]} source={asset(`${character}.png`)} />
      </VrButton>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 900,
    height: 620,
    paddingTop: 20,
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // borderColor: '#303050',
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  characterLabel: {
    color: '#000',
    fontSize: 30,
    width: 90,
  },
  image: {
    width: 130,
    height: 130,
    // marginRight: 10,
  },
  imageHover: {
    transform: [
      {scale: [1.1, 1.1, 1.1]}
    ]
  }
});

