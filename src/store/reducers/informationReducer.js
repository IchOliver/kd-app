import {ActionTypes} from '../ActionTypes'

const defaultValue=[]

export const informationReducer =(
    state={
        infoes:defaultValue
    },
    action
)=>{

    switch(action.type){
        case ActionTypes.GET_INFO_START:
            return {
                ...state
            }
        case ActionTypes.GET_INFO_SUCCESS:
            return{
                ...state,
                infoes:action.payload
            }
        default:
            return state
    }
}