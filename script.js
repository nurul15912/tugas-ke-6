// Data produk dari array `items`
const items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpeg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg']
  ];
  
  const cart = [];
  let cartCount = 0;
  
  // Fungsi untuk menampilkan produk berdasarkan data yang diberikan
  function displayProducts(filteredItems = items) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Kosongkan produk yang ada
  
    filteredItems.forEach(item => {
      const [id, name, price, description, image] = item;
  
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-4");
  
      productCard.innerHTML = `
        <div class="card mb-4">
          <img src="images/${image}" class="card-img-top" alt="${name}">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">Harga: Rp${price}</p>
            <button onclick="addToCart('${id}')" class="btn btn-primary">Tambah ke Keranjang</button>
          </div>
        </div>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Fungsi untuk menambahkan produk ke keranjang
  function addToCart(productId) {
    const product = items.find(item => item[0] === productId);
    if (product) {
      cart.push(product);
      displayCart();
      updateCartCount(); // Update jumlah item di ikon keranjang
    }
  }
  
  // Fungsi untuk memperbarui jumlah item di ikon keranjang
  function updateCartCount() {
    cartCount += 1;
    document.getElementById("cart-count").textContent = cartCount;
  }
  
  // Menampilkan keranjang belanja dan total harga
  function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
  
    let totalPrice = 0;
    cart.forEach(item => {
      const [, name, price] = item;
      totalPrice += price;
  
      const cartItem = document.createElement("li");
      cartItem.classList.add("list-group-item");
      cartItem.textContent = `${name} - Rp${price}`;
      cartList.appendChild(cartItem);
    });
  
    document.getElementById("total-price").textContent = `Total Harga: Rp${totalPrice}`;
  }
  
  // Event Listener untuk pencarian produk
  document.getElementById("formItem").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari reload halaman
  
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    // Filter item berdasarkan nama yang mengandung kata kunci pencarian
    const filteredItems = items.filter(item => item[1].toLowerCase().includes(searchInput));
  
    // Tampilkan hasil pencarian
    displayProducts(filteredItems);
  });
  
  // Inisialisasi halaman dengan semua produk
  displayProducts();
  