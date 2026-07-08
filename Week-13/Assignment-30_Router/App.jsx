import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;
export default function App() {
    return (<BrowserRouter>
        <nav><Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/blog'>Blog</Link></nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
    </BrowserRouter>);
}