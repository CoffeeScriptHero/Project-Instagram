import types from "./types";

const setUser = (payload) => ({
    type: types.SET_USER,
    payload
})

export default {
    setUser
}
