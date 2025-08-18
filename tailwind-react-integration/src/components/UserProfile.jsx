function UserProfile() {
  return (
    <div className="user-profile  bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 sm:p-4  md:p-8 md:max-w-sm ">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 rounded-full mx-auto sm:w-24 md:w-36 h-36 md:h-36"
      />
      <h1 className="text-xl text-blue-800 my-4  md:text-xl font-bold">
        John Doe
      </h1>
      <p className="text-gray-600 md:text-base text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
