import {ActionTypes} from '../ActionTypes'

const defaultValue=[]

export const standReducer =(
    state={
        stands:defaultValue
    },
    action
)=>{

    switch(action.type){
        case ActionTypes.GET_STAND_START:
            return {
                ...state
            }
        case ActionTypes.GET_STAND_SUCCESS:
            return{
                ...state,
                stands:action.payload
            }
        case ActionTypes.SEARCH_STAND:
           let stand = action.payload;
           let newStands=state.stands.filter(item=>item.name.includes(stand)) 
           return{
               ...state,
               stands:newStands
           }
        default:
            return state
    }
}