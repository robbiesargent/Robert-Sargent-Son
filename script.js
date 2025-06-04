
const products = [
  { name: "1 Pint Milk", price: 0.95 },
  { name: "1 Litre Milk", price: 1.30 },
  { name: "2 Litre Milk", price: 2.25 },
  { name: "1 Pint Orange Juice (Glass)", price: 1.35 },
  { name: "1 Litre Orange Juice", price: 1.80 },
  { name: "1 Litre Apple Juice", price: 1.80 },
  { name: "1 Pint Orange Juice", price: 1.25 },
  { name: "Alpro Oat No Sugar", price: 2.19 },
  { name: "Alpro Soya No Sugar", price: 2.19 },
  { name: "Barista Oat", price: 2.65 },
  { name: "800g Mega Thick White Bread", price: 1.70 },
  { name: "800g Medium White Bread", price: 1.70 },
  { name: "140g Yoghurt", price: 0.85 },
  { name: "1 Pint Semi Poly", price: 1.00 },
  { name: "1 Pint Organic Semi", price: 1.00 },
  { name: "500ml UHT Skim", price: 0.85 }
];

const productList = document.getElementById("product-list");
if (productList) {
  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = \`\${product.name} – £\${product.price.toFixed(2)} <br/>
    <button onclick="addToCart(\${index})">Add to Cart</button>\`;
    productList.appendChild(div);
  });
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function checkPostcode() {
  const input = document.getElementById("postcode").value.toLowerCase();
  const result = document.getElementById("result");
  const validAreas = ["crosby", "waterloo", "blundellsands", "l23"];

  if (validAreas.some(area => input.includes(area))) {
    result.textContent = "✅ We deliver to your area!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Sorry, we currently only deliver to Crosby, Waterloo, and Blundellsands.";
    result.style.color = "red";
  }
}
