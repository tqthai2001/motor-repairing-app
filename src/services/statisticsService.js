import axios from "axios";
import { menuAPI } from "../constants/const";
import { GroupBy } from "../pages/Statistics/filter/GroupByFilter";
import { getAuthorizationHeader } from "./axiosClient";

export const statisticsService = {
  revenueByDay: function (startDate, endDate) {
    return axios.get(`${menuAPI.statistics}/revenue/${GroupBy.DAY_FILTER}?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  revenueByMonth: function (startDate, endDate) {
    return axios.get(
      `${menuAPI.statistics}/revenue/${GroupBy.MONTH_FILTER}?startDate=${startDate}&endDate=${endDate}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: getAuthorizationHeader(),
        },
      }
    );
  },
  topMechanicByDateRange: function (startDate, endDate, top) {
    return axios.get(`${menuAPI.statistics}/mechanic/top?startDate=${startDate}&endDate=${endDate}&top=${top}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  calTicketMechanic: function (startDate, endDate) {
    return axios.get(`${menuAPI.statistics}/mechanic/tickets?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  topProduct: function (startDate, endDate, top) {
    return axios.get(`${menuAPI.statistics}/product/used?startDate=${startDate}&endDate=${endDate}&top=${top}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  topService: function (startDate, endDate, top) {
    return axios.get(`${menuAPI.statistics}/service/used?startDate=${startDate}&endDate=${endDate}&top=${top}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  topCustomer: function (top) {
    return axios.get(`${menuAPI.statistics}/customer/top?top=${top}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  newCustomerByDate: function (startDate, endDate) {
    return axios.get(`${menuAPI.statistics}/customer/new/day?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
  newCustomerByMonth: function (startDate, endDate) {
    return axios.get(`${menuAPI.statistics}/customer/new/month?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        "content-type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
    });
  },
};
