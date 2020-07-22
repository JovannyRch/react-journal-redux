import { types } from "../pages/types/types";

interface Message {
    user: string
    message: string
    timestamp: number
}

// src/store/chat/types.ts
const SEND_MESSAGE = 'SEND_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'

interface SendMessageAction {
    type: typeof SEND_MESSAGE
    payload: Message
}

interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE
    meta: {
        timestamp: number
    }
}

type ChatActionTypes = SendMessageAction | DeleteMessageAction


export const authReducer = (state = {}, action: ChatActionTypes) => {
    switch (action.type) {
        case types.login:

            break;

        default:
            break;
    }
}