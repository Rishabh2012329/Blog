const initialState={}

export default function(state=initialState,action){
    switch(action.type){
        case "LOAD_BLOG":
           initialState.blog=action.payload
            return {
                blogs:initialState.blog
            };
            break;
        case "POST_BLOG":
            initialState.blog.push(action.payload);
            return {
                blogs:initialState.blog
            }
            break;
        case "UPDATE_BLOG":
            var newData = state.blog?.map(obj => {
                if(obj._id== action.payload._id)
                   return Object.assign({}, obj, action.payload)
                return obj
            });
            initialState.blog= newData
            return {
                blogs:initialState.blog
            }
            break;
        case "DELETE_BLOG":
            var newData= state.blog?.filter(obj=>obj._id!==action.payload._id)
            initialState.blog=newData;
            return {
                blogs:initialState.blog
            }
            break;

        default:
            return state
    }
}