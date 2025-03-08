function ProfileCard({ user, onDelete }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center transition-all hover:scale-105 flex flex-row items-center space-x-4 text-white">
        <img src={user.picture} alt={user.name} className="w-24 h-24 rounded-full border-4 border-blue-500" />
        <div className="text-left">
          <h3 className="text-xl font-semibold text-white">{user.name}</h3>
          <p className="text-white">Age: {user.age}</p>
          <p className="text-white">Email: {user.email}</p>
          <button onClick={onDelete} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-lg font-semibold transition-all">Delete</button>
        </div>
      </div>
    );
  }
  
  export default ProfileCard;
  