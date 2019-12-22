var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatePost = function (_React$Component) {
    _inherits(CreatePost, _React$Component);

    function CreatePost(props) {
        _classCallCheck(this, CreatePost);

        var _this = _possibleConstructorReturn(this, (CreatePost.__proto__ || Object.getPrototypeOf(CreatePost)).call(this, props));

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
            _this.state.content = quill.container.innerHTML;
            console.log(_this.state);
            if (!_this.state.title || !_this.state.content) {
                showNotification(NotificationType.WARNING, $(target), ErrorMessage.Fill_Param_Required, 3000);
            } else {
                $.ajax({
                    url: '/api/post',
                    type: 'post',
                    dataType: 'json',
                    data: _this.state,
                    success: function success(res) {
                        console.log(res);
                        if (res.error) {
                            showNotification(NotificationType.DANGER, $(target), res.message, 3000);
                        } else {
                            showNotification(NotificationType.SUCCESS, $(target), res.message, 3000);
                            setTimeout(function () {
                                window.location.href = '/';
                            }, 3000);
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
            title: '',
            owner: parseInt(navigation.user.id, 10),
            content: '',
            tags: ''
        };
        return _this;
    }

    _createClass(CreatePost, [{
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
                                        'h5',
                                        { className: 'font-big m-5 m-b-20 color-white' },
                                        'Create Post'
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
                                                    React.createElement('input', { onChange: this.onChange, value: this.state.title, name: 'title', className: 'form-control form-control-lg', type: 'text', required: ' ', placeholder: 'Title' })
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group row ' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-12 ' },
                                                    React.createElement('input', { onChange: this.onChange, value: this.state.tags, name: 'tags', className: 'form-control form-control-lg', type: 'text', required: ' ', placeholder: 'Please insert \',\' between tags' })
                                                )
                                            ),
                                            React.createElement('div', { className: 'quill-add' }),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group text-center m-5' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-xs-12 p-b-20 ' },
                                                    React.createElement(
                                                        'button',
                                                        { className: 'btn btn-block btn-lg btn-info ', type: 'submit ' },
                                                        'Create'
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

    return CreatePost;
}(React.Component);

domContainer = document.querySelector('#post_create');
ReactDOM.render(e(CreatePost), domContainer);