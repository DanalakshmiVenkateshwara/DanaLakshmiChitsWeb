const Store = [
  {
    action: "updateuser",
    state: {
      user: { name: "", email: "", Id: 0,phone:"",socketId:"",lastBidconnectionId:"", isAdmin: false},
    },
    features: {
      persist: true,
    },
  },
];

export default Store;
