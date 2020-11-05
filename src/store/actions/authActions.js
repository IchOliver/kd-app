
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../utils/screen';
import {ActionTypes} from '../ActionTypes'
import Storage from '../../utils/storage'

export const signIn =(role)=>{
    return dispatch=>{
        dispatch({type:ActionTypes.USER_SIGN_START});
        dispatch({type:ActionTypes.USER_SIGN_SUCCESS,payload:role})
        Storage.setItem('role',role)
        NavigationService.navigate(Screens.Home)
    }
}