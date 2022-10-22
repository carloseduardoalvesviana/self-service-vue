Vue.createApp({
  data() {
    return {
      products: [
        {
          id: 1,
          photo: "img/big-mac.png",
          name: "Big Mac",
          price: 5.99,
          active: false,
          quantity: 1,
        },
        {
          id: 2,
          photo: "img/mc-chicken.png",
          name: "Mc Chicken",
          price: 4.99,
          active: false,
          quantity: 1,
        },
        {
          id: 3,
          photo: "img/double-cb.png",
          name: "Double Cheese Burger",
          price: 2.99,
          active: false,
          quantity: 1,
        },
        {
          id: 4,
          photo: "img/fries.png",
          name: "Batata frita",
          price: 2.99,
          active: false,
          quantity: 1,
        },
        {
          id: 5,
          photo: "img/nuggets.png",
          name: "Mc Nuggets",
          price: 3.49,
          active: false,
          quantity: 1,
        },
        {
          id: 6,
          photo: "img/salad.png",
          name: "Salada",
          price: 2.79,
          active: false,
          quantity: 1,
        },
      ],
      title: "Selecione os produtos",
      cart: [],
      totalCart: 0,
    };
  },

  methods: {
    increment(product) {
      product.quantity += 1;
      this.total();
    },
    decrement(product) {
      product.quantity -= 1;
      this.total();
    },
    select(product) {
      product.active = !product.active;

      if (product.active) {
        this.addToCart(product);
      }

      if (!product.active) {
        this.removeToCart(product);
      }
    },
    addToCart(product) {
      const result = this.cart.findIndex((p) => p.id === product.id);
      if (result < 0) {
        this.cart.push(product);
      }
      this.total();
    },
    removeToCart(product) {
      const result = this.cart.findIndex((p) => p.id === product.id);
      this.cart.splice(result, 1);
      this.total();
    },
    total() {
      let result = 0;
      this.cart.map((item) => {
        result += item.price * item.quantity;
      });
      this.totalCart = result.toFixed(2);
    },
  },
}).mount("#app");
