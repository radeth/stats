export default function selectRangeAction(rangePayload){
    return{
        type:"SELECT_RANGE",
        payload: {
            year: rangePayload[0],
            month: rangePayload[1],
            day: rangePayload[2]
            
        }
    }
}
