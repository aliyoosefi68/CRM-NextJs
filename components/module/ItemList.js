import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <div className="form-input__list" key={index}>
          <FormInput
            name="name"
            label="Product Name"
            type="text"
            value={product.name}
            onChange={changHandler}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={product.price}
              onChange={changHandler}
            />
            <FormInput
              name="qty"
              label="Qty"
              type="text"
              value={product.qty}
              onChange={changHandler}
            />
          </div>
          <button onClick={deleteHandler}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
