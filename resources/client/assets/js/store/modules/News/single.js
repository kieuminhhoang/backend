function initialState() {
    return {
        item: {
            id: null,
            name: null,
            imf: null,
            img: null,
        },
        usersAll: [],
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    usersAll: state => state.usersAll,
}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = _.cloneDeep(state.item)
            if (! _.isEmpty(params.user)) {
                params.user_id = params.user.id
            }

            axios.post('/api/v1/news', params)
                .then(response => {
                    commit('resetState')
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    updateData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = _.cloneDeep(state.item)
            if (! _.isEmpty(params.user)) {
                params.user_id = params.user.id
            }

            axios.put('/api/v1/news/' + params.id, params)
                .then(response => {
                    commit('setItem', response.data.data)
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    fetchData({ commit, dispatch }, id) {
        axios.get('/api/v1/news/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchUsersAll')
    },
    fetchCompaniesAll({ commit }) {
        axios.get('/api/v1/news')
            .then(response => {
                commit('setUsersAll', response.data.data)
            })
    },
    setCompany({ commit }, value) {
        commit('setUser', value)
    },
    setFirst_name({ commit }, value) {
        commit('setname', value)
    },
    setLast_name({ commit }, value) {
        commit('setimg', value)
    },
    setEmail({ commit }, value) {
        commit('setimf', value)
    },

}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setCompany(state, value) {
        state.item.name = value
    },
    setFirst_name(state, value) {
        state.item.imf = value
    },
    setLast_name(state, value) {
        state.item.img = value
    },
    setUsersAll(state, value) {
        state.usersAll = value
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
