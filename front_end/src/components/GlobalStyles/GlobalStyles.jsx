import PropTypes from "prop-types";
import './GlobalStyles.css'

function GlobalStyles({children}) {
    return children;
}
GlobalStyles.prototype = {
    children: PropTypes.node.isRequired
}


export default GlobalStyles;