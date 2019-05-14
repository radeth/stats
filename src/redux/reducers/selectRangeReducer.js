const selectRangeReducer = (state=null,action) =>{
    switch(action.type){
        case "SELECT_RANGE":
        return state = action.payload
        default:
        return state
       
    }
    
}
export default selectRangeReducer