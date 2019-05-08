const selectClientReducer = (state=null,action) =>{
    switch(action.type){
        case "SELECT_CLIENT":
        return state = action.payload
        default:
        return state
       
    }
    
}
export default selectClientReducer