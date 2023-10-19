import PropTypes from 'prop-types';
const Product = ({product}) => {
  const { _id, name, brand, type, rating, price, details, photo } = product;

  return (
    <div>
      <h1 className="text-2xl">I am product</h1>
    </div>
  );
};
Product.propTypes = {
    product:PropTypes.object
}
export default Product;
