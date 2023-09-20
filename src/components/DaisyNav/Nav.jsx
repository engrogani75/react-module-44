import { useState } from "react";
import Link from "../link/Link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFingerprint, FaWindowClose } from 'react-icons/fa';
import PriceOptions from "../PriceOption/PriceOptions";
import LineChart from "../LineChart/LineChart";
import Phones from "../Phones/Phones";
import { BallTriangle } from "react-loader-spinner";


const Nav = () => {

   

   const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', exact: true, name: 'Home' },
        { id: 2, path: '/about', exact: true, name: 'About' },
        { id: 3, path: '/services', exact: true, name: 'Services' },
        { id: 4, path: '/contact', exact: true, name: 'Contact' },
        { id: 5, path: '/blog/:postId', exact: true, name: 'BlogPost' }
      ];
       
    

    return (

        
      
       <>

<nav>

<div onClick={() =>setOpen(!open)} className="md:hidden">

   {
       open === true?  <FaWindowClose className="text-3xl"></FaWindowClose> : <GiHamburgerMenu className="text-3xl"></GiHamburgerMenu>
   }   

</div>



<ul className={`md:flex absolute md:static bg-red-600 duration-1000
${open? 'top-16' : '-top-60'}`}>
{
   routes.map(route => <Link key={route.id} route={route}></Link>)
}
</ul>

</nav>

<PriceOptions></PriceOptions>
<LineChart></LineChart>
<Phones></Phones>
<BallTriangle></BallTriangle>
<FaFingerprint></FaFingerprint>

       </>
        
    );
};

export default Nav;