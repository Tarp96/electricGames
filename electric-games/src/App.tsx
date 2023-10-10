import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ShowAllPage from './pages/ShowAllPage';
import SearchForGamesPage from './pages/SearchForGamesPage';
import DeleteGame from './components/deleteGame/DeleteGame';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddGame from './components/addGames/AddGame';
import UpdateGame from './components/updateGame/UpdateGame';
import QuizPage from './pages/QuizPage';
import Navigation from './shared/Navigation';


function App() {
  return (
    <>
    <div className='App'>
    <BrowserRouter>
      <Navigation />
      
     <Routes>
        <Route path='/' element={<ShowAllPage />}></Route>
        <Route path='search' element={<SearchForGamesPage />}></Route>
        <Route path="addGame" element={<AddGame />}></Route>
        <Route path="deleteGame" element={<DeleteGame />}></Route>
        <Route path="updateGame" element={<UpdateGame />}></Route>
        <Route path="quiz" element={<QuizPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>

    
    </>
  );
}

export default App;
