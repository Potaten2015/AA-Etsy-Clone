import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProductPageImage = ({url}) => {

    const item = useSelector(state => state.browse.currentItem);

    return (
        <img src={url} />
    )
}

export default ProductPageImage;
