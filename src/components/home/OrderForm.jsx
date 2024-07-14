import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const OrderForm = () => {
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      products: [{ name: '', quantity: 1, unitPrice: 0, total: 0 }],
      subTotal: 0,
      shipping: 0,
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const watchProducts = watch("products");

  const calculateTotal = (index) => {
    const product = watchProducts[index];
    return product.quantity * product.unitPrice;
  };

  const calculateSubTotal = () => {
    return watchProducts.reduce((acc, product) => acc + (product.quantity * product.unitPrice), 0);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Order Details */}
        <div className="w-full p-4 border">
          <h2 className="text-2xl font-bold mb-4">Order Details</h2>
          
          <table className="table w-full mb-4">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>hello</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input 
                      type="text" 
                      {...register(`products.${index}.name`, { required: 'Product name is required' })} 
                      className="input input-bordered w-full" 
                    />
                    {errors.products?.[index]?.name && <p className="text-red-500">{errors.products[index].name.message}</p>}
                  </td>
                  <td>
                    <input 
                      type="number" 
                      {...register(`products.${index}.quantity`, { required: 'Quantity is required', min: 1 })} 
                      className="input input-bordered w-full" 
                    />
                    {errors.products?.[index]?.quantity && <p className="text-red-500">{errors.products[index].quantity.message}</p>}
                  </td>
                  <td>
                    <input 
                      type="number" 
                      {...register(`products.${index}.unitPrice`, { required: 'Unit price is required', min: 0 })} 
                      className="input input-bordered w-full" 
                    />
                    {errors.products?.[index]?.unitPrice && <p className="text-red-500">{errors.products[index].unitPrice.message}</p>}
                  </td>
                  <td>
                    {calculateTotal(index)}
                  </td>
                  <td>
                    <button type="button" className="btn btn-error btn-sm" onClick={() => remove(index)}>Remove</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5">
                  <button type="button" className="btn btn-secondary w-full" onClick={() => append({ name: '', quantity: 1, unitPrice: 0, total: 0 })}>
                    Add Product
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="subTotal">Sub Total</label>
            <input 
              type="number" 
              id="subTotal" 
              value={calculateSubTotal()} 
              readOnly 
              className="input input-bordered w-full" 
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="shipping">Shipping</label>
            <input 
              type="number" 
              id="shipping" 
              {...register('shipping', { required: 'Shipping cost is required', min: 0 })} 
              className="input input-bordered w-full" 
            />
            {errors.shipping && <p className="text-red-500">{errors.shipping.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="total">Total</label>
            <input 
              type="number" 
              id="total" 
              value={calculateSubTotal() + (watch("shipping") || 0)} 
              readOnly 
              className="input input-bordered w-full" 
            />
          </div>
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
