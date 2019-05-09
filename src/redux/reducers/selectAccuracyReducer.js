const selectAccuracyReducer = (state=null,action) =>{
    switch(action.type){
        case "SELECT_ACCURACY":
        return state = action.payload
        default:
        return state
       
    }
    
}
export default selectAccuracyReducer