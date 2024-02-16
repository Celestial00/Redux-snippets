export const ADD_TODO = (Data) =>{
    return{ 
        type:'ADD_TODO',
        payload:{
            Title: Data.Title,
        }
    }

}


export const REMOVE_TODO = (id) =>{
    return{ 
        type:'REMOVE_TODO',
        payload:{
            id: id,
        }
    }

}

export const SET_ISDONE = (id) =>{
    return{ 
        type:'SET',
        payload:{
            id: id,
        }
    }

}

