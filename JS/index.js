// show products details
const showProductDetails = (details) => {
  //   console.log(details);

  const {
    title,
    price,
    category,
    image,
    description,
    rating: { rate, count },
  } = details;

  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
         

  <div class="p-4">

      <div class="flex items-center justify-between">
          <div class="p-1 px-2 bg-gray-200 rounded-2xl"><span class="text-sm text-blue-600">${category}</span></div>
          <span class="text-sm text-gray-500"><i class="text-yellow-400 fa-solid fa-star"></i> ${rate} (${count})</span>
      </div>

  <h2 class="text-lg font-semibold my-4">${title}</h2>

  <p class="text-sm text-gray-500 my-5">${description}</p>

  <h2 class="text-xl font-bold">$${price}</h2>

  <div class="flex items-center justify-between mt-5">

      <button onclick="" class="btn w-2/5 text-gray-500 hover:bg-blue-900 hover:text-white"><i class="fa-solid fa-bag-shopping"></i> Buy Now</button>

      <button class="btn w-2/5 bg-blue-600 text-gray-200 hover:bg-blue-900 "><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>

  </div>
  </div>
  `;

  // open modal
  console.log("Opening modal...");
  document.getElementById("my_modal_5").showModal();
  console.log("Modal opened");
};

// load product details in modal
const loadProductDetails = (product) => {
  fetch(`https://fakestoreapi.com/products/${product}`)
    .then((res) => res.json())
    .then((data) => showProductDetails(data));
};

// show products on UI
const showProducts = (products) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  products.forEach((product) => {
    // console.log(product);
    const {
      title,
      price,
      category,
      image,
      description,
      rating: { rate, count },
    } = product;
    const card = document.createElement("div");
    card.classList.add("rounded", "shadow-lg");
    card.innerHTML = `
        <div class="p-5 bg-gray-200 rounded-t-lg">
            <div class="h-[350px] overflow-hidden rounded-lg flex items-center justify-center">
                <img class="h-80 w-80" src="${image}" />
            </div>
        </div>

        <div class="p-4">

            <div class="flex items-center justify-between">
                <div class="p-1 px-2 bg-gray-200 rounded-2xl"><span class="text-sm text-blue-600">${category}</span></div>
                <span class="text-sm text-gray-500"><i class="text-yellow-400 fa-solid fa-star"></i> ${rate} (${count})</span>
            </div>

        <h2 class="text-lg font-semibold truncate my-4">${title}</h2>

        <h2 class="text-xl font-bold">$${price}</h2>

        <div class="flex items-center justify-between mt-5">
            <button onclick="loadProductDetails(${product.id})" class="btn w-2/5 text-gray-500 hover:bg-blue-900 hover:text-white"><i class="fa-regular fa-eye"></i> Details</button>
            <button class="btn w-2/5 bg-blue-600 text-gray-200 hover:bg-blue-900 "><i class="fa-solid fa-cart-shopping"></i> Add</button>
        </div>
        </div>
        `;
    cardContainer.appendChild(card);
  });
};

// trending 3 products
const loadTrendingProducts = (products) => {
  // console.log(products);

  // get first 3 products
  const hightRatedProducts = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);
  showProducts(hightRatedProducts);
};

// load all products
const loadAllProducts = async () => {
    loader(true);
  removeActiveFromCategory();
  document.getElementById("all-btn").classList.add("bg-blue-600", "text-white");
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // console.log(data)
    loadTrendingProducts(data);
    showProductsByCategory(data);
  } catch (error) {
    console.error("API থেকে কোন ত্রুটি হয়েছে:", error);
  }
    finally{
        loader(false);
    }
};

loadAllProducts();
