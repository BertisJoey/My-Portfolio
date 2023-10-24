import { Navbar } from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
        <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Joey Wiesner
        </h1>
        <Navbar />
    </header>
  );
};

export default Header;

