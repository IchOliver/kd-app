import {ActionTypes} from '../ActionTypes'
import WService from '../../services/WebService'
const webService = new WService();
export const getEvents = () =>{

 return dispatch =>{
   
    dispatch({type:ActionTypes.GET_EVENT_START})
    webService.getEvents().then(response=>{
       console.log("event.....data",response.body.data)
     dispatch({type:ActionTypes.GET_EVENT_SUCCESS,payload:response.body.data})
    })
    .catch(error=>{

    })
    

 }

}