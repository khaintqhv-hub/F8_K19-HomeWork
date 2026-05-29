const API_URL = "https://fakestoreapi.com/products";
const productGrid = document.getElementById("productGrid"); 
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const productCount = document.getElementById("productCount");
const totalCount = document.getElementById("totalCount");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");

let products = [];
let selectedCategory = "all";
let cartNumber = 0;

// Hàm gọi API
async function fetchProducts() {
  try {
    loading.style.display = "block";
    errorBox.textContent = "";

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Không thể tải dữ liệu sản phẩm");
    }

    products = await response.json();
    totalCount.textContent = products.length;

    renderProducts(products);
    renderCategories();
  } catch (error) {
    errorBox.textContent = error.message;
  } finally {
    loading.style.display = "none";
  }
}

// Hàm hiển thị sản phẩm
function renderProducts(productList) {
  productGrid.innerHTML = "";
  productCount.textContent = `Hiển thị ${productList.length} sản phẩm`;

  if (productList.length === 0) {
    productGrid.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>";
    return;
  }

  productList.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <div class="category">${product.category}</div>
      <div class="image-box">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="product-title">${product.title}</div>
      <div class="rating">
        <span>${product.rating.rate} <i class="fa-solid fa-star"></i></span>
        <span>(${product.rating.count})</span>
      </div>
      <div class="card-footer">
        <div class="price">$${product.price}</div>
        <button class="add-cart-btn"><i class="fa-solid fa-cart-plus"></i></button>
      </div>
    `;

    // Thêm sự kiện click vào nút giỏ hàng
    const addButton = productCard.querySelector(".add-cart-btn");
    addButton.addEventListener("click", () => {
      cartNumber++;
      cartCount.textContent = cartNumber;
    });

    productGrid.appendChild(productCard);
  });
}

// Hàm tạo danh mục
function renderCategories() {
  const categoryMap = {};

  products.forEach((product) => {
    if (categoryMap[product.category]) {
      categoryMap[product.category]++;
    } else {
      categoryMap[product.category] = 1;
    }
  });

  categoryList.innerHTML = "";

  Object.keys(categoryMap).forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.dataset.category = category;

    button.innerHTML = `
      <span>${category}</span>
      <span>${categoryMap[category]}</span>
    `;

    button.addEventListener("click", () => {
      selectedCategory = category;
      updateActiveCategory(button);
      filterProducts();
    });

    categoryList.appendChild(button);
  });

  const allButton = document.querySelector('[data-category="all"]');
  allButton.addEventListener("click", () => {
    selectedCategory = "all";
    updateActiveCategory(allButton);
    filterProducts();
  });
}

// Cập nhật nút đang chọn
function updateActiveCategory(activeButton) {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

// Hàm lọc sản phẩm
function filterProducts() {
  const keyword = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchSearch = product.title.toLowerCase().includes(keyword);

    return matchCategory && matchSearch;
  });

  renderProducts(filteredProducts);
}

// Bắt sự kiện tìm kiếm
searchInput.addEventListener("input", filterProducts);

// Gọi API khi mở trang
fetchProducts();