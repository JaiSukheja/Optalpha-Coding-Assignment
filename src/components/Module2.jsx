import CustomerData from "../Data"

const Module2 = () => {
  return (
    <div>
    <h1>Top 3 Customers based on Spending are: </h1>
        <div>
            {CustomerData.sort((a, b) => b.amount - a.amount).slice(0, 3).map((customer) => (
                <div key={customer.id} className="flex gap-10 w-96 justify-around">
                    <div>{customer.id}</div>
                    <div>{customer.customer}</div>
                    <div>{customer.amount}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Module2