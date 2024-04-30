import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";

const menuItems = [
  {
    key: 1,
    title: "Pages",
    list: [
      {
        key: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard,
      },
      {
        key: 2,
        title: "Users",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        key: 3,
        title: "Products",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        key: 4,
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ],
  },
  {
    key: 2,
    title: "Analytics",
    list: [
      {
        key: 6,
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: MdWork,
      },
      {
        key: 7,
        title: "Reports",
        path: "/dashboard/reports",
        icon: MdAnalytics,
      },
      {
        key: 8,
        title: "Teams",
        path: "/dashboard/teams",
        icon: MdPeople,
      },
    ],
  },
  {
    key: 3,
    title: "User",
    list: [
      {
        key: 9,
        title: "Settings",
        path: "/dashboard/settings",
        icon: MdOutlineSettings,
      },
      {
        key: 10,
        title: "Help",
        path: "/dashboard/help",
        icon: MdHelpCenter,
      },
    ],
  },
];

export default menuItems;
