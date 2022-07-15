import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
