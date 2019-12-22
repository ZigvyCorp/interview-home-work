class RegisterForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            confirmpassword: '',
            agreeTerm: ''
        }
    }

    test = (state) => {
        console.log(state);
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
        if (!this.state.password || !this.state.username || !this.state.confirmpassword) {
            showNotification(NotificationType.WARNING, $(target), ErrorMessage.Fill_Param_Required, 3000);
        } else if (this.state.password !== this.state.confirmpassword) {
            showNotification(NotificationType.WARNING, $(target), ErrorMessage.Password_Not_Equal, 3000);
        } else if (!this.state.agreeTerm) {
            showNotification(NotificationType.WARNING, $(target), ErrorMessage.Agree_Term, 3000);
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
                    }
                },
                error: function (res) {
                    console.log(res);
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
                                    <span className="db"><img className="m-5" src={LoadingLogo} alt="logo" width="200px" height="200px"/></span>
                                    <h5 className="font-big m-5 m-b-20 color-white">Sign Up</h5>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <form className="form-horizontal m-t-20" onSubmit={this.onSubmit}>
                                            <div className="form-group row ">
                                                <div className="col-12 ">
                                                    <input onChange={this.onChange} value={this.state.name} name="name" className="form-control form-control-lg" type="text" required=" " placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group row ">
                                                <div className="col-12 ">
                                                    <input onChange={this.onChange} value={this.state.username} name="username" className="form-control form-control-lg" type="text" required=" " placeholder="Username"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12 ">
                                                    <input onChange={this.onChange} value={this.state.password} name="password" className="form-control form-control-lg" type="password" required=" " placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12 ">
                                                    <input onChange={this.onChange} value={this.state.confirmpassword} name="confirmpassword" className="form-control form-control-lg" type="password" required=" " placeholder="Confirm Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12 ">
                                                    <div className="custom-control custom-checkbox">
                                                        <input onChange={this.onChange} value={this.state.agreeTerm} name="agreeTerm" type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                        <label className="custom-control-label" htmlFor="customCheck1">I agree to all <a href="#">Terms</a></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center ">
                                                <div className="col-xs-12 p-b-20 ">
                                                    <button onClick={this.test(this.state)} className="btn btn-block btn-lg btn-info " type="submit ">SIGN UP</button>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0 m-t-10 ">
                                                <div className="col-sm-12 text-center ">
                                                    Already have an account? <a href="/signin" className="text-info m-l-5 "><b>Sign In</b></a>
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

$('#header_navigation').hide()

domContainer = document.querySelector('#form_register');
ReactDOM.render(e(RegisterForm), domContainer);