const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Post APIs', () => {
  let post = {
    postname: 'KK123',
    mobileNumber: '1234567890'
  };

  describe('# POST /api/posts', () => {
    it('should create a new post', (done) => {
      request(app)
        .post('/api/posts')
        .send(post)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.postname).to.equal(post.postname);
          expect(res.body.mobileNumber).to.equal(post.mobileNumber);
          post = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/posts/:postId', () => {
    it('should get post details', (done) => {
      request(app)
        .get(`/api/posts/${post._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.postname).to.equal(post.postname);
          expect(res.body.mobileNumber).to.equal(post.mobileNumber);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when post does not exists', (done) => {
      request(app)
        .get('/api/posts/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/posts/:postId', () => {
    it('should update post details', (done) => {
      post.postname = 'KK';
      request(app)
        .put(`/api/posts/${post._id}`)
        .send(post)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.postname).to.equal('KK');
          expect(res.body.mobileNumber).to.equal(post.mobileNumber);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/posts/', () => {
    it('should get all posts', (done) => {
      request(app)
        .get('/api/posts')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all posts (with limit and skip)', (done) => {
      request(app)
        .get('/api/posts')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/posts/', () => {
    it('should delete post', (done) => {
      request(app)
        .delete(`/api/posts/${post._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.postname).to.equal('KK');
          expect(res.body.mobileNumber).to.equal(post.mobileNumber);
          done();
        })
        .catch(done);
    });
  });
});
