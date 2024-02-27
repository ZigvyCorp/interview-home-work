
class jsonTemplate {
    jsonValue(type,data,message) {
        if(type === 200) {
            return { status: 200, data: data, errorMessage: "" }
        }
        if(type === 400) {
            return { status: 400, data: null, errorMessage: message }
        }
    }
}

module.exports = new jsonTemplate();
