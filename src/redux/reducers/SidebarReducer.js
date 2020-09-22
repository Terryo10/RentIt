const initState = {
    showsidebar:false
};

const SidebarReducer =(state= initState,action)=>{
    switch (action.type) {
        case 'OPEN_SIDE_BAR':
            return{
                ...state,
                showsidebar:!state.showsidebar
            }

        default:
            return state
    }

}

export default  SidebarReducer;