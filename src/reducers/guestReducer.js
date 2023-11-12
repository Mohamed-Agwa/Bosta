import { GET_DETAILS } from "../actions/types";
const initState = {
    details: {},
    detailsfetched: false
}

export function guestReducer(state = initState, action){
    const { type, payload } = action;

    switch (type) {
        case GET_DETAILS:           
            console.log("Shipment Details FETCHED",payload)
            console.log("Status",payload.CurrentStatus.state)
            localStorage.setItem("status", payload.CurrentStatus.state)
            localStorage.setItem("time", payload.CurrentStatus.timestamp)
            localStorage.setItem("arrivaltime", payload.PromisedDate)
            localStorage.setItem("trackingo", payload.TrackingNumber)
            return { ...state, details: payload, detailsfetched:true}; 
        default:
            return state;
    }
}