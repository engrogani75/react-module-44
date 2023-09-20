
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
const {name, price, description, features} = option
    return (



          <div className='border-red-200 bg-cyan-600 p-4 flex flex-col'>


<h2 className='text-center mb-5 pb-10'> <small className='text-6xl'>Price: {price}</small>
 <small className='text-2xl'>/mon</small>
 </h2>


  <p className='text-center text-3xl font-bold'>{name}</p>


 <p className='text-center text-lg mt-4 border-b-2'>{description}</p>


 <div className='py-5 flex-grow'>

  {features.map((feature, index) => <Feature key={index} feature= {feature}></Feature>)}
 </div>

<div>
<button className='bg-emerald-700 w-full py-4'>Buy Now</button>
</div>

</div>
    

         
        
    );
};


PriceOption.propTypes = {
    option:PropTypes.object
}

export default PriceOption;


