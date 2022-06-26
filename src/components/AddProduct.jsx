import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form as FormikForm, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AddNewProduct } from '../redux/actions/productActions';

const Schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required').nullable(),
  inventoryDate: Yup.date().required('Required'),
});

const initialValues = {
  name: '',
  description: '',
  price: null,
  inventoryDate: '',
};

export const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container className="mt-5 w-50">
      <div className="text-end mb-2">
        <Button
          variant="success"
          onClick={() => navigate('/')}
        >
          See all Products
        </Button>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={(values) => {
          dispatch(AddNewProduct(values));
          navigate('/');
        }}
      >
        {({ errors, touched, handleChange }) => (
          <FormikForm>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} />
              {errors.name && touched.name && (
                <span className="text-danger">
                  {errors.name}
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" onChange={handleChange} />
              {errors.description && touched.description && (
                <span className="text-danger">
                  {errors.description}
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" onChange={handleChange} />
              {errors.price && touched.price && (
                <span className="text-danger">
                  {errors.price}
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inventory Date</Form.Label>
              <Form.Control type="date" name="inventoryDate" onChange={handleChange} />
              {errors.inventoryDate && touched.inventoryDate && (
                <span className="text-danger">
                  {errors.inventoryDate}
                </span>
              )}
            </Form.Group>
            <Button type="submit" className="mt-2">
              Submit
            </Button>
          </FormikForm>
        )}
      </Formik>
    </Container>
  );
}
