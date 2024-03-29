import { Link } from 'react-router-dom';

export default function Bread({productId, productName, productUrl}) {
    return (
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <span>
                        <span>
                            <Link aria-current="page" className="active" to="/">Home</Link>
                            <span>/</span>
                        </span>
                        <span to={productUrl}>{productName}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}