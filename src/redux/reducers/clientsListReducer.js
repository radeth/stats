const clientsListReducer = (state=null,action) =>{
    switch(action.type){
        case "CLIENTS_LIST":
        return state = action.payload
        default:
        return state
       
    }
    
}
export default clientsListReducer