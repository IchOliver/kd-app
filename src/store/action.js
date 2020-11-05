import { event } from 'react-native-reanimated';
import * as authActions from './actions/authActions'
import * as eventActions from './actions/eventActions'
import * as standActions from './actions/standActions'
import * as InformationActions from './actions/informationActions'

export const ActionCreators =Object.assign({},authActions,eventActions,standActions,InformationActions);
