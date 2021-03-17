const initialState={}

export default function(state=initialState,action){
    switch(action.type){
        case "GET_USER":
            if(action.payload){
                initialState.usr=action.payload
                return {
                    usr:initialState.usr
                };
            }
            return ""
            break;
            case "LOGOUT_USER":
                return ""
                break;
        default:
            return state
    }
}
