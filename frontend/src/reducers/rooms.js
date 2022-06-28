const roomsReducer = (state=[],action) => {
    switch(action.type){
        case 'INITIAL_ROOMS':
            return [...action.data]
        case 'NEW_ROOM': 
            return [...state,action.data]
        default:
            return state
    }
}


export const intitializeRooms = (rooms) => {
    return {
        type: 'INITIAL_ROOMS',
        data: rooms
    }
}

export const newRoom = (room) => {
    return{
        type: 'NEW_ROOM',
        data: room
    }
}

export default roomsReducer