import {ActionTypes} from '../ActionTypes'
import WService from '../../services/WebService'
const webService = new WService();
export const getStands = () =>{

 return dispatch =>{
     
    dispatch({type:ActionTypes.GET_STAND_START});
    webService.getStands().then(response=>{

      dispatch({type:ActionTypes.GET_STAND_SUCCESS,payload:response.body.data})
    })
    .catch(error=>{

    })
    

 }

}



export const searchStand = (text) =>{
   
     return dispatch=>{
       dispatch({type:ActionTypes.SEARCH_STAND,payload:text})
     }
}