const { Router } = require('express');
const PermissionMiddleware = require('../middlewares/permission');

class BaseRoute {
  constructor(controller) {
    this.controller = controller
    this.router = new Router()
    this.middlewares = []

    this.registBaseRoutes()
  }

  registBaseRoutes() {
    const resourceName = this.controller.service.model.name
    const { create, update, find, destroy } = this.controller
    const ReadResource = PermissionMiddleware(this.getPermission('read', resourceName))
    const WriteResouce = PermissionMiddleware(this.getPermission('write', resourceName))
    this.registRoutes([
      {path: '/', fn: find, method: 'get', middlewares: [ReadResource]},
      {path: '/', fn: create, method: 'post', middlewares: [WriteResouce]},
      {path: '/', fn: update, method: 'put', middlewares: [WriteResouce]},
      {path: '/', fn: destroy, method: 'delete', middlewares: [WriteResouce]}
    ])
  }

  registRoutes(routes = []) {
    routes.forEach(({ path, fn, method, middlewares = []}) => {
      this.router[method](path, ...middlewares, fn.bind(this.controller))
    })
  }

  getPermission(perrmission, resource) {
    return perrmission + '_' + resource
  }
}

module.exports = BaseRoute