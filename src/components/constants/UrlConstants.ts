import React from "react";

export default function UrlConstants() {

  // Users Apis
  const GET_ALL_CHIT_PLANS = "/User/GetAllChitPlans";
  const GET_USER_PROFILE = "/User/GetUserprofile";
  const USER_ACCOUNT_COPY = "/User/GetUserAcCopy";
  
  // Admin Apis
  const ADD_CHIT_PLANS = "/Admin/AddChitPlan";
  const GET_ADMIN_PROFILE = "/Admin/GetAdminProfile";
  const ADD_APP_USERS = "/Admin/AddAppUsers";
  const GET_APP_USERS = "/Admin/GetAppUsers";
  const ENROLLMENT = "/Admin/EnrollMent";
  const GET_ENROLLMENT = "/Admin/GetEnrollMents";
  const USERREGISTRATION= "/Admin/UserRegistration";
  const GET_USERS = "/Admin/GetUsers";
  const USER_PAYMENTS = "/Admin/UserPayment";
  const USER_OUTSTANDINGS = "/Admin/UserOutStandings";
  const ADD_AUCTION_DETAILS = "/Admin/AddAuctionDetails";
  const ADD_AUCTION_DETAILS_BY_GROUP = "/Admin/AuctionDetailsByGroup";
  
  return {
    GET_ALL_CHIT_PLANS,
    GET_USER_PROFILE,
    USER_ACCOUNT_COPY,
    ADD_CHIT_PLANS,
    GET_ADMIN_PROFILE,
    ADD_APP_USERS,
    GET_APP_USERS,
    ENROLLMENT,
    GET_ENROLLMENT,
    USERREGISTRATION,
    GET_USERS,
    USER_PAYMENTS,
    USER_OUTSTANDINGS,
    ADD_AUCTION_DETAILS,
    ADD_AUCTION_DETAILS_BY_GROUP
  };
}
