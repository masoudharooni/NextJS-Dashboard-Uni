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
    birthdate: "",
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
    birthdate: "2024-08-11",
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
    birthdate: ""
  },
];

export default usersSource;
