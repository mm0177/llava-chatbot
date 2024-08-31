import './App.css';
import Chatbot from './Chatbot/chatbot';
import Home from './Homepage/Home';
//import Chatbot from './Chatbot/chatbot';
import Login from './usercomponents/login';

function App() {
  return (
    <div className="App">
      <Home/>
      < Login/>
    </div>
  );
}

export default App;
