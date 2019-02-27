import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

// const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class Model extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      rotation: 0,
    }
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this)
  }

  componentDidMount(){
    this.rotate()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.props.current) {
      this.rotation.setValue(0);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    }
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
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        <Entity 
          source={{gltf2: asset('./models/koopa/koopa.glb')}} 
          style={{
            transform: [
              {scaleX: 0.01},
              {scaleY: 0.01},
              {scaleZ: 0.01},
              {rotateY: rotation}
            ]
          }}
          />
        {/* <AnimatedEntity
          style={{transform: [{rotateY: this.rotation}]}}
          source={{gltf2: asset('homer.gltf') }}
        /> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

