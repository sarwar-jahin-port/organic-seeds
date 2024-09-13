import React from 'react'
import { Link } from 'react-router-dom'

const OrderList = () => {
    const orders = [
        {
            "id": 1423534634312234,
            "customer-name": "Sarwar Jahin",
            "address": {
                "division": "Chittagong",
                "sub-division": "Chittagong",
                "Area": "Anderkilla",
                "Road/ Lane": "Nizom abashik, kalifa patti, sub area lane"
            },
            "contact": "01559065139",
            "orders": [
                {
                    "sku": "1",
                    "quantity": "2"
                },
                {
                    "sku": "2",
                    "quantity": "1"
                },
                {
                    "sku": "3",
                    "quantity": "3"
                }
            ],
            "status": "rts"
        },
        {
            "id": 1423534634312235,
            "customer-name": "John Doe",
            "address": {
                "division": "Dhaka",
                "sub-division": "Dhaka South",
                "Area": "Gulshan",
                "Road/ Lane": "House 123, Road 10"
            },
            "contact": "01712345678",
            "orders": [
                {
                    "sku": "4",
                    "quantity": "1"
                },
                {
                    "sku": "5",
                    "quantity": "2"
                }
            ],
            "status": "shipped"
        },
        {
            "id": 1423534634312236,
            "customer-name": "Jane Smith",
            "address": {
                "division": "Sylhet",
                "sub-division": "Sylhet",
                "Area": "Zindabazar",
                "Road/ Lane": "Building 45, Main Road"
            },
            "contact": "01812345679",
            "orders": [
                {
                    "sku": "6",
                    "quantity": "5"
                },
                {
                    "sku": "7",
                    "quantity": "1"
                }
            ],
            "status": "done"
        },
        {
            "id": 1423534634312237,
            "customer-name": "Alice Johnson",
            "address": {
                "division": "Khulna",
                "sub-division": "Khulna",
                "Area": "Sonadanga",
                "Road/ Lane": "Sector 3, Block B"
            },
            "contact": "01912345680",
            "orders": [
                {
                    "sku": "8",
                    "quantity": "3"
                },
                {
                    "sku": "9",
                    "quantity": "4"
                },
                {
                    "sku": "10",
                    "quantity": "2"
                }
            ],
            "status": "cancel"
        }
    ]

    return (
        <div>
            <h1 className='text-4xl text-center'>CURRENTLY PROCESSING ORDERS LIST</h1>
            <ul className='text-2xl mt-10'>
                {orders && 
                    orders.map((order) => <li key={order.id} className='text-center p-4 border'><Link to={`order-details/${order.id}`}>Order no: {order.id}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default OrderList