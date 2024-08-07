import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtisanList from './pages/ArtisanList';
import ArtisanDetails from './pages/ArtisanDetails';
import { SearchProvider } from './components/SearchContex';


function App() {
    return (
        <div className="App">
            <SearchProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/artisanlist' element={<ArtisanList/>}></Route>
                    <Route path="/artisan/:id" element={<ArtisanDetails />} />
                </Routes>
                <Footer />
            </SearchProvider>
        </div>
    );
}

export default App;
