var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterForm = function (_React$Component) {
    _inherits(RegisterForm, _React$Component);

    function RegisterForm(props) {
        _classCallCheck(this, RegisterForm);

        var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

        _this.test = function (state) {
            console.log(state);
        };

        _this.onChange = function (event) {
            var target = event.target;
            var name = target.name;
            var value;
            var type = target.type;
            if (type === 'checkbox') {
                value = $(target).prop('checked');
            } else {
                value = target.value;
            }

            _this.setState(_defineProperty({}, name, value));
        };

        _this.onSubmit = function (event) {
            event.preventDefault();
            var target = event.target;
            if (!_this.state.password || !_this.state.username || !_this.state.confirmpassword) {
                showNotification(NotificationType.WARNING, $(target), ErrorMessage.Fill_Param_Required, 3000);
            } else if (_this.state.password !== _this.state.confirmpassword) {
                showNotification(NotificationType.WARNING, $(target), ErrorMessage.Password_Not_Equal, 3000);
            } else if (!_this.state.agreeTerm) {
                showNotification(NotificationType.WARNING, $(target), ErrorMessage.Agree_Term, 3000);
            } else {
                $.ajax({
                    url: '/api/user',
                    type: 'post',
                    dataType: 'json',
                    data: _this.state,
                    success: function success(res) {
                        console.log(res);
                        if (res.error) {
                            showNotification(NotificationType.DANGER, $(target), res.message, 3000);
                        } else {
                            showNotification(NotificationType.SUCCESS, $(target), res.message, 3000);
                        }
                    },
                    error: function error(res) {
                        console.log(res);
                        showNotification(NotificationType.DANGER, $(target), ErrorMessage.AN_ERROR_OCCURRED, 3000);
                    }
                });
            }
        };

        _this.state = {
            name: '',
            username: '',
            password: '',
            confirmpassword: '',
            agreeTerm: ''
        };
        return _this;
    }

    _createClass(RegisterForm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'row m-5' },
                React.createElement(
                    'div',
                    { className: 'col-4 offset-4' },
                    React.createElement(
                        'div',
                        { className: 'auth-wrapper bg-dark' },
                        React.createElement(
                            'div',
                            { className: 'auth-box' },
                            React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'div',
                                    { className: 'logo align-center' },
                                    React.createElement(
                                        'span',
                                        { className: 'db' },
                                        React.createElement('img', { className: 'm-5', src: LoadingLogo, alt: 'logo', width: '200px', height: '200px' })
                                    ),
                                    React.createElement(
                                        'h5',
                                        { className: 'font-big m-5 m-b-20 color-white' },
                                        'Sign Up'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement(
                                            'form',
                                            { className: 'form-horizontal m-t-20', onSubmit: this.onSubmit },
                                            React.createElement(
                                                'div',
                                                { className: 'form-group row ' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-12 ' },
                                                    React.createElement('input', { onChange: this.onChange, value: this.state.name, name: 'name', className: 'form-control form-control-lg', type: 'text', required: ' ', placeholder: 'Name' })
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group row ' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-12 ' },
                                                    React.createElement('input', { onChange: this.onChange, value: this.state.username, name: 'username', className: 'form-control form-control-lg', type: 'text', required: ' ', placeholder: 'Username' })
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-12 ' },
                                                    React.createElement('input', { onChange: this.onChange, value: this.state.password, name: 'password', className: 'form-control form-control-lg', type: 'password', required: ' ', placeholder: 'Password' })
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-12 ' },
                                                    React.createElement('input', { onChange: this.onChange, value: this.state.confirmpassword, name: 'confirmpassword', className: 'form-control form-control-lg', type: 'password', required: ' ', placeholder: 'Confirm Password' })
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-12 ' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'custom-control custom-checkbox' },
                                                        React.createElement('input', { onChange: this.onChange, value: this.state.agreeTerm, name: 'agreeTerm', type: 'checkbox', className: 'custom-control-input', id: 'customCheck1' }),
                                                        React.createElement(
                                                            'label',
                                                            { className: 'custom-control-label', htmlFor: 'customCheck1' },
                                                            'I agree to all ',
                                                            React.createElement(
                                                                'a',
                                                                { href: '#' },
                                                                'Terms'
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group text-center ' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-xs-12 p-b-20 ' },
                                                    React.createElement(
                                                        'button',
                                                        { onClick: this.test(this.state), className: 'btn btn-block btn-lg btn-info ', type: 'submit ' },
                                                        'SIGN UP'
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group m-b-0 m-t-10 ' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-sm-12 text-center ' },
                                                    'Already have an account? ',
                                                    React.createElement(
                                                        'a',
                                                        { href: '/signin', className: 'text-info m-l-5 ' },
                                                        React.createElement(
                                                            'b',
                                                            null,
                                                            'Sign In'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RegisterForm;
}(React.Component);

$('#header_navigation').hide();

domContainer = document.querySelector('#form_register');
ReactDOM.render(e(RegisterForm), domContainer);