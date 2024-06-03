'use client'
import { useState } from "react";
import MuiSelect from "@/components/MUI/muiSelect";

export default function AddUserPage() {
    const [age, setAge] = useState("");
    return (
        <div className="grid grid-cols-10">
            <MuiSelect
                label="سن"
                value={age}
                options={[{ label: 1, value: 1 }]}
                handleChange={(e) => setAge(e.target.value)}
            />
        </div>
    );
}
