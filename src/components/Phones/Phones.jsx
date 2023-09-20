
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import {BallTriangle, FidgetSpinner} from 'react-loader-spinner'




const Phones = () => {

    const [phones, setPhones] = useState([])
    // useEffect(() =>{
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneFakeData = phoneData.map(phones =>{
                console.log(phones);

                const obj = {
                    name:  phones.phone_name,
                    price: parseInt(phones.slug.split('-')[1])
                }

                return obj
            })

            setPhones(phoneFakeData)
            console.log(phoneFakeData);

         

        })
    }, [])





    return (
        <div className="mt-6">
            <BarChart width={1000} height={300} data={phones}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis/>
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="price" fill="#8884d8" barSize={30} />
  </BarChart>

 <div className="flex justify-center items-center">
 <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>

<FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/>
 </div>
        </div>
    );
};

export default Phones;
