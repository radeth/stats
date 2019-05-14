export default function selectClientAction(clientId){
    return{
        type:"SELECT_CLIENT",
        payload: clientId
    }
}
