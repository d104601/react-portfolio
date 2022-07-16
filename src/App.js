import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App-header">
      <header>
       <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer class="bd-footer">
       <Footer />      
      </footer>
    </div>
  );
}

export default App;

