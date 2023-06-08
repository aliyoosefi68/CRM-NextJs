import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (e, index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

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
            onChange={(e) => changHandler(e, index)}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={product.price}
              onChange={(e) => changHandler(e, index)}
            />
            <FormInput
              name="qty"
              label="Qty"
              type="text"
              value={product.qty}
              onChange={(e) => changHandler(e, index)}
            />
          </div>
          <button onClick={(e) => deleteHandler(e, index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
