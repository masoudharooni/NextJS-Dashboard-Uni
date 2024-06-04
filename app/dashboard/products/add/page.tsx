"use client";
import { useState } from "react";
import MuiSelect from "@/components/MUI/muiSelect";
import MuiInput from "@/components/MUI/muiInput";
import MuiButton from "@/components/MUI/muiButton";

type TFromData = {
    title: string;
    category: string;
    price: number;
    stock: number;
    color: string;
    size: string;
    description: string;
};

type InputChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;
export default function AddProductPage() {
    const [formData, setFormData] = useState<TFromData>({
        title: "",
        category: "",
        price: 0,
        stock: 0,
        color: "",
        size: "",
        description: "",
    });
    const changeHandler = (event: InputChangeEvent) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const categoryOpitons = [
        { label: "Electronical", value: 1 },
        { label: "Medical", value: 2 },
        { label: "Chemestry", value: 3 },
    ];
    return (
        <div className="grid grid-cols-2 gap-5 p-3">
            <MuiInput
                name="title"
                label="Title"
                type="text"
                placeholder="Please enter the product title"
                value={formData.title}
                onChange={changeHandler}
            />
            <MuiSelect
                name="category"
                label="Category"
                value={formData.category}
                options={categoryOpitons}
                onChange={changeHandler}
            />
            <MuiInput
                name="price"
                label="Price"
                type="number"
                inputProps={{
                    min: 0,
                }}
                placeholder="Please enter the product price"
                value={formData.price}
                onChange={changeHandler}
            />
            <MuiInput
                inputProps={{
                    min: 0,
                }}
                name="stock"
                label="Stock"
                type="number"
                placeholder="Please enter the product stock"
                value={formData.stock}
                onChange={changeHandler}
            />
            <MuiInput
                name="color"
                label="Color"
                type="color"
                placeholder="Please enter the product color"
                value={formData.color}
                onChange={changeHandler}
            />
            <MuiSelect
                name="size"
                label="Size"
                value={formData.size}
                options={[
                    { label: "Extra Small", value: "Extra Small" },
                    { label: "Small", value: "Small" },
                    { label: "Large", value: "Large" },
                    { label: "Extra large", value: "Extra large" },
                ]}
                onChange={changeHandler}
            />
            <MuiInput
                className="col-span-full"
                multiline
                rows={5}
                name="description"
                label="Description"
                type="text"
                placeholder="Please enter something about the product..."
                value={formData.description}
                onChange={changeHandler}
            />
            <div className="col-span-full">
                <MuiButton sx={{ width: "100%" }} color="success" variant="contained">
                    Submit
                </MuiButton>
            </div>
        </div>
    );
}
