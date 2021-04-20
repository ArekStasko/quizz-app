import './styles/themes/default/theme.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainPage from './pages/mainPage'
import QuizLayout from './pages/quizLayout';

function App() {

  return (
    <div>
      <div className='quiz_global-logo'></div>
    <Router>
      <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/quiz/:category' component={QuizLayout} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
