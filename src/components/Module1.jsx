import { useState } from "react";
import CustomerData from "../Data"

const Module1 = () => {
    const cleanData = (customerData) => {
        const cleanedData = [];
        for(let i = 0; i < customerData.length; i++) {
            let exist = false;
            for(let j = 0; j < cleanedData.length; j++) {
                if(customerData[i].customer === cleanedData[j].customer) {
                    cleanedData[j].amount += customerData[i].amount;
                    exist = true;
                    break;
                }
            }
            if(!exist) {
                cleanedData.push({id: cleanedData.length + 1, customer: customerData[i].customer, amount: customerData[i].amount});
            }
        }
        return cleanedData;
    }
    const [customerData, setCutomerData ] = useState(cleanData(CustomerData));

    const filterBySpending = () => {
        setCutomerData(customerData.sort((a,b)=>{return b.amount - a.amount;}));
    }

  return (
    <div className="w-full flex justify-between">
        <div className="border py-2 w-1/2 rounded-2xl">
            <div className="flex gap-10 w-full justify-around border-b mb-4 p-2">
                <div className="w-1/3 flex justify-center font-bold text-3xl border-r">ID</div>
                <div className="w-1/3 flex justify-center font-bold text-3xl border-r">Customer</div>
                <div className="w-1/3 flex justify-center font-bold text-3xl">Amount</div>
            </div>
            {customerData.map((customer) => (
                <div key={customer.id} className="flex gap-10 w-full justify-around">
                    <div className="w-1/3 flex justify-center text-lg mb-1 border-r">{customer.id}</div>
                    <div className="w-1/3 flex justify-center text-lg mb-1 border-r">{customer.customer}</div>
                    <div className="w-1/3 flex justify-center text-lg mb-1 ">{customer.amount}</div>
                </div>
            ))}
        </div>
        <div className="w-1/2 flex flex-col items-center">
            <div className="text-5xl ">
                Filters
            </div>
            <div className="mt-10 flex flex-col w-full justify-center gap-10 items-center">
                <button className="bg-white w-max text-black p-4 text-xl font-bold rounded-xl" onClick={filterBySpending}>
                    Customer by Spending
                </button>
                <button className="bg-white w-max text-black p-4 text-xl font-bold rounded-xl">
                    Top Customers
                </button>
                <button className="bg-white w-max text-black p-4 text-xl font-bold rounded-xl">
                    Filter by Name
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Module1