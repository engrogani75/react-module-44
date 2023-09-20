
import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Feature = ({feature}) => {

    return (
        <div className='text-start flex items-center mt-1 text-2xl text-bold'>
          <BsFillArrowRightCircleFill className='ml-4 mr-2'></BsFillArrowRightCircleFill> {feature}
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string
}

export default Feature;