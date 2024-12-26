import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderList = () => {
    const navigate = useNavigate();
    const [rtsOrders, setRtsOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiUrl = "http://localhost:3000/api/orders/rts";

    async function fetchOrders() {
        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setRtsOrders(data)
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchOrders();
    }, [])

    const handleOrderClick = (id) =>{
        navigate(`/jahin/orders/id/${id}`)
    }

    console.log(rtsOrders)
    return (
        <div>
            {loading ? <div>Loading Orders...</div>
                : rtsOrders.length === 0 ? <div>No orders available.</div>
                    : <><h1 className='text-4xl text-center'>NEW ORDERS LIST</h1>
                        <ul className='text-2xl mt-10'>
                            {rtsOrders &&
                                rtsOrders?.data.map((order) => 
                                <li 
                                    key={order._id} className='text-center p-4 border hover:font-bold'
                                    onClick={()=>handleOrderClick(order._id)}
                                    >Order no: {order._id}</li>)
                            }
                        </ul></>}
        </div>
    )
}

export default OrderList