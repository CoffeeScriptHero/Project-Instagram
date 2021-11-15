import types from "./types";

const getAllUser = (payload) => ({
    type: types.GET_ALL_USERS,
    payload
})

export default {
    getAllUser
}
