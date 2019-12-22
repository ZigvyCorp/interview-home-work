class Navigation extends React.Component {
  constructor (props) {
    super(props);
    this.authencation = $('#verify-site').data('authencation');
    this.user = $('#verify-site').data('user');
  }

  onChange = (event) => {
    var target = event.target;
    var $jquery = $(target);
    var valueSearch = $jquery.val()
    $('.list-group').find('div').remove();
    $('.list-group').find('.list-group-item').remove();
    $.ajax({
      url: '/api/post/' + valueSearch,
      type: 'get',
      success: function (res) {
          if (res.posts.length) {
              for (var i = 0; i < res.posts.length; i++) {
                  var post = res.posts[i];
                  var html = '<a id="' + post.id + '" href="/post/' + post.id + '" class="list-group-item list-group-item-action flex-column align-items-start">' +
                  '<div class="d-flex w-100 justify-content-between">' +
                  '<h5 class="mb-1">' + post.title + (post.user ? ' - Author: ' + post.user.name : '') + '</h5>' +
                  '<small>' + getHourMinuteFromTimestamp(post.createdAt) + ' ' + getDateMonthYearFromTimeStamp(post.createdAt) + '</small>' +
                  '</div>' +
                  '<p className="mb-1">' + post.content + '</p>' +
                  '</a>'
                  $('.list-group').append(html)
              }
          } else {
              $('.list-group').append('<div><h4>We dont have any post</h4></div>')
          }
      },
      error: function (res) {
          console.log(res);
          showNotification(NotificationType.DANGER, $('.list-post'), ErrorMessage.AN_ERROR_OCCURRED, 3000);
      }
  });
  }

  render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={BrandLogo} width="50" height="50" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutUs">About us</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 mr-auto">
              <input onChange={this.onChange} className="form-control mr-sm-2" type="search" placeholder="Don't input '/' :))" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar-nav mr-left">
              <li className="nav-item">
                <a className="nav-link" href={this.authencation ? '/api/user/' + this.user.username : '/signin'}>
                  {this.authencation ? 'Profile' : 'Sign In'}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={this.authencation ? '/api/logout' : '/signup'}>
                  {this.authencation ? 'Logout' : 'Sign Up'}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )
  }
}

var navigation = new Navigation()

domContainer = document.querySelector('#header_navigation');
ReactDOM.render(e(Navigation), domContainer);