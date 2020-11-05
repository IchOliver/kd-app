import {ActionTypes} from '../ActionTypes'
import WService from '../../services/WebService'
const webService = new WService();
export const getInformations = () =>{

 return dispatch =>{
    
    dispatch({type:ActionTypes.GET_INFO_START});
    webService.getInformations().then(response=>{
       dispatch({type:ActionTypes.GET_INFO_SUCCESS,payload:response.body.data})
    })
    .catch(error=>{

    })
    
 }

}