import { createStore } from "redux";


export const Pathchanger=(object)=>{ //action
    // console.log(object);
    return({
        type:"PATHCHANGER",
        payload:object,
    }
    )
}

const initialstate = { //initial state
    artical_id:"",
    artical_title:"",
    artical_image:"",
    artical_para:"",
}
export const Reducer=(state=initialstate, action)=>{
    if(action.type==="PATHCHANGER"){
        var{id,title,image,para}=action.payload;
    }
    switch(action.type){
        case "PATHCHANGER":
            return({ 
                artical_id:id,
                artical_title:title,
                artical_image:image,
                artical_para:para,
            })
        default:
            return state;
    }
    
}

export const Store=createStore(Reducer);