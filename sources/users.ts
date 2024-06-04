import UserType from "@/contracts/types/userType";

const usersSource: UserType[] = [
  {
    id: 0,
    username: "Masoud Harooni",
    password: "123",
    email: "masoudharooni@gmail.com",
    phone: "09133122731",
    role: true,
    status: true,
    address: "iran",
  },
  {
    id: 1,
    username: "Masoud Harooni2",
    password: "123",
    email: "masoudharooni@gmail.com2",
    phone: "09133122731",
    role: true,
    status: false,
    address: "iran",
  },
  {
    id: 2,
    username: "Masoud Haroon3",
    password: "123",
    email: "masoudharooni@gmail.co3",
    phone: "09133122731",
    role: true,
    status: true,
    address: "iran",
  },
];

export default usersSource;
