const selectActivityReducer = (state=null,action) =>{
    switch(action.type){
        case "SELECT_ACTIVITY":
        return state = action.payload
        default:
        return state
       
    }
    
}
export default selectActivityReducer