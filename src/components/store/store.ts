const Store = [
  {
    action: "updateuser",
    state: {
      user: { name: "", email: "", Id: 0, isAdmin: false,userName:""},
    },
    features: {
      persist: true,
    },
  },
];

export default Store;
