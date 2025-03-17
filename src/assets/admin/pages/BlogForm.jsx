import React, { useState } from 'react';

const BlogForm = ({ onBlogAdded }) => {
  const [blog, setBlog] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    imageUrl: '', // Image URL input
  });

  const [imagePreview, setImagePreview] = useState('');
  const [isUrl, setIsUrl] = useState(false); // Track if image is from URL or file

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);  // Preview the image
        setBlog((prevBlog) => ({
          ...prevBlog,
          imageUrl: reader.result,  // Set the image URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setBlog((prevBlog) => ({
      ...prevBlog,
      imageUrl: url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        const newBlog = await response.json();
        onBlogAdded(newBlog);  // Notify the parent component to update the blogs list
        alert('Blog added successfully!');
        setBlog({ title: '', description: '', content: '', author: '', imageUrl: '' }); // Reset form
        setImagePreview('');  // Reset image preview
      } else {
        alert('Error adding blog!');
      }
    } catch (error) {
      alert('Error adding blog!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleInputChange}
            required
            rows="6"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Selection */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Image</label>
          <div className="flex items-center space-x-4">
            {/* "+" Button for file input */}
            <button
              type="button"
              onClick={() => document.getElementById('imageUpload').click()}
              className="p-2 bg-blue-500 text-white rounded-full"
            >
              +
            </button>
            <input
              id="imageUpload"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            
            {/* URL Input */}
            <input
              type="text"
              value={blog.imageUrl}
              onChange={handleImageUrlChange}
              placeholder="Or enter image URL"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Displaying Image Preview */}
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Image Preview" className="w-20 h-20 object-cover rounded-md" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
