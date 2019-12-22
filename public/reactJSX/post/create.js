class CreatePost extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            owner: parseInt(navigation.user.id, 10),
            content: '',
            tags: ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value;
        var type = target.type;
        if (type === 'checkbox') {
            value = $(target).prop('checked');
        } else {
            value = target.value;
        }

        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        var target = event.target;
        this.state.content = quill.container.innerHTML
        console.log(this.state);
        if (!this.state.title || !this.state.content) {
            showNotification(NotificationType.WARNING, $(target), ErrorMessage.Fill_Param_Required, 3000);
        } else {
            $.ajax({
                url: '/api/post',
                type: 'post',
                dataType: 'json',
                data: this.state,
                success: function (res) {
                    console.log(res);
                    if (res.error) {
                        showNotification(NotificationType.DANGER, $(target), res.message, 3000);
                    } else {
                        showNotification(NotificationType.SUCCESS, $(target), res.message, 3000);
                        setTimeout(function () {
                            window.location.href = '/'
                        }, 3000);
                    }
                },
                error: function (res) {
                    console.log(res);
                    showNotification(NotificationType.DANGER, $(target), ErrorMessage.AN_ERROR_OCCURRED, 3000);
                }
            });
        }
    }

    render () {
        return (
            <div className="row m-5">
                <div className="col-4 offset-4">
                    <div className="auth-wrapper bg-dark">
                        <div className="auth-box">
                            <div>
                                <div className="logo align-center">
                                    {/* <span className="db"><img className="m-5" src={LoadingLogo} alt="logo" width="200px" height="200px"/></span> */}
                                    <h5 className="font-big m-5 m-b-20 color-white">Create Post</h5>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <form className="form-horizontal m-t-20" onSubmit={this.onSubmit}>
                                            <div className="form-group row ">
                                                <div className="col-12 ">
                                                    <input onChange={this.onChange} value={this.state.title} name="title" className="form-control form-control-lg" type="text" required=" " placeholder="Title"/>
                                                </div>
                                            </div>
                                            <div className="form-group row ">
                                                <div className="col-12 ">
                                                    <input onChange={this.onChange} value={this.state.tags} name="tags" className="form-control form-control-lg" type="text" required=" " placeholder="Please insert ',' between tags"/>
                                                </div>
                                            </div>
                                            <div className="quill-add"></div>
                                            <div className="form-group text-center m-5">
                                                <div className="col-xs-12 p-b-20 ">
                                                    <button className="btn btn-block btn-lg btn-info " type="submit ">Create</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

domContainer = document.querySelector('#post_create');
ReactDOM.render(e(CreatePost), domContainer);