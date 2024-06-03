"use client";
import { useState } from "react";
import MuiSelect from "@/components/MUI/muiSelect";
import MuiInput from "@/components/MUI/muiInput";
import MuiButton from "@/components/MUI/muiButton";

type TFromData = {
    username: string;
    email: string;
    password: string;
    phone: string;
    isAdmin: boolean;
    isActive: boolean;
    address: string;
};

type InputChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;
export default function AddUserPage() {
    const [formData, setFormData] = useState<TFromData>({
        username: "",
        email: "",
        password: "",
        phone: "",
        isAdmin: true,
        isActive: true,
        address: "",
    });
    const changeHandler = (event: InputChangeEvent) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const isAdminOpitons = [
        { label: "Yes", value: true },
        { label: "No", value: false },
    ];
    return (
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 px-5 ">
            <MuiInput
                name="username"
                label="Username"
                type="text"
                placeholder="Please enter the Username"
                value={formData.username}
                onChange={changeHandler}
            />
            <MuiInput
                name="password"
                label="Password"
                type="password"
                placeholder="Please enter the password"
                value={formData.username}
                onChange={changeHandler}
            />
            <MuiInput
                name="email"
                label="Email"
                type="email"
                placeholder="Please enter the Email"
                value={formData.email}
                onChange={changeHandler}
            />
            <MuiInput
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="Please enter the Phone Number"
                value={formData.phone}
                onChange={changeHandler}
            />
            <MuiSelect
                name="isAdmin"
                label="Is admin?"
                value={formData.isAdmin}
                options={isAdminOpitons}
                onChange={changeHandler}
            />
            <MuiSelect
                name="isActive"
                label="Is active?"
                value={formData.isActive}
                options={isAdminOpitons}
                onChange={changeHandler}
            />
            <MuiInput
                className="col-span-2"
                multiline
                rows={5}
                name="address"
                label="Address"
                type="text"
                placeholder="Please enter an Adress for this user..."
                value={formData.address}
                onChange={changeHandler}
            />
            <div className="col-span-full">
                <MuiButton sx={{ width: "100%" }} color="success" variant="contained">
                    Add
                </MuiButton>
            </div>
        </div>
    );
}
