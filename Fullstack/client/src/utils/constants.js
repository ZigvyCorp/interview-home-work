import path from "../routes/path";
import { MdHome } from "utils/icons"

export const navigation = [
    { title: "Home", path: `/${path.HOME}` },
    // { title: "Contact", path: `/${path.CONTACT}` },
]

export const tabTitle = [
    { id: 1, title: "Best seller" },
    { id: 2, title: "New" },
]

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const role = [
    { id: 1, value: "admin", title: "ADMIN" },
    { id: 2, value: "user", title: "USER" },

]
export const statusUser = [
    { id: 1, value: false, title: "ACTIVE" },
    { id: 2, value: true, title: "BLOCKED" },

]
export const statusOrder = [
    { id: 1, value: "processing", title: "processing" },
    { id: 2, value: "delivered", title: "delivered" },
    { id: 3, value: "canceled", title: "canceled" },

]

export const colors = ["Black", "Red", "Blue", "Green"];

export const paymentMethod = [
    { id: 1, method: "Cash on delivery" }
]

export const filterStarFeedback = [
    { value: "", title: "All" },
    { value: 1, title: "1 Star" },
    { value: 2, title: "2 Star" },
    { value: 3, title: "3 Star" },
    { value: 4, title: "4 Star" },
    { value: 5, title: "5 Star" },
]

export const filterNews = [{ value: "", title: "All" },
{ value: "admin", title: "Admin" },
{ value: "my-news", title: "My news" },
]
