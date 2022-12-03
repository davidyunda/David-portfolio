import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer'

import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Content 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <h2>Static Websites:</h2>
        <section className="cards-list">
          {cards}
        </section>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
