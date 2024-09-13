import React from 'react'

const AllOrders = () => {
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
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Division</th>
            <th>Sub-Division</th>
            <th>Area</th>
            <th>Road/Lane</th>
            <th>Contact</th>
            <th>Orders</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order['customer-name']}</td>
              <td>{order.address.division}</td>
              <td>{order.address['sub-division']}</td>
              <td>{order.address.Area}</td>
              <td>{order.address['Road/ Lane']}</td>
              <td>{order.contact}</td>
              <td>
                {order.orders.map((item, index) => (
                  <div key={index}>
                    SKU: {item.sku}, Qty: {item.quantity}
                  </div>
                ))}
              </td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllOrders