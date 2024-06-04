"use client";
import { FormEvent, useEffect, useState } from "react";
import MuiSelect from "@/components/MUI/muiSelect";
import MuiInput from "@/components/MUI/muiInput";
import MuiButton from "@/components/MUI/muiButton";
import ProductType from "@/contracts/types/productType";
import AgGridComponent from "@/components/dashboard/grid";

import productsSource from "@/sources/products";
import productEnumCategories from "@/contracts/enums/productCategories";
import productEnumSize from "@/contracts/enums/productSize";

type InputChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;
export default function AddProductPage() {
    const initialFormData = {
        title: "",
        category: 0,
        price: 0,
        stock: 0,
        color: "",
        size: 0,
        description: "",
    };
    const [formData, setFormData] =
        useState<Omit<ProductType, "id">>(initialFormData);
    const changeHandler = (event: InputChangeEvent) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const categoryOpitons = [
        { label: "Electronical", value: productEnumCategories.Electronical },
        { label: "Medical", value: productEnumCategories.Medical },
        { label: "Chemestry", value: productEnumCategories.Chemestry },
    ];
    const sizeOptions = [
        { label: "Extra Small", value: productEnumSize.ExtraSmall },
        { label: "Small", value: productEnumSize.Small },
        { label: "Large", value: productEnumSize.Large },
        { label: "Extra large", value: productEnumSize.ExtraLarge },
    ];
    const [rows, setRows] = useState<ProductType[]>([]);
    const [productId, setProductId] = useState<null | number>(null);
    useEffect(() => {
        setRows(productsSource);
    }, []);
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (productId === null) {
            const data: ProductType = {
                id: productsSource.length,
                title: formData.title,
                category: formData.category,
                price: formData.price,
                stock: formData.stock,
                color: formData.color,
                size: formData.size,
                description: formData.description,
            };
            setRows((prev) => [...prev, data]);
            setFormData(initialFormData);
            setProductId(null);
        } else {
            const data = {
                title: formData.title,
                category: formData.category,
                price: formData.price,
                stock: formData.stock,
                color: formData.color,
                size: formData.size,
                description: formData.description,
            };
            setRows((prev) =>
                prev.map((item) =>
                    item.id === productId ? { ...item, ...data } : item
                )
            );
            setFormData(initialFormData);
            setProductId(null);
        }
    };
    return (
        <>
            <form onSubmit={submitHandler} className="grid grid-cols-2 gap-5 p-3">
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
                    options={sizeOptions}
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
                <div className="col-span-full mb-10">
                    <MuiButton
                        type="submit"
                        sx={{ width: "100%" }}
                        color="success"
                        variant="contained"
                    >
                        {productId === null ? "Add" : "update"}
                    </MuiButton>
                </div>
            </form>
            <div className="mt-5 px-5">
                <AgGridComponent columnDefs={productColDefs} rowData={rows} />
            </div>
        </>
    );
}
