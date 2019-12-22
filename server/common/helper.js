/**
 * Provide a random number in range min and max
 * @param {number} numMax Max number for random number
 * @param {*} numMin Min number for random number
 */
function generateRandomNumber (numMax, numMin) {
    min = Math.ceil(numMax);
    max = Math.floor(numMin);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * Provide a random id
 */
function generateRandomID () {
    return parseInt(Date.now().toString() + generateRandomNumber(1, 10000).toString(), 10)
}

async function  checkExistInModel(Model, objQuery) {
    let check = await Model.findOne(objQuery);
    if (check) {
        return true;
    }
    return false;
}

module.exports = {
    generateRandomNumber: generateRandomNumber,
    generateRandomID: generateRandomID,
    checkExistInModel: checkExistInModel
};