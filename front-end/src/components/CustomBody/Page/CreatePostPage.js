import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import useForm from '../../../helper/useForm'
import validateForm from '../../../helper/validateForm'
import { doAddPost } from '../../../actions/posts'

const CreatePostPage = (props) => {

	const { postsData, onAddPost, history } = props
	const callback = (data) => {

		if (!(data.title.trim() && data.content.trim() && data.tags.trim())) {
			return
		}

		const postId = postsData[postsData.length - 1].id + 1
		const owner = 1 // default
		const created_at = moment().valueOf()
		const tagsArray = data.tags.split(",")

		const postData = {
			...data,
			id: postId,
			owner: owner,
			created_at: created_at,
			tags: tagsArray
		}

		console.log(postData)

		onAddPost(postData)
		history.push(`/`)
	}

	const errorClass = 'small text-danger pl-2'

	const {
		handleBlur,
		handleChange,
		handleFocus,
		handleSubmit,
		errors,
		values
	} = useForm(callback, validateForm)
	
	return (
		<div className="min-vh-100 pt-3 mx-5">
	    <form
	      id="container"
	      noValidate
	      onSubmit={handleSubmit}
	      className="p-5 "
	    >

	      <div className="form-group">
	        <label className="custom-label">
	          Title
	        </label>
	        
	        <input
	          name="title"
	          type="text"
	          value={values.title}
	          onBlur={handleBlur}
	          onChange={handleChange}
	          onFocus={handleFocus}
	          className="form-control"
	        />

	        <div className={errorClass}>
            {errors.title}
          </div>
	      </div>

	      <div className="form-group">
	        <label className="custom-label">
	          Content
	        </label>

	        <textarea
	          name="content"
	          type="text"
	          value={values.content}
	          onBlur={handleBlur}
	          onChange={handleChange}
	          onFocus={handleFocus}
	          className="form-control"
	          rows="5"
	        />

	        <div className={errorClass}>
            {errors.content}
          </div>
	      </div>

	      <div className="form-group">
	        <label className="custom-label">
	          Tags
	        </label>

	        <input
	          name="tags"
	          type="text"
	          value={values.tags}
	          onBlur={handleBlur}
	          onChange={handleChange}
	          onFocus={handleFocus}
	          className="form-control"
	          placeholder='you can add many tags by a comma, e.g: "sports, food, news"'
	        />

	        <div className={errorClass}>
            {errors.tags}
          </div>
	      </div>

	      <button
	        id="login-btn"
	        type="submit"
	        className="btn btn-primary mx-auto d-block mt-5"
	      >
	        Create Post!
	      </button>

	    </form>

		</div>
	)
}

const mapStateToProps = (state) => ({
	postsData: state.posts,
})

const mapDispatchToProps = (dispatch) => ({
  onAddPost: (post) => dispatch(doAddPost(post))
})

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)	
)(CreatePostPage)