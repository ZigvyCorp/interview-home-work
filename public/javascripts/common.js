const BrandLogo = 'images/logo/zigvy-logo.svg';
const LoadingLogo = 'images/loading/zigvy-loading.svg';

const UsernameRegex = /^[a-zA-Z0-9]+$/;

const ErrorMessage = {
    Fill_Param_Required: 'Please Fill All Param Required',
    Password_Not_Equal: 'Input password not equal to your confirm password. Please check again.',
    Agree_Term: 'Please check agree term checkbox',
    AN_ERROR_OCCURRED: 'Error. An error has occurred. Please contact admin for help, thanks.',
    USER_NAME_NOT_VALID: 'Error. Your username input not valid. Please input again.'
}

const NotificationType = {
    PRIMARY: 'alert-primary',
    SECONDARY: 'alert-secondary',
    SUCCESS: 'alert-success',
    DANGER: 'alert-danger',
    WARNING: 'alert-warning',
    INFO: 'alert-info',
    LIGHT: 'alert-light',
    DARK: 'alert-dark'
}

/**
 * Create Notification in Parent element
 * @param {string} type 
 * @param {jQuery Object} parent 
 * @param {string} message 
 * @param {number} time - millisecond
 */
function showNotification (type, parent, message, time) {
    console.log(parent);
    var notiHtml = '<div class="alert ' + type + '" role="alert">' + message + '</div>';
    parent.append(notiHtml);
    if (time) {
        setTimeout(function () {
            parent.find('.alert').remove();
        }, time)
    }
}

/**
 * Return format mm:hh from timeStamp
 * @param {number} timestamp 
 */
function getHourMinuteFromTimestamp (timestamp) {
    var date = new Date(timestamp)
    var hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
    var minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
    var str = hour + ':' + minute
    return str
}

/**
 * Return format dd/mm/YYYY from timeStamp
 * @param {number} timestamp 
 */
function getDateMonthYearFromTimeStamp (timestamp) {
    var date = new Date(timestamp)
    var str = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear()
    return str
}