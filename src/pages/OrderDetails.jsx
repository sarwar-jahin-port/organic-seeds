import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/orders/id/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch order details");
                }
                const data = await response.json();
                setOrder(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, []);

    const handleStatusUpdate = async(new_status) =>{
        if(!confirm(`Status will be updated to ${new_status}`)) return;
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`http://localhost:3000/api/orders/${id}/status`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: new_status }), // Adjust the payload as needed
            });
      
            if (!response.ok) {
              throw new Error("Failed to update order status");
            }
      
            const data = await response.json();
            setOrder(data)
            toast.success("Order status updated successfully!");
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    console.log(order)
    return (
        <div>
            <h1 className='text-5xl text-center'>ORDER DETAILS</h1>
            {order && <div key={order?.data?._id} className='border p-4 flex flex-col justify-center items-center'>
                <h2 className='text-2xl max-w-fit border-b-2'>Order no: {order?.data?._id}</h2>
                <div className="detail text-xl flex flex-col gap-2">
                    <p>Customer Name: {order?.data?.customer_info?.name}</p>
                    <p>Division: {order?.data?.customer_info?.location[0]?.division}</p>
                    <p>Sub-division: {order?.data?.customer_info?.location[0]?.sub_division}</p>
                    <p>Area: {order?.data?.customer_info?.location[0]?.road_or_flat}</p>
                    <p>Phone: {order?.data?.customer_info?.phone}</p>
                </div>
                <div className="status mt-4">
                    <button onClick={()=>handleStatusUpdate('rts')} className={`rts btn ${order.data.status === "rts" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>RTS</button>
                    <button onClick={()=>handleStatusUpdate('shipped')} className={`shipped btn ${order.data.status === "shipped" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>SHIPPED</button>
                    <button onClick={()=>handleStatusUpdate('delivered')} className={`delivered btn ${order.data.status === "delivered" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>DELIVERED</button>
                    <button onClick={()=>handleStatusUpdate('cancelled')} className={`cancel btn ${order.data.status === "cancelled" ? "btn-success" : "btn-outline"} text-2xl mr-3`}>CANCELLED</button>
                </div>
            </div>}

        </div>
    )
}

export default OrderDetails