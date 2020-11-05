import {ActionTypes} from '../ActionTypes'

const defaultValue=[]

export const eventReducer =(
    state={
        events:defaultValue
    },
    action
)=>{

    switch(action.type){
        case ActionTypes.GET_EVENT_START:
            return {
                ...state
            }
        case ActionTypes.GET_EVENT_SUCCESS:
            
            return{
                ...state,
                events:action.payload
            }
        default:
            return state
    }
}