import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Specifications
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Overview
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')}`}
                                onClick={() => handleActive('reviews')}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Brand</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Title</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Generic Name</span>
                                            <span>{category}</span>
                                        </li>
                                        <li>
                                            <span>Type</span>
                                            <span>{type}</span>
                                        </li>
                                        <li>
                                            <span></span>
                                            <span>{connectivity}</span>
                                        </li>
                                        <li>
                                            <span></span>
                                            <span></span>
                                        </li>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>The <span>{title}</span> {info} provides with good quality</h3>
                                    <ul>
                                        <li>Have high-quality ingredients</li>
                                        <li>Comfortable to use</li>
                                        <li>Increased engagement and loyalty</li>
                                    </ul>
                                    <p>Buy the <b>{title} {info}</b> which offers you with dog subscription box and surprise your furry cute cat subscription box. These boxes will suit your every want and need. All of our pet themed boxes are filled with premium pet toys, treats, collars, and so much more. Our merchants love their four-legged (or two!).</p>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                        {
                                            reviewsData.map(item => (
                                                <ProductReviews
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;