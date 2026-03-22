import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import '../components/styles/OrdersPage.css';

const OrdersPage = () => {
    return (
        <Layout>
            <div className='order-container'>
                <h2 className='order-title'>Meus Pedidos</h2>
                <p className='order-text'>Nenhum pedido foi encontrado em sua conta no momento.</p>
            </div>
            <div className='order-btn-container'>
                <button className='order-btn'>
                    <Link to="/products">Continuar Comprando</Link>
                </button>
            </div>
        </Layout>
    );
};

export default OrdersPage;