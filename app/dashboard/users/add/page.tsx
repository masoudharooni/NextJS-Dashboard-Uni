"use client";
import { useState } from "react";
import MuiSelect from "@/components/MUI/muiSelect";
import MuiInput from "@/components/MUI/muiInput";
import RoleEnum from "@/contracts/enums/roles";

import MuiButton from "@/components/MUI/muiButton";

type TRoleOptions = {
    label: string;
    value: RoleEnum;
};

export default function AddUserPage() {
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [roleOptions, setRoleOptions] = useState<TRoleOptions[]>([
        { label: "User", value: 0 },
        { label: "Admin", value: 1 },
    ]);
    return (
        <div className="grid grid-cols-2 gap-5 p-3">
            <MuiInput
                label="Name"
                type="text"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <MuiInput
                label="Email"
                type="email"
                placeholder="Please enter a valid email address"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <MuiSelect
                label="Role"
                value={selectedRole}
                options={roleOptions}
                handleChange={(e) => setSelectedRole(e.target.value)}
            />
            <div className="col-span-full">
                <MuiButton color="success" variant="contained">
                    Submit
                </MuiButton>
                <MuiButton color="error" variant="contained">
                    Submit
                </MuiButton>
                <MuiButton color="primary" variant="contained">
                    Submit
                </MuiButton>
            </div>
        </div>
    );
}
