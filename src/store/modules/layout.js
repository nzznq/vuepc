
const layout = {
    state: {
        sidebar:false
    },
    mutations: {
        SET_SIDEBAR: (state) => {
            state.sidebar = !state.sidebar
        }
    },
    actions: {
        setSidebar({commit}){
            commit('SET_SIDEBAR')
        }
    }
}

export default layout