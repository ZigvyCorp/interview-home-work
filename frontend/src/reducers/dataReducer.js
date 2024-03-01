import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, TOGGLE_ALERT_MODAL, TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL, PAGE_CHANGE_PAGINATION, PAGE_CHANGE_NUM, GET_POSTS_SUCCESS, GET_POSTS_ERROR, SET_TITLE, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from "../actionTypes/actionTypes";

const initialData = {
    user: null,
    pending: true,
    posts: [],
    // comments: [{ postId: '1', list: [],_start:0,_limit:5 }],
    comments: [],
    pagination: {
        limit: 5,
        noPage: 0,
        currentPage: 1,
        page: 0,
        rowsPerPage: 1,
        title: '',
    },
    signupModal: false,
    loginModal: {
        state: false,
        logout: false
    },
    alertModal: {
        state: false,
        message: '',
        color: ''
    },
}

const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        // pagination
        case PAGE_CHANGE_PAGINATION:
            state.pagination.currentPage = action.payload;
            break;

        // Get posts
        case GET_POSTS_SUCCESS:
            state.pending = false;
            console.log(action.payload)
            state.pagination.noPage = Math.ceil(parseInt(action.payload.count) / state.pagination.limit);
            state.posts = action.payload.data
            break
        case GET_POSTS_ERROR:
            state.posts = []
            console.log(action.payload)
            break

        // Get comments
        case GET_COMMENTS_SUCCESS:
            if (state.comments.length !== 0) {
                const isPostIdExist = state.comments.find(comment => comment?.postId === action.payload.postId)
                if (isPostIdExist) {
                    isPostIdExist.list = action.payload.comments.data
                    isPostIdExist.count = action.payload.comments.count
                } else {
                    state.comments.push({ postId: action.payload.postId, list: action.payload.comments.data, count: action.payload.comments.count })
                }
            } else {
                state.comments.push({ postId: action.payload.postId, list: action.payload.comments.data, count: action.payload.comments.count })
            }
            break
        case GET_COMMENTS_ERROR:
            state.comments = []
            console.log(action.payload)
            break


        // Set title
        case SET_TITLE:
            state.pagination.title = action.payload.toLowerCase()
            break
        // Login
        case LOGIN_SUCCESS:
            state.user = action.payload.data;
            localStorage.setItem('user', JSON.stringify(action.payload.data.account))
            localStorage.setItem('x-access-token', action.payload.data.accessToken)
            state.signupModal = false
            state.loginModal.state = false
            state.alertModal.state = true
            state.alertModal.message = 'Log in successfully'
            state.alertModal.color = 'green'
            break
        case LOGIN_ERROR:
            state.user = null;
            state.alertModal.state = true
            state.alertModal.message = action.payload
            state.alertModal.color = 'red'
            break
        case LOGOUT_REQUEST:
            state.user = null
            localStorage.clear()
            state.alertModal.state = true
            state.alertModal.message = 'Log out successfully'
            state.alertModal.color = 'green'
            break

        // Signup
        case SIGNUP_SUCCESS:
            state.signupModal = false
            state.loginModal.state = true
            state.loginModal.logout = false
            state.alertModal.state = true
            state.alertModal.message = 'Sign up successfully, you can log in now.'
            state.alertModal.color = 'green'
            break
        case SIGNUP_ERROR:
            state.user = null;
            state.alertModal.state = true
            state.alertModal.message = action.payload
            state.alertModal.color = 'red'
            break

        // Modal
        case TOGGLE_LOGIN_MODAL:
            state.loginModal.state = action.payload.toggle
            if (action.payload.flag === 'login') {
                state.loginModal.logout = false
            } else {
                state.loginModal.logout = action.payload.toggle
            }
            break
        case TOGGLE_SIGNUP_MODAL:
            state.signupModal = !state.signupModal
            break
        case TOGGLE_ALERT_MODAL:
            state.alertModal.state = !state.alertModal.state
            state.alertModal.message = action?.payload?.message || ''
            state.alertModal.color = action?.payload?.color || ''
            break
        default:
            break
    }
    return { ...state }
}


export default dataReducer