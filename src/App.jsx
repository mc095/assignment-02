import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", age: "", email: "", picture: "" });
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.email && formData.picture) {
      setUsers([...users, formData]);
      setFormData({ name: "", age: "", email: "", picture: "" });
    }
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start p-5 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <button
        className="mb-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold rounded-lg shadow-md"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-xl font-semibold mb-4 text-white">Create Profile</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-700"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-700"
          required
        />
        <input
          type="url"
          name="picture"
          placeholder="Profile Picture URL"
          value={formData.picture}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-700"
          required
        />
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all">Add Profile</button>
      </form>

      <div className="mt-8 w-full flex flex-col items-center gap-6">
        {users.map((user, index) => (
          <ProfileCard key={index} user={user} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}