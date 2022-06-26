import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DeleteProduct } from '../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const navigate = useNavigate();
  const { products } = useSelector(({ productReducer }) => productReducer);
  const dispatch = useDispatch();

  return (
    <Container className="container mt-5">
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Inventory Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.inventoryDate}</td>
              <td>
                <Button 
                  className="btn-sm"
                  variant="danger"
                  onClick={() => dispatch(DeleteProduct(product))}
                >
                  Delete Product
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={() => navigate('/add-product')}>Add a Product</Button>
    </Container>
  );
}
