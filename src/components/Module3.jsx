import { useState } from "react";
import CustomerData from "../Data"

const Module3 = () => {
    const [name,setname] = useState("");

    const filteredData = CustomerData.filter((item) => {
        return item.customer.toLowerCase().includes(name.toLowerCase());
    });
  return (
    <div>
        <h1>Filter by Name</h1>
        <div>
            <input type="text" placeholder="Search Name" onChange={(e) => {setname(e.target.value);}}
            />
            {
                filteredData.map((customer) => (
                    <div key={customer.id} className="flex gap-10 w-96 justify-around">
                        <div>{customer.id}</div>
                        <div>{customer.customer}</div>
                        <div>{customer.amount}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Module3