var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
        React.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          React.createElement("img", { src: BrandLogo, width: "50", height: "50", alt: "" })
        ),
        React.createElement(
          "button",
          { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { className: "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { className: "navbar-nav mr-auto" },
            React.createElement(
              "li",
              { className: "nav-item active" },
              React.createElement(
                "a",
                { className: "nav-link", href: "/" },
                "Home ",
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "(current)"
                )
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: "nav-link", href: "/aboutUs" },
                "About us"
              )
            )
          ),
          React.createElement(
            "form",
            { className: "form-inline my-2 my-lg-0 mr-auto" },
            React.createElement("input", { className: "form-control mr-sm-2", type: "search", placeholder: "Search", "aria-label": "Search" }),
            React.createElement(
              "button",
              { className: "btn btn-outline-success my-2 my-sm-0", type: "submit" },
              "Search"
            )
          ),
          React.createElement(
            "ul",
            { className: "navbar-nav mr-left" },
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: "nav-link", href: "/signin" },
                "Sign In"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: "nav-link", href: "/signup" },
                "Sign Up"
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

domContainer = document.querySelector('#header_navigation');
ReactDOM.render(e(Navigation), domContainer);