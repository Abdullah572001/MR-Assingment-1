
// show products by category on UI
const showProductsByCategory = (products) => {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = "";

    products.forEach((product) => {
    // console.log(product);
    const {
      title,
      price,
      category,
      image,
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
    productsContainer.appendChild(card);
  });
}

// load products by category
const loadProductsByCategory = async (category, btnId) => {
    removeActiveFromCategory();
    document.getElementById(btnId).classList.add('bg-blue-600', 'text-white');
    try{
        // const encodedCategory = encodeURIComponent(category);
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        // console.log(data);
        showProductsByCategory(data);
    }
    catch(error){
        console.log("API থেকে কোন ত্রুটি হয়েছে:", error);
    }
}


// show all categories
const showCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');

    categories.forEach((category, index) => {
        const btnId = `btn-${index}`;

      const btn = document.createElement('button');
      btn.id = btnId;
      btn.classList.add('btn','rounded-3xl', 'text-gray-500', 'hover:bg-blue-600', 'hover:text-white','category-btn');
      btn.setAttribute('onclick', `loadProductsByCategory("${category}", "${btnId}")`);
        btn.innerText = category;
        categoryContainer.appendChild(btn);
    });
}

// load all categories
const loadAllCategories = async (btnName) => {
    
    
    try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        // console.log(data);
        showCategories(data);
    }
    catch (error) {
        console.log("API থেকে কোন ত্রুটি হয়েছে:", error);
    }
    finally{
        
    }
}

loadAllCategories();