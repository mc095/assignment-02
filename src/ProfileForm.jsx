import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileForm({ onAddUser }) {
  const [formData, setFormData] = useState({ name: "", age: "", email: "", picture: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.email && formData.picture) {
      onAddUser(formData);
      setFormData({ name: "", age: "", email: "", picture: "" });
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-xl font-semibold mb-4 text-black dark:text-white">Create Profile</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
          required
        />
        <input
          type="url"
          name="picture"
          placeholder="Profile Picture URL"
          value={formData.picture}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
          required
        />
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all">Add Profile</button>
      </form>
    </div>
  );
}

export default ProfileForm;