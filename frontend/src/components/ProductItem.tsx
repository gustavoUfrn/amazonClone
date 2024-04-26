import { Button, Card, CardBody, CardTitle } from 'react-bootstrap'
import { Product } from '../types/Product'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <CardBody>
        <Link to={`/product/${product.slug}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button>Add to cart</Button>
        )}
      </CardBody>
    </Card>
  )
}

export default ProductItem
