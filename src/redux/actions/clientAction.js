export function selectClientAction(clientId){
    return{
        type:"SELECT_CLIENT",
        payload: clientId
    }
}
