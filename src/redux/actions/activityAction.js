function activityAction(activityType){
    return{
        type:"SELECT_ACTIVITY",
        payload: activityType
    }
}
export default activityAction