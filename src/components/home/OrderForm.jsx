import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { calculateTotal, deleteMonthlyItem, getCart, setQuantityOne, updateMonthlyItem } from '../../utilities/cart';
import toast from 'react-hot-toast';

const OrderForm = ({isChange}) => {
  const [subTotal, setSubTotal] = useState(calculateTotal());
  const [cart, setCart] = useState(getCart());
  
  // console.log("monthly: ", monthly);
  const monthlyProducts = cart.monthlyProducts;
  const products = cart.product;
  // console.log(monthlyProducts, products);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // const { monthly } = getCart();

  const defaultValues = monthlyProducts.reduce((acc, m)=>{
    acc[`quantity${m.item}`] = 1;
    acc[`total${m.item}`] = 150;
    return acc;
  }, {});

  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm({defaultValues,});
  // console.log("quantity0", watch("quantity0"));
  // console.log("quantity1", watch("quantity1"));
  // console.log("quantity2", watch("quantity2"));

  console.log("total0", watch("total0"));
  // console.log("total1", watch("total1"));
  // console.log("total2", watch("total2"));

  const handleQuantityChange = (m, index) => {
    const quantity = watch(`quantity${index}`);
    updateMonthlyItem(m.pack, quantity);
    const total = quantity * 150;
    setValue(`total${index}`, total);
    setSubTotal(calculateTotal());
  };

  const handleMonthlyDelete = (item) =>{
    deleteMonthlyItem(item);
    setCart(getCart());
  }

  useEffect(()=>{},[cart]);

  const onSubmit = async data => {
    console.log(cart);
    const order = {
      order_creation_date: new Date(),
      skus: [
        ...cart.monthlyProducts.map((item, index) => ({
          product_type: 'monthly',
          product_name: item.pack,
          product_name_second: item.pack,
          quantity: document.getElementById(`quantity${index}`).value,
        })),
        ...cart.products.map(item =>({
          product_type: 'regular',
          product_name: item.pack,
          product_name_second: item.pack,
          quantity: item.quantity
        }))
      ],
      customer_info: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: [
          {
            division: data.division,
            sub_division: data.subDivision,
            road_or_flat: data.roadFlat,
          }
        ]
      }
    }
    console.log(order);
    try {
      const response = await fetch("http://localhost:3000/api/create-order", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      const result = await response.json();
      console.log("Order created successfully: ", result);
      toast.success("Order created successfully");
    } catch (error) {
      toast.error("Failed to create an order");
      console.log("Failed to create an order: ", error);
    }
  };
  useEffect(()=>{
    setQuantityOne();
    setSubTotal(calculateTotal());
  }, [cart])

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-5xl text-center mb-2'>Order Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Customer Information */}
        <div className="w-full p-4 border">
          <h2 className="text-2xl font-bold mb-4">Customer Information</h2>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="input input-bordered w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              {...register('phone', { required: 'Phone number is required' })}
              className="input input-bordered w-full"
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email (optional)</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="division">Division</label>
            <input
              type="text"
              id="division"
              {...register('division', { required: 'Division is required' })}
              className="input input-bordered w-full"
            />
            {errors.division && <p className="text-red-500">{errors.division.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="subDivision">Sub Division</label>
            <input
              type="text"
              id="subDivision"
              {...register('subDivision', { required: 'Sub Division is required' })}
              className="input input-bordered w-full"
            />
            {errors.subDivision && <p className="text-red-500">{errors.subDivision.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="roadFlat">Road or Flat No.</label>
            <input
              type="text"
              id="roadFlat"
              {...register('roadFlat', { required: 'Road or Flat No. is required' })}
              className="input input-bordered w-full"
            />
            {errors.roadFlat && <p className="text-red-500">{errors.roadFlat.message}</p>}
          </div>
        </div>
        <div className="w-full p-4 border">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {monthlyProducts.map((m, mIndex) => <tr key={mIndex}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold" {...register(`name${mIndex}`)}>{`${m.pack} pack`}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <input 
                    className='border' 
                    type="number" 
                    name={`quantity${mIndex}`}
                    id={`quantity${mIndex}`} 
                    defaultValue={1} 
                    min={1} 
                    max={5}
                    {...register(`quantity${mIndex}`, {onChange: () => handleQuantityChange(m, mIndex)})}/>
                </td>
                <td>150 tk</td>
                <td>
                  <input 
                    className='bg-transparent'
                    type="number" 
                    {...register(`total${mIndex}`)}
                    defaultValue={150}
                    value={watch(`total${mIndex}`)}
                    disabled
                    />tk
                </td>
                <th>
                  <button type='button' className="btn btn-ghost btn-xs" onClick={()=>handleMonthlyDelete(m)}>Delete</button>
                </th>
              </tr>)}
              <tr>
                <td></td>
                <td className='font-bold'>SUB TOTAL</td>
                <td></td>
                <td></td>
                <td className='font-bold text-end'>
                  <p {...register("subTotal")}>Product Total: {subTotal} tk</p>
                  <p>Delivery Charge: 80 tk</p>
                  <hr />
                  {`Sub Total: ${subTotal+80} tk`}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="w-full p-4">
          <button type="submit" className="btn btn-primary w-full">Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
