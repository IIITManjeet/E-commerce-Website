import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'
import categories from '../categories'
import "./Home.css";
function Home() {
  return (
    <div>
      <img src='https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png' className="home-banner" />
      <div className="featured__products--container container mt-4">
        <h2>Last Products</h2>
        {/*last products here*/}
      </div>
      <div>
        <Link to="/category/all" style={{ textAlign: 'right', display: 'block', textDecoration: 'None' }}>See More{">>"}</Link>
      </div>
      {/*sale banner*/}
      <div className='sale__banner-container mt-4'>
        <img src='https://t3.ftcdn.net/jpg/03/16/37/64/360_F_316376413_nYL2jpLONPQPOsy31DE86n7FPpSxPIi3.jpg' />
      </div>
      <div className='recent-products-container container mt-4'>
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
              <Col md={4}>
                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>

    </div>
  )
}

export default Home