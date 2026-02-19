import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className='app-container'>
            <Header />

            <main className='content' style={{ minHeight: '80vh' }}>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;