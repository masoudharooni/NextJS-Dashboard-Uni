"use client";
import Link from "next/link";
import MuiButton from "@/components/MUI/muiButton";
import { CustomCellRendererProps } from "ag-grid-react";
import productEnumSize from "@/contracts/enums/productSize";
import productEnumCategories from "@/contracts/enums/productCategories";
import ProductType from "@/contracts/types/productType";
import { FormEvent, useEffect, useState } from "react";
import productsSource from "@/sources/products";
import AgGridComponent from "@/components/dashboard/grid";
import MuiInput from "@/components/MUI/muiInput";
import MuiSelect from "@/components/MUI/muiSelect";
import MuiConfrimAlert from "@/components/MUI/muiConfirmAlert";

const ColorCellComponent = (value: CustomCellRendererProps) => {
    return (
        <div
            style={{ backgroundColor: value.data.color }}
            className="w-full h-full"
        ></div>
    );
};
const SizeCellComponent = (value: CustomCellRendererProps) => {
    return (
        <div className="w-full h-full flex items-center">
            {productEnumSize[value.data.size]}
        </div>
    );
};
const CategoryCellComponent = (value: CustomCellRendererProps) => {
    return (
        <div className="w-full h-full flex items-center">
            {productEnumCategories[value.data.category]}
        </div>
    );
};

type InputChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;
export default function ProductsPage() {
    const initialFormData = {
        title: "",
        category: 0,
        price: 0,
        stock: 0,
        color: "#000",
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
                price: +formData.price,
                stock: +formData.stock,
                color: formData.color,
                size: formData.size,
                description: formData.description,
            };
            setRows((prev) => [...prev, data]);
            setFormData(initialFormData);
            setProductId(null);
        } else {
            console.log("formData: ", formData);
            const data = {
                title: formData.title,
                category: formData.category,
                price: +formData.price,
                stock: +formData.stock,
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
    const ActionCellComponent = (value: CustomCellRendererProps) => {
        const cellData = value.data;
        const visitHandler = () => {
            setProductId(cellData.id);
            setFormData({
                title: cellData.title,
                category: cellData.category,
                price: cellData.price,
                stock: cellData.stock,
                color: cellData.color,
                size: cellData.size,
                description: cellData.description,
            });
        };
        const deleteHandler = () => {
            setRows((prev) => prev.filter((item) => item.id !== cellData.id));
        };

        return (
            <div className="w-full h-full items-center flex gap-x-3">
                <MuiButton color="success" onClick={visitHandler}>
                    Visit
                </MuiButton>
                <MuiConfrimAlert
                    header="Delete product"
                    open={confirmState}
                    setOpen={setConfirmState}
                    text="Are you sure you want to delete this product?"
                    onConfirm={deleteHandler}
                >
                    <MuiButton color="error" onClick={() => setConfirmState(true)}>
                        Delete
                    </MuiButton>
                </MuiConfrimAlert>
            </div>
        );
    };
    const productColDefs = [
        { field: "id", hide: true },
        { field: "title", headerName: "Title" },
        {
            field: "category",
            headerName: "Category",
            cellRenderer: CategoryCellComponent,
        },
        { field: "price", headerName: "Price" },
        { field: "stock", headerName: "Stock" },
        { field: "color", headerName: "Color", cellRenderer: ColorCellComponent },
        { field: "size", headerName: "Size", cellRenderer: SizeCellComponent },
        { field: "description", headerName: "Description" },
        {
            field: "action",
            headerName: "Action",
            cellRenderer: ActionCellComponent,
        },
    ];
    const [confirmState, setConfirmState] = useState(false);
    return (
        <>
            <form onSubmit={submitHandler} className="grid grid-cols-2 gap-5 p-3">
                <MuiInput
                    required
                    name="title"
                    label="Title"
                    type="text"
                    placeholder="Please enter the product title"
                    value={formData.title}
                    onChange={changeHandler}
                />
                <MuiSelect
                    required
                    name="category"
                    label="Category"
                    value={formData.category}
                    options={categoryOpitons}
                    onChange={changeHandler}
                />
                <MuiInput
                    required
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
                    required
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
                    required
                    name="color"
                    label="Color"
                    type="color"
                    placeholder="Please enter the product color"
                    value={formData.color}
                    onChange={changeHandler}
                />
                <MuiSelect
                    required
                    name="size"
                    label="Size"
                    value={formData.size}
                    options={sizeOptions}
                    onChange={changeHandler}
                />
                <MuiInput
                    required
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
