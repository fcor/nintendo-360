import { AppRegistry } from 'react-360';
import Model from './components/Model'
import Menu from './components/Menu'
import * as Store from './store'
Store.initialize()

AppRegistry.registerComponent('model', () => Model);
AppRegistry.registerComponent('menu', () => Menu);
