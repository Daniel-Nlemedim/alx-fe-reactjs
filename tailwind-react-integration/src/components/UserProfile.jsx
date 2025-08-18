function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover mx-auto"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 font-bold">
        John Doe
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
