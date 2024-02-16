import ActionTypes from "./ActionTypes";

const InitialState = {

    Post: [
        
    ],

    User: {

        Name: 'some',
        userID: 0,
        Email: 'some',
        token: ''

    }

}

var i = 0;

const Reducer = (state=InitialState, action) =>{

    switch(action.type){

        case ActionTypes.ADD_TODO:{

            
        return [ 
            ...state,

            {
                id: ++i,
                Title: action.payload.Title,
                isDone: false
            }
        ]

        }


        case ActionTypes.REMOVE_TODO:{

        const NewState = state.filter((item) => item.id !== action.payload.id)
        
        return NewState

        }


        case ActionTypes.SET_ISDONE:{
        
        
           return state.find(action.payload.id).isDone = true


        }

        default: return state;
         

    }


}


export default Reducer;