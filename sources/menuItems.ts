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
    title: "pages",
    list: [
      {
        key: 1,
        title: "dashboard",
        path: "/dashboard",
        icon: MdDashboard,
      },
      {
        key: 2,
        title: "users",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        key: 3,
        title: "products",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        key: 4,
        title: "transactions",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ],
  },
  {
    key: 2,
    title: "analyze",
    list: [
      {
        key: 6,
        title: "income",
        path: "/dashboard/revenue",
        icon: MdWork,
      },
      {
        key: 7,
        title: "reports",
        path: "/dashboard/reports",
        icon: MdAnalytics,
      },
      {
        key: 8,
        title: "teams",
        path: "/dashboard/teams",
        icon: MdPeople,
      },
    ],
  },
  {
    key: 3,
    title: "user",
    list: [
      {
        key: 9,
        title: "settings",
        path: "/dashboard/settings",
        icon: MdOutlineSettings,
      },
      {
        key: 10,
        title: "help",
        path: "/dashboard/help",
        icon: MdHelpCenter,
      },
    ],
  },
];

export default menuItems;
