import {ActionTypes} from '../ActionTypes'

const deafultRole=null

export const authReducer =(
    state={
        role:deafultRole
    },
    action
)=>{

    switch(action.type){
        case ActionTypes.USER_SIGN_START:
            return {
                ...state
            }
        case ActionTypes.USER_SIGN_SUCCESS:
            return{
                ...state,
                role:action.payload
            }
        default:
            return state
    }
}