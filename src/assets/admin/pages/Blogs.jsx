import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchBlogs();
  }, []);

  const handleAddBlog = () => {
    navigate('/admin/add-blogs');
  };

  const handleEditBlog = (blogId) => {
    navigate(`/admin/edit-blogs/${blogId}`);
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${blogId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
        alert('Blog deleted successfully!');
      } else {
        alert('Error deleting blog!');
      }
    } catch (error) {
      alert('Error deleting blog!');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 className="text-2xl font-semibold">Blog List</h2>

      {/* Button aligned to the right */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddBlog}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add New Blog
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <div>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-sm p-6 mb-4"
            >
              {/* Image for blog */}
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  width="100%"
                  height="200px"
                  className="rounded-lg"
                />
              )}
              <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
              <p>{blog.description}</p>

              {/* Edit and Delete buttons */}
              <div className="mt-4">
                <button
                  onClick={() => handleEditBlog(blog._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
