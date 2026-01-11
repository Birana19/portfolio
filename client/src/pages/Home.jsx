import { profileData } from "../data/profileData";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home section">
      <div className="home-content">
        <img src={profileData.image} alt="Profile" className="profile-img" />

        <div>
          <h1 className="heading-lg">
            Hi, I'm <span className="blue">{profileData.name}</span>
          </h1>
          <p className="text-muted">{profileData.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
