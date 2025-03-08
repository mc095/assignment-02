import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

export default function App() {
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col items-center justify-start p-5 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <div className="flex gap-4 mb-6">
          <button
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold rounded-lg shadow-md"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
          <Link to="/add-profile">
            <button className="px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-lg shadow-md">
              Add Profile
            </button>
          </Link>
        </div>
        
        <Routes>
          <Route path="/" element={
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {users.map((user, index) => (
                <ProfileCard key={index} user={user} onDelete={() => handleDelete(index)} />
              ))}
            </div>
          } />
          <Route path="/add-profile" element={<ProfileForm onAddUser={handleAddUser} />} />
        </Routes>
      </div>
    </Router>
  );
}