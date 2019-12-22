var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterForm = function (_React$Component) {
    _inherits(RegisterForm, _React$Component);

    function RegisterForm() {
        _classCallCheck(this, RegisterForm);

        return _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).apply(this, arguments));
    }

    _createClass(RegisterForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "auth-wrapper d-flex no-block justify-content-center align-items-center", style: "background:url(../../assets/images/big/auth-bg.jpg) no-repeat center center;" },
                React.createElement(
                    "div",
                    { "class": "auth-box" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { "class": "logo" },
                            React.createElement(
                                "span",
                                { "class": "db" },
                                React.createElement("img", { src: BrandLogo, alt: "logo" })
                            ),
                            React.createElement(
                                "h5",
                                { "class": "font-medium m-b-20" },
                                "Sign Up to Admin"
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(
                                "div",
                                { "class": "col-12" },
                                React.createElement(
                                    "form",
                                    { "class": "form-horizontal m-t-20", action: "index.html" },
                                    React.createElement(
                                        "div",
                                        { "class": "form-group row " },
                                        React.createElement(
                                            "div",
                                            { "class": "col-12 " },
                                            React.createElement("input", { "class": "form-control form-control-lg", type: "text", required: " ", placeholder: "Name" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "form-group row" },
                                        React.createElement(
                                            "div",
                                            { "class": "col-12 " },
                                            React.createElement("input", { "class": "form-control form-control-lg", type: "text", required: " ", placeholder: "Email" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "form-group row" },
                                        React.createElement(
                                            "div",
                                            { "class": "col-12 " },
                                            React.createElement("input", { "class": "form-control form-control-lg", type: "password", required: " ", placeholder: "Password" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "form-group row" },
                                        React.createElement(
                                            "div",
                                            { "class": "col-12 " },
                                            React.createElement("input", { "class": "form-control form-control-lg", type: "password", required: " ", placeholder: "Confirm Password" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "form-group row" },
                                        React.createElement(
                                            "div",
                                            { "class": "col-md-12 " },
                                            React.createElement(
                                                "div",
                                                { "class": "custom-control custom-checkbox" },
                                                React.createElement("input", { type: "checkbox", "class": "custom-control-input", id: "customCheck1" }),
                                                React.createElement(
                                                    "label",
                                                    { "class": "custom-control-label", "for": "customCheck1" },
                                                    "I agree to all ",
                                                    React.createElement(
                                                        "a",
                                                        { href: "javascript:void(0)" },
                                                        "Terms"
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "form-group text-center " },
                                        React.createElement(
                                            "div",
                                            { "class": "col-xs-12 p-b-20 " },
                                            React.createElement(
                                                "button",
                                                { "class": "btn btn-block btn-lg btn-info ", type: "submit " },
                                                "SIGN UP"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "form-group m-b-0 m-t-10 " },
                                        React.createElement(
                                            "div",
                                            { "class": "col-sm-12 text-center " },
                                            "Already have an account? ",
                                            React.createElement(
                                                "a",
                                                { href: "authentication-login1.html ", "class": "text-info m-l-5 " },
                                                React.createElement(
                                                    "b",
                                                    null,
                                                    "Sign In"
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