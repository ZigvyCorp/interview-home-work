const BrandLogo = 'images/logo/zigvy-logo.svg';
const LoadingLogo = 'images/loading/zigvy-loading.svg';

const ErrorMessage = {
    Fill_Param_Required: 'Please Fill All Param Required',
    Password_Not_Equal: 'Input password not equal to your confirm password. Please check again.',
    Agree_Term: 'Please check agree term checkbox',
    AN_ERROR_OCCURRED: 'Error. An error has occurred. Please contact admin for help, thanks.'
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