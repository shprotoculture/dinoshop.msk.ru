export const state = () => ({
    listAllCategories: []
});

export const mutations = {
    pushCategories(state, payload) {
        state.listAllCategories = payload;
    }
};