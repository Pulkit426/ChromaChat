const messagesReducer = (state=[],action) => {
    switch(action.type){
        case 'INITIAL_MESSAGES':
            return [...action.data]
        case 'NEW_MESSAGE': 
            return [...state,action.data]
        default:
            return state
    }
}


export const intitializeMessages = (messages) => {
    return {
        type: 'INITIAL_MESSAGES',
        data: messages
    }
}

export const newMessage = (message) => {
    return {
        type: 'NEW_MESSAGE',
        data: message
    }
}

export default messagesReducer