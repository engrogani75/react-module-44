import PriceOption from "./PriceOption";


const PriceOptions = () => {

const priceOption = [
    {
      "id": "option1",
      "name": "Basic",
      "price": 19.99,
      "description": "Basic plan with essential features",
      "features": [
        "10GB storage",
        "Unlimited bandwidth",
        "Email support"
      ]
    },
    {
      "id": "option2",
      "name": "Standard",
      "price": 39.99,
      "description": "Standard plan with additional features",
      "features": [
        "25GB storage",
        "Unlimited bandwidth",
        "24/7 customer support",
        "Basic analytics"
      ]
    },
    {
      "id": "option3",
      "name": "Premium",
      "price": 69.99,
      "description": "Premium plan with advanced features",
      "features": [
        "50GB storage",
        "Unlimited bandwidth",
        "Priority customer support",
        "Advanced analytics",
        "Customizable templates"
      ]
    },
    {
      "id": "option4",
      "name": "Business",
      "price": 99.99,
      "description": "Business plan with enterprise-level features",
      "features": [
        "100GB storage",
        "Unlimited bandwidth",
        "Dedicated account manager",
        "24/7 premium support",
        "API access",
        "Data export"
      ]
    }
  ]
  


    return (
        <div className="grid grid-cols-4 gap-8 mx-3  mt-10 pt-10">
           {
             
                 priceOption.map((option) => <PriceOption key={option.id} option = {option}></PriceOption>)
            

           } 
        </div>
    );
};

export default PriceOptions;