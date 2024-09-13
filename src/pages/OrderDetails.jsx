import React from 'react'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
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
    const { id } = useParams();
    return (
        <div>
            <h1 className='text-5xl text-center'>ORDER DETAILS</h1>
            {orders && 
                orders.map(order => order.id==id ? (<div key={order.id} className='border p-4 flex flex-col justify-center items-center'>
                    <h2 className='text-2xl max-w-fit border-b-2'>Order no: {order.id}</h2>
                    <div className="detail text-xl flex flex-col gap-2">
                        <p>Customer Name: {order['customer-name']}</p>
                        <p>Division: {order?.address?.['division']}</p>
                        <p>Sub-division: {order?.address?.['sub-division']}</p>
                        <p>Area: {order?.address?.['Road/ Lane']}</p>
                        <p>Phone: {order['contact']}</p>
                    </div>
                    <div className="status mt-4">
                        <button className={`rts btn ${order.status==="rts" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>RTS</button>
                        <button className={`shipped btn ${order.status==="shipped" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>SHIPPED</button>
                        <button className={`done btn ${order.status==="done" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>DONE</button>
                        <button className={`cancel btn ${order.status==="cancel" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>CANCEL</button>
                    </div>
                </div>) : "")
            }
            
        </div>
    )
}

export default OrderDetails