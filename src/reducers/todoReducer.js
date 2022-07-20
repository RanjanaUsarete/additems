const initialData={
    list : []
}

const todoReducers=(state=initialData,action)=>{
    switch(action.type)
    {
        case"Add_Todo":
        const{id,data}=action.payload;
        return{
            ...state,
            list: [
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }
        case"Delete_Todo":
       const newlist= state.list.filter((elem)=>elem.id!=action.id)
        return{
            ...state,
            list:newlist
        }
        case "Remove_Todo":return{
            ...state,
            list:[]
        }

             default:return state;
    }
}
export default todoReducers;