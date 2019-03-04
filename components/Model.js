import React from 'react'
import { asset, View, Animated } from 'react-360'
import Entity from 'Entity'
import AmbientLight from 'AmbientLight'
import PointLight from 'PointLight'
import { connect } from '../store'
import characters from '../characters'

const getModelData = (character) =>{
  characters.filter( el => {
    return character === el.name
  })
}

class Model extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      rotation: 0,
      bounceValue: new Animated.Value(1)
    }
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this)
  }

  componentDidMount(){
    this.rotate()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.characterID !== nextProps.characterID) {
      const bounceValue = this.state.bounceValue
      // animate the character
      const modelConfig = {
        value: bounceValue,
        initial: 0.3,
        toValue: 1,
        speed: 16,
        bounciness: 23
      };

      this.bounce(modelConfig)
    }
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null
    }
  }

    // bounce animation
  bounce({value, initial, toValue, speed, bounciness }) {
    value.setValue(initial);

    Animated.spring(
      value,
      {
        toValue,
        speed,
        bounciness
      }
    ).start();
  }

  rotate() {
    const now = Date.now()
    const delta = now - this.lastUpdate
    this.time++
    this.lastUpdate = now;
    this.setState({
      rotation: this.state.rotation + delta / 10
    })
    this.frameHandle = requestAnimationFrame(this.rotate)
  }

  render() {
    const { rotation } = this.state
    const scale = this.state.bounceValue
    const characterDetails = this.props.characterDetails
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={1}
          style={{transform: [{translate: [0, 3, 3]}]}}
        />
        <Animated.View style={{transform: [{scale}]}}>
          <Entity 
            source={{gltf2: asset(characterDetails.modelPath)}} 
            style={{
              transform: [{rotateY: rotation}, ...characterDetails.scaleArray ]
            }}
            />
        </Animated.View>
      </View>
    );
  }
};

const ConnectedModel = connect(Model);

export default ConnectedModel;