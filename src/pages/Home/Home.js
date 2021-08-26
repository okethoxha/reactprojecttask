import CustomerListTable from 'components/CustomerListTable'
import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="card-header">
                Customer List
            </div>
            <CustomerListTable />
        </div>
    )
}

export default Home
