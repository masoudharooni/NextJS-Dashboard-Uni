"use client";
import { useMemo, useState } from "react";
import Search from "@/components/dashboard/users/search";
import Link from "next/link";
import MuiButton from "@/components/MUI/muiButton";
import { CustomCellRendererProps } from "ag-grid-react";
import AgGridComponent from "@/components/dashboard/grid";
import ProductType from "@/contracts/types/productType";
const ActionCellComponent = (value: CustomCellRendererProps) => {
    return (
        <div className="w-full h-full items-center flex gap-x-3">
            <MuiButton color="success">Visit</MuiButton>
            <MuiButton color="error">Delete</MuiButton>
        </div>
    );
};
export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const colDeps = useMemo(
        () => [
            { field: "id" },
            { field: "title", headerName: "Title" },
            { field: "description", headerName: "Description" },
            { field: "price", headerName: "Price" },
            { field: "created_at", headerName: "Created At" },
            { field: "amount", headerName: "Amount" },
            {
                field: "action",
                headerName: "Action",
                cellRenderer: ActionCellComponent,
            },
        ],
        []
    );
    const [rows, setRows] = useState<ProductType[]>([
        {
            id: 1,
            title: "Iphone",
            description: "A product of Apple",
            price: "1,300$",
            created_at: "2024-04-11",
            amount: 12,
        },
    ]);

    return (
        <section className="dark:bg-bgSoft bg-bgSoftLight p-5 rounded-[10px] mt-5">
            <div className="flex justify-between">
                <Link href="/dashboard/products/add">
                    <button className="p-2.5 text-text bg-[#8e88e7] dark:bg-[#5d57c9] rounded-md">
                        add
                    </button>
                </Link>
            </div>
            <div className="mt-5">
                <AgGridComponent columnDefs={colDeps} rowData={rows} />
            </div>
        </section>
    );
}
