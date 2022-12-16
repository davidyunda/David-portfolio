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

  const skills = ['CSS', 'HTML', 'JavaScript', 'UI Design', 'Django', 'React', 'Python', 'Github']
  const listItems = skills.map((number) =>
    <li className='box-skill'>{number}</li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <div className='container-cards'>
          <h2>Static Websites:</h2>
          <p>Programing languages used: HTML, CSS, JavaScript, Vue, React</p>
          <section className="cards-list">
            {cards}
          </section>
        </div>
        <div className='container-skills'>
          <h2>Skills:</h2>
          {listItems}
        </div>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
