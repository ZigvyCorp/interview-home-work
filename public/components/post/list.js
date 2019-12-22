var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPost = function (_React$Component) {
    _inherits(ListPost, _React$Component);

    function ListPost(props) {
        _classCallCheck(this, ListPost);

        var _this = _possibleConstructorReturn(this, (ListPost.__proto__ || Object.getPrototypeOf(ListPost)).call(this, props));

        _this.test = function () {
            $.ajax({
                url: '/api/post',
                type: 'get',
                success: function success(res) {
                    $('.list-group').find('.list-group-item').remove();
                    if (res.posts.length) {
                        for (var i = 0; i < res.posts.length; i++) {
                            var post = res.posts[i];
                            var html = '<a id="' + post.id + '" href="/post/' + post.id + '" class="list-group-item list-group-item-action flex-column align-items-start">' + '<div class="d-flex w-100 justify-content-between">' + '<h5 class="mb-1">' + post.title + (post.user ? ' - Author: ' + post.user.name : '') + '</h5>' + '<small>' + getHourMinuteFromTimestamp(post.createdAt) + ' ' + getDateMonthYearFromTimeStamp(post.createdAt) + '</small>' + '</div>' + '<p className="mb-1">' + post.content + '</p>' + '</a>';
                            $('.list-group').append(html);
                        }
                    } else {
                        $('.list-group').append('<div><h4>We dont have any post</h4></div>');
                    }
                },
                error: function error(res) {
                    console.log(res);
                    showNotification(NotificationType.DANGER, $('.list-post'), ErrorMessage.AN_ERROR_OCCURRED, 3000);
                }
            });
        };

        _this.listPost = [];
        return _this;
    }

    _createClass(ListPost, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container list-post' },
                React.createElement(
                    'div',
                    { className: 'card-header' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-9' },
                            React.createElement(
                                'h1',
                                { className: '' },
                                'List post'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-3 align-right' },
                            navigation.authencation ? React.createElement(
                                'a',
                                { className: 'btn btn-primary', href: '/create-post' },
                                'Create'
                            ) : ''
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'list-group' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'list-group-item list-group-item-action flex-column align-items-start' },
                        React.createElement(
                            'div',
                            { className: 'd-flex w-100 justify-content-between' },
                            React.createElement(
                                'h5',
                                { className: 'mb-1' },
                                'List group item heading'
                            ),
                            React.createElement(
                                'small',
                                null,
                                '3 days ago'
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'mb-1' },
                            'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
                        ),
                        React.createElement(
                            'small',
                            null,
                            'Donec id elit non mi porta.'
                        )
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'list-group-item list-group-item-action flex-column align-items-start' },
                        React.createElement(
                            'div',
                            { className: 'd-flex w-100 justify-content-between' },
                            React.createElement(
                                'h5',
                                { className: 'mb-1' },
                                'List group item heading'
                            ),
                            React.createElement(
                                'small',
                                { className: 'text-muted' },
                                '3 days ago'
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'mb-1' },
                            'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
                        ),
                        React.createElement(
                            'small',
                            { className: 'text-muted' },
                            'Donec id elit non mi porta.'
                        )
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'list-group-item list-group-item-action flex-column align-items-start' },
                        React.createElement(
                            'div',
                            { className: 'd-flex w-100 justify-content-between' },
                            React.createElement(
                                'h5',
                                { className: 'mb-1' },
                                'List group item heading'
                            ),
                            React.createElement(
                                'small',
                                { className: 'text-muted' },
                                '3 days ago'
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'mb-1' },
                            'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
                        ),
                        React.createElement(
                            'small',
                            { className: 'text-muted' },
                            'Donec id elit non mi porta.'
                        )
                    )
                ),
                this.test()
            );
        }
    }]);

    return ListPost;
}(React.Component);

domContainer = document.querySelector('#post_list');
ReactDOM.render(e(ListPost), domContainer);