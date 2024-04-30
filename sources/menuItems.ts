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
    title: "صفحات",
    list: [
      {
        key: 1,
        title: "داشبورد",
        path: "/dashboard",
        icon: MdDashboard,
      },
      {
        key: 2,
        title: "کاربران",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        key: 3,
        title: "محصولات",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        key: 4,
        title: "معاملات",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ],
  },
  {
    key: 2,
    title: "تجزیه‌وتحلیل",
    list: [
      {
        key: 6,
        title: "درآمد",
        path: "/dashboard/revenue",
        icon: MdWork,
      },
      {
        key: 7,
        title: "گزارشات",
        path: "/dashboard/reports",
        icon: MdAnalytics,
      },
      {
        key: 8,
        title: "گروه‌ها",
        path: "/dashboard/teams",
        icon: MdPeople,
      },
    ],
  },
  {
    key: 3,
    title: "کاربر",
    list: [
      {
        key: 9,
        title: "تنظیمات",
        path: "/dashboard/settings",
        icon: MdOutlineSettings,
      },
      {
        key: 10,
        title: "پشتیبانی",
        path: "/dashboard/help",
        icon: MdHelpCenter,
      },
    ],
  },
];

export default menuItems;
