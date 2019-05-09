function accuracyAction(accuracyType){
    console.log(accuracyType)
    return{
        type:"SELECT_ACCURACY",
        payload:accuracyType
    }
}
export default accuracyAction