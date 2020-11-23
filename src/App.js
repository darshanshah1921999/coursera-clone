import './App.css';
import Header from './components/header/Header';
import HeroBanner from './components/main/hero-banner/HeroBanner';
import Partners from './components/main/partners/Partners';
import AchieveYourGoal from './components/main/achieve-your-goals/AchieveYourGoal';
import Promoad from './components/main/promoAd/Promoad';
import Static from './components/main/static-component/Static';
function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroBanner />
        <Partners />
        <AchieveYourGoal/>
        <Promoad />
        <Static />
      </main>
    </div>
  );
}

export default App;
