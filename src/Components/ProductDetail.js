import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import './ProductDetail.css';
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/CardSlice';
import toast, { Toaster } from 'react-hot-toast';

function ProductDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id, title: detail.title, image: detail.image, price: detail.price, quantity: 1
        }));

        toast.success(`${detail.title} added to cart`);
    };

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setDetail(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        getProductDetails();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!detail) {
        return <div className="loading">No product found!</div>;
    }

    return (
        <div>
            <Nav />
            <Toaster position="top-left" />
            <section className="product-detail-section">
                <div className="container">
                    <div className="product-detail">
                        <div className="image-container">
                            {detail.image ? (
                                <img src={detail.image} className="product-image" alt={detail.title || "Product"} />
                            ) : (
                                <div>Image not available</div>
                            )}
                        </div>
                        <div className="product-info">
                            <h1 className="product-title">{detail.title}</h1>
                            <div className="product-price-description">
                                <p className="product-price">${detail.price}</p>
                                <p className="product-description">{detail.description}</p>
                            </div>
                            <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={loading || !detail?.title}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;
