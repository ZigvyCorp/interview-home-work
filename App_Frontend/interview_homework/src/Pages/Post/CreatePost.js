import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState(''); 
  const [tags, setTags] = useState([]); 
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && content.trim()) {
      dispatch({
        type: 'CREATE_POST_REQUEST', 
        payload: { title, content, tags }, 
      });
      navigate('/dashboard');
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]); // Add new tag to the tags array
      setTagInput(''); // Clear the tag input
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove)); // Remove the selected tag
  };

  return (
    <div className="justify-content-center create-post">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tags">Tags:</label>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag} <button type="button" onClick={() => handleRemoveTag(tag)}>x</button>
              </span>
            ))}
          </div>
          <div>
            <input
              type="text"
              id="tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); 
                  handleAddTag(); 
                }
              }}
            />
            <button type="button" onClick={handleAddTag}>Add Tag</button>
          </div>
          
        </div>
        <br/>
        <button type="submit" >Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
