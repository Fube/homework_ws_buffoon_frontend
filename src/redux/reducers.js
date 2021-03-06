export const loggedReducer = (state=false, action) => {

    switch(action.type){

        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default: return state;
    }
}

export const tokenReducer = (state = null, action) => {


    switch(action.type){

        case 'SET_TOKEN':
            return action.payload.token;
        case 'DELETE_TOKEN':
            return null;
        default: return state;
    }
}

export const userReducer = (state = null, action) => {

    const toReturn = {};
    switch(action.type){

        case 'SET_USERNAME':
            toReturn.username = action.payload.username;
            return toReturn;
        case 'DELETE_USER':
            return null;
        default: return state;
    }
}