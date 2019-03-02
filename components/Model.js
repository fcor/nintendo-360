import React from 'react'
import { asset, View, Animated } from 'react-360'
import Entity from 'Entity'
import AmbientLight from 'AmbientLight'
import PointLight from 'PointLight'
import { connect } from '../store'

class Model extends React.Component {

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
    const character = this.props.character
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={1}
          style={{transform: [{translate: [0, 3, 3]}]}}
        />
        <Entity 
          source={{gltf2: asset('./models/yoshi/yoshi.glb')}} 
          style={{
            transform: [
              {scaleX: 0.3},
              {scaleY: 0.3},
              {scaleZ: 0.3},
              {rotateY: rotation}
            ]
          }}
          />
      </View>
    );
  }
};

const ConnectedModel = connect(Model);

export default ConnectedModel;