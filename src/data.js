import React from "react";
import Assessment from "material-ui/svg-icons/action/assessment";
import GridOn from "material-ui/svg-icons/image/grid-on";
import PermIdentity from "material-ui/svg-icons/action/perm-identity";
import Web from "material-ui/svg-icons/av/web";
import { cyan600, pink600, purple600 } from "material-ui/styles/colors";
import ExpandLess from "material-ui/svg-icons/navigation/expand-less";
import ExpandMore from "material-ui/svg-icons/navigation/expand-more";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";

const data = {
  // [
  //    { “Vendor”:“Facebook”,
  //      “Impressions”: “2,343,958",
  //      “Clicks”: “2,758",
  //      “CTR”: “0.12%“,
  //      “CPC”: “$4.72",
  //      “CPM”: “$5.56",
  //      “50% VTR”: “NA”,
  //      “100%VTR”: “NA”,
  //      “Conversions”: “5",
  //      “Budget”: “$14,575.00",
  //      “YTD Spend”: “$13,025.40"
  //   },
  //    { “Vendor”:“Mobile Display/Geofence”,
  //      “Impressions”: “9,073,231",
  //      “Clicks”: “45,301",
  //      “CTR”: “0.50%“,
  //      “CPC”: “$1.00",
  //      “CPM”: “$5.00",
  //      “50% VTR”: “NA”,
  //      “100%VTR”: “NA”,
  //      “Conversions”: “167",
  //      “Budget”: “$42,700.00",
  //      “YTD Spend”: “$45,366.16"
  //   },
  //    { “Vendor”:“Pandora”,
  //      “Impressions”: “3,916,858",
  //      “Clicks”: “2,156",
  //      “CTR”: “0.06%“,
  //      “CPC”: “$32.70",
  //      “CPM”: “$18.00",
  //      “50% VTR”: “NA”,
  //      “100%VTR”: “NA”,
  //      “Conversions”: “NA”,
  //      “Budget”: “$73,528.37",
  //      “YTD Spend”: “$70,503.44"
  //   },
  //    { “Vendor”:“Grand Total”,
  //      “Impressions”: “15,334,047",
  //      “Clicks”: “50,215",
  //      “CTR”: “0.33%“,
  //      “CPC”: “$2.57",
  //      “CPM”: “$8.41",
  //      “50% VTR”: “NA”,
  //      “100%VTR”: “NA”,
  //      “Conversions”: “172",
  //      “Budget”: “$130,803.37",
  //      “YTD Spend”: “$128,895.00"
  //   }
  // ]
  menus: [
    { text: "DashBoard", icon: <Assessment />, link: "/dashboard" },
    { text: "Form Page", icon: <Web />, link: "/form" },
    { text: "Table Page", icon: <GridOn />, link: "/table" },
    { text: "Login Page", icon: <PermIdentity />, link: "/login" }
  ],
  tablePage: {
    items: [
      { id: 1, name: "Product 1", price: "$50.00", category: "Category 1" },
      { id: 2, name: "Product 2", price: "$150.00", category: "Category 2" },
      { id: 3, name: "Product 3", price: "$250.00", category: "Category 3" },
      { id: 4, name: "Product 4", price: "$70.00", category: "Category 4" },
      { id: 5, name: "Product 5", price: "$450.00", category: "Category 5" },
      { id: 6, name: "Product 6", price: "$950.00", category: "Category 6" },
      { id: 7, name: "Product 7", price: "$550.00", category: "Category 7" },
      { id: 8, name: "Product 8", price: "$750.00", category: "Category 8" }
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: "Samsung TV",
        text: "Samsung 32 1080p 60Hz LED Smart HDTV."
      },
      { id: 2, title: "Playstation 4", text: "PlayStation 3 500 GB System" },
      {
        id: 3,
        title: "Apple iPhone 6",
        text: "Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G "
      },
      {
        id: 4,
        title: "Apple MacBook",
        text: "Apple MacBook Pro MD101LL/A 13.3-Inch Laptop"
      }
    ],
    monthlySales: [
      { name: "Jan", uv: 3700 },
      { name: "Feb", uv: 3000 },
      { name: "Mar", uv: 2000 },
      { name: "Apr", uv: 2780 },
      { name: "May", uv: 2000 },
      { name: "Jun", uv: 1800 },
      { name: "Jul", uv: 2600 },
      { name: "Aug", uv: 2900 },
      { name: "Sep", uv: 3500 },
      { name: "Oct", uv: 3000 },
      { name: "Nov", uv: 2400 },
      { name: "Dec", uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    Impressions: [
      {
        name: "Facebook",
        value: 9073231,
        color: cyan600,
        icon: <ExpandMore />
      },
      {
        name: "Mobile Display/Geofence",
        value: 2343958,
        color: pink600,
        icon: <ChevronRight />
      },
      {
        name: "Pandora",
        value: 3916858,
        color: purple600,
        icon: <ExpandLess />
      }
    ]
  }
};

export default data;
