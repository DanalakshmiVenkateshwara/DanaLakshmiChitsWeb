const Store = [
  {
    action: "updateuser",
    state: {
      user: { name: "", email: "", Id:0,isAdmin: true },
    },
    features: {
      persist: false,
    }
  },
];

export default Store;
