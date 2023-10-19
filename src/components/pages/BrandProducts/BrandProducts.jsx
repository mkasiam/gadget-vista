import PropTypes from 'prop-types';
const BrandProducts = ({product}) => {
    console.log(product);
    return (
        <div>
            <h1 className="text-2xl">I am brand products</h1>
        </div>
    );
};
BrandProducts.propTypes = {
    product:PropTypes.object
}
export default BrandProducts;