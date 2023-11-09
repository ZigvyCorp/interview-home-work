import { https } from "./axios"

export const chatService = {
    handleGetChats: () => {
        const url = `/chat`
        return https.get(url)

    },
    handleCreateChat: (data) => {
        const url = `/chat`
        return https.post(url, data)

    },
    handleGetMessage: (params) => {
        const url = `/chat/get-message/${params}`
        return https.get(url)

    },
    handleSendMessage: (data) => {
        const url = `/chat/send-message`
        return https.post(url, data)

    },


}