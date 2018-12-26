
import {
	removeToken
} from '@/utils/common'

const user = {
    state: {
    },
    mutations: {
    },
    actions: {
        //登出
		FedLogOut({ commit }) {
			return new Promise(resolve => {
				sessionStorage.clear();
				removeToken();
				resolve();
			})
		}
    }
}

export default user