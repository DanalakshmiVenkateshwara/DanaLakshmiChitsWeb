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
  {
    action: "updateauction",
    state: {
      auction: { currentAuctionId: 0, userId: 0, groupId: 0,noOfMembers:0,auctionDate:"",groupValue:0, auctionAmount: 0, auctionMonth: 0},
    },
    features: {
      persist: false,
    },
  },
];

export default Store;
