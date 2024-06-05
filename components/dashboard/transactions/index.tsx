"use client";
import { CustomCellRendererProps } from "ag-grid-react";
import productEnumSize from "@/contracts/enums/productSize";
import productEnumCategories from "@/contracts/enums/productCategories";
import AgGridComponent from "../grid";
import productsSource from "@/sources/products";
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
];
export const Transactions = () => {
    return (
        <section className="py-3 px-5 rounded-[10px] dark:bg-bgSoft bg-bgSoftLight">
            <h2 className="mb-3 font-extralight dark:text-textSoft text-textSoftLight">
                The most popular products
            </h2>

            <AgGridComponent columnDefs={productColDefs} rowData={productsSource}  />
        </section>
    );
};

export default Transactions;
