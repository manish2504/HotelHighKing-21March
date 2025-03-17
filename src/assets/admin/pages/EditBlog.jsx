import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const [blog, setBlog] = useState({ title: '', description: '', content: '', author: '', imageUrl: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) throw new Error('Blog not found');
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        alert('Blog updated successfully!');
        navigate('/admin/blogs');
      } else {
        alert('Error updating blog!');
      }
    } catch (error) {
      alert('Error occurred while updating the blog!');
    }
  };

  return (
    <div>
      <h2>Edit Blog</h2>

      {errorMessage && <div>{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={blog.title} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={blog.description} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" value={blog.content} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Author</label>
          <input type="text" name="author" value={blog.author} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" name="imageUrl" value={blog.imageUrl} onChange={handleInputChange} required />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
