"use client";
import MuiButton from "@/components/MUI/muiButton";
import MuiInput from "@/components/MUI/muiInput";
import MuiSelect from "@/components/MUI/muiSelect";
import Image from "next/image";
import { useState } from "react";

type TFromData = {
    id: number;
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

export default function UserSinglePage() {
    const [formData, setFormData] = useState<TFromData>({
        id: 0,
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
        <div className="flex gap-12 mt-5">
            <div className="flex-1 flex flex-col items-center gap-y-3 h-fit dark:bg-bgSoft bg-bgSoftLight p-5 rounded-xl font-bold dark:text-textSoft text-textLight max-h-max">
                <div className="w-full h-[200px] aspect-square mt-5 flex items-center justify-center">
                    <Image src={"/noavatar.png"} alt="avatar" className="rounded-xl" width={200} height={200} />
                </div>
                <span>
                    Masoud harooni
                </span>
            </div>
            <div className="flex-[3] grid grid-cols-2 gap-5 dark:bg-bgSoft bg-bgSoftLight p-5 rounded-xl">
                <MuiInput
                    name="id"
                    label="id"
                    sx={{
                        display: "none",
                    }}
                    placeholder="Please enter the Username"
                    value={formData.id}
                    onChange={changeHandler}
                    disabled
                />
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
                    className="col-span-full"
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
                        Update
                    </MuiButton>
                </div>
            </div>
        </div>
    );
}
