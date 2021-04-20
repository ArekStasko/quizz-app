import './styles/themes/default/theme.scss'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainPage from './pages/mainPage'
import QuizLayout from './pages/quizLayout';

function App() {

  return (
    <div>
      <div className='quiz_global-logo'></div>
    <Router>
      <Route exact path='/' component={MainPage} />
      <Route path='/quiz/:category' component={QuizLayout} />
    </Router>
    </div>
  );
}

export default App;
