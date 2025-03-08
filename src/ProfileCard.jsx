function ProfileCard({ user, onDelete }) {
  if (!user) return null;
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center transition-all hover:scale-105 flex flex-col items-center">
      <img src={user.picture || "https://via.placeholder.com/150"} alt={user.name || "User"} className="w-32 h-32 rounded-full border-4 border-blue-500" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-black dark:text-white">{user.name || "N/A"}</h3>
        <p className="text-gray-700 dark:text-gray-300">Age: {user.age || "N/A"}</p>
        <p className="text-gray-700 dark:text-gray-300">Email: {user.email || "N/A"}</p>
        <button onClick={onDelete} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-lg font-semibold transition-all">Delete</button>
      </div>
    </div>
  );
}

export default ProfileCard;