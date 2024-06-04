import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
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
    ],
  },
  {
    key: 3,
    title: "Support",
    list: [
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
