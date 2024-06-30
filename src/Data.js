let CustomerData = [{id: 't_01', customer: 'Rose Roberts', amount: 84},
    {id: 't_02', customer: 'Chris Cook', amount: 30},
    {id: 't_03', customer: 'Mary Martin', amount: 42},
    {id: 't_04', customer: 'Susan Smith', amount: 26},
    {id: 't_05', customer: 'Rose Roberts', amount: -84},
    {id: 't_06', customer: 'Rose Roberts', amount: 48},
    {id: 't_07', customer: 'Susan Smith', amount: 104},
    {id: 't_08', customer: 'Larry Lewis', amount: 140},
    {id: 't_09', customer: 'Mary Martin', amount: 10},
    {id: 't_10', customer: 'Chris Cook', amount: 60},
    {id: 't_11', customer: 'Susan Smith', amount: -26},
    {id: 't_12', customer: 'Larry Lewis', amount: -140},
    {id: 't_13', customer: 'Rose Roberts', amount: 26},
    {id: 't_14', customer: 'Ryan Roberts', amount: 44}];

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

    CustomerData = cleanData(CustomerData.sort((a,b)=>{return a.id - b.id;}));

export default CustomerData;