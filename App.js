import React ,{Compoent} from 'react'

import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './src/store/reducer'
import {createStore,applyMiddleware} from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import AppMain from './src/index'


const App =()=>{

  const middlewares =[
    apiMiddleware,
    ReduxThunk
  ]
  const store = createStore(reducers, {}, applyMiddleware(...middlewares))
  return(
    <Provider store={store}>
       <AppMain/>
    </Provider>
  )


}

export default App