import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

import DesignContainer from '../DesignContainer/DesignContainer';
import HomeContainer from '../HomeContainer/HomeContainer';
import RunContainer from '../RunContainer/RunContainer';

import LeaderboardContainer from '../LeaderboardContainer/LeaderboardContainer';
import ExploreContainer from '../ExploreContainer/ExploreContainer';
import Footer from '../../Components/Footer/Footer';

export default function MainContainer() {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      document.querySelector('nav').classList.add('sticky-nav');
      document.querySelector('.navbar').classList.remove('container-shadow');
    } else {
      document.querySelector('.navbar').classList.remove('sticky-nav');
    }
  });

  return (
    <>
      <div className="container-shadow">
        <NavigationBar />
      </div>
      <Container style={{ height: '150vh' }}>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/design" element={<DesignContainer />} />
          <Route path="/run" element={<RunContainer />} />
          <Route path="/explore" element={<ExploreContainer />} />
          <Route path="/leaderboard" element={<LeaderboardContainer />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
