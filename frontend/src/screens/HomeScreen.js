import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>MJ Thomas Art</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} id='cardPics' sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
// sm=(12) md=(6) lg=(4) xl=(3)
