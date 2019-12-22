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

describe('## comment APIs', () => {
  let comment = {
    commentname: 'KK123',
    mobileNumber: '1234567890'
  };

  describe('# POST /api/comments', () => {
    it('should create a new comment', (done) => {
      request(app)
        .post('/api/comments')
        .send(comment)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.commentname).to.equal(comment.commentname);
          expect(res.body.mobileNumber).to.equal(comment.mobileNumber);
          comment = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/comments/:commentId', () => {
    it('should get comment details', (done) => {
      request(app)
        .get(`/api/comments/${comment._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.commentname).to.equal(comment.commentname);
          expect(res.body.mobileNumber).to.equal(comment.mobileNumber);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when comment does not exists', (done) => {
      request(app)
        .get('/api/comments/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/comments/:commentId', () => {
    it('should update comment details', (done) => {
      comment.commentname = 'KK';
      request(app)
        .put(`/api/comments/${comment._id}`)
        .send(comment)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.commentname).to.equal('KK');
          expect(res.body.mobileNumber).to.equal(comment.mobileNumber);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/comments/', () => {
    it('should get all comments', (done) => {
      request(app)
        .get('/api/comments')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all comments (with limit and skip)', (done) => {
      request(app)
        .get('/api/comments')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/comments/', () => {
    it('should delete comment', (done) => {
      request(app)
        .delete(`/api/comments/${comment._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.commentname).to.equal('KK');
          expect(res.body.mobileNumber).to.equal(comment.mobileNumber);
          done();
        })
        .catch(done);
    });
  });
});
