import {LOGGED_IN} from "../action/globalState.jsx";


const initialValues = {
    state : {
        loggedIn : false
    }
}


export const globalReducer = (state = initialValues , action) => {
    switch (action.type){
        default :
            return  state;
    }
}

