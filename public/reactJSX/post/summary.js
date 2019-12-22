class SummaryPost extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
        console.log(props)
    }

    render () {
        return (
            <p>test</p>
        )
    }
}

domContainer = document.querySelector('#post_summary');
ReactDOM.render(e(SummaryPost), domContainer);