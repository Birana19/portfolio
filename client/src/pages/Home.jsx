import { profileData } from "../data/profileData";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Smaller profile photo */}
        <img
          src={profileData.image}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
        />

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, I'm <span className="text-blue-500">{profileData.name}</span>
          </h1>
          <p className="mt-3 max-w-md text-gray-400">{profileData.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
