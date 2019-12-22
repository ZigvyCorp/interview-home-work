class ListPost extends React.Component {
    constructor (props) {
        super(props);
        this.listPost = [];
    }

    render () {
        console.log(navigation);
        return (
            <div className="container list-post">
                <div className="card-header">
                    <div className="row">
                        <div className="col-9">
                            <h1 className="">List post</h1>
                        </div>
                        <div className="col-3 align-right">
                            { navigation.authencation ? <a className="btn btn-primary" href="/create-post">Create</a> : ''}
                        </div>
                    </div>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                </div>
            </div>
        )
    }
}

domContainer = document.querySelector('#post_list');
ReactDOM.render(e(ListPost), domContainer);