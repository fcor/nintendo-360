import React from 'react'
import { View, VrButton, StyleSheet, Image, asset } from 'react-360'
import {connect, setCharacter} from '../store'
import characters from '../characters'

class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        {characters.map((character, index) => {
          return (
            <CharacterButton key={character.name} character={character} index={index} />
          )})
        }
      </View>
    )
  }
}

class CharacterButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
    }
    this.handleEnter = this.handleEnter.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleEnter(){
    this.setState({
      hover: true
    })
  }

  handleExit(){
    this.setState({
      hover: false
    })
  }

  handleClick(character){
    setCharacter(character)
  }

  render() {
    const { character, index } = this.props
    const hover = this.state.hover
    return (
      <VrButton onEnter={this.handleEnter}
                onExit={this.handleExit}
                onClick={() => this.handleClick(index)}
      >
        <Image style={[styles.image, hover ? styles.imageHover : null]} 
               source={asset(character.thumbnail)} 
        />
      </VrButton>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 400,
    height: 620,
    // paddingTop: 20,
    // backgroundColor: 'transparent',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // borderColor: '#303050',
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 25,
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 20,
    marginRight: 20
  },
  imageHover: {
    transform: [
      {scale: [1.1, 1.1, 1.1]}
    ]
  }
});

const ConnectedMenu = connect(Menu);

export default ConnectedMenu;