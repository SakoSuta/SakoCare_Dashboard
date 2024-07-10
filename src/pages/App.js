import './App.css';
import Header from '../components/header/Header'
import mokup from '../assets/images/Mokup.png'

function App() {
  return (
    <div className="App">
            <Header />
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>Tous vos collaborateurs, travaux et outils.</h1>
                        <p>Sans le bruit.</p>
                        <button className='first'>Download on Google Play</button>
                        <button className='inverse'>Download on App Store</button>
                    </div>
                    <div className="hero-image">
                        <img src={mokup} alt="Outils et icônes" />
                    </div>
                </section>
            </main>
        </div>
  );
}

export default App;
