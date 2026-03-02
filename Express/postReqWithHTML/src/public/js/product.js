const onSubmitHandler = (event) => {
  event.preventDefault();
  console.log("Submit functiion called");

  const product = event.target.productName.value;
  // console.log(product);

  const obj = {
    productName: product,
  };

  axios
    .post("http://localhost:3000/api/products", obj)
    .then((result) => {
      console.log(result.data.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
