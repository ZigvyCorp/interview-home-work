function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailPost = function (_React$Component) {
    _inherits(DetailPost, _React$Component);

    function DetailPost(props) {
        _classCallCheck(this, DetailPost);

        var _this = _possibleConstructorReturn(this, (DetailPost.__proto__ || Object.getPrototypeOf(DetailPost)).call(this, props));

        _this.state = [];
        return _this;
    }

    return DetailPost;
}(React.Component);

domContainer = document.querySelector('#post_detail');
ReactDOM.render(e(DetailPost), domContainer);