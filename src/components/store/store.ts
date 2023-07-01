const Store = [
  {
    action: "updateuser",
    state: {
      user: { name: "", email: "", Id: 0, isAdmin: false },
    },
    features: {
      persist: false,
    },
  },
];

export default Store;
