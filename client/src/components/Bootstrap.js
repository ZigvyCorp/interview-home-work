import React, { Component } from 'react';

class Bootstrap extends Component {
  render() {
    return (

      <div className="d-flex" id="wrapper">
        {/* Sidebar*/}
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
          <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
          </div>
        </div>
        {/* Page content wrapper*/}
        <div id="page-content-wrapper">
          {/* Top navigation*/}
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
              <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#!">Action</a>
                      <a className="dropdown-item" href="#!">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Page content*/}
          <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
            <p>
              Make sure to keep all page content within the
              <code>#page-content-wrapper</code>
              . The top navbar is optional, and just for demonstration. Just create an element with the
              <code>#sidebarToggle</code>
              ID which will toggle the menu when clicked.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bootstrap