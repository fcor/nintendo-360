import * as React from 'react';
import characters from './characters'

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  characterID: 0,
  characterDetails: characters[0]
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb()
  }
}

export function initialize() {
  State.characterID = 0
  State.characterDetails = characters[0]
  updateComponents()
}

export function setCharacter(value) {
  State.characterID = value
  State.characterDetails = characters[value]
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      character: State.character,
    };

    _listener = () => {
      this.setState({
        characterID: State.characterID,
        characterDetails: State.characterDetails,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          characterID={this.state.characterID}
          characterDetails={this.state.characterDetails}
        />
      );
    }
  };
}
