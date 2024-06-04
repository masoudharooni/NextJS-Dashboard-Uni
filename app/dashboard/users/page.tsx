"use client";
import { useMemo, useState } from "react";
import Search from "@/components/dashboard/users/search";
import Link from "next/link";
import AgGridComponent from "@/components/dashboard/grid";
import { CustomCellRendererProps } from "ag-grid-react";
import MuiButton from "@/components/MUI/muiButton";
const StatusCellComponent = (value: CustomCellRendererProps) => (
    <div className="w-full h-full py-3 flex items-center pr-3">
        <MuiButton color={value.data.status ? "success" : "error"}>
            {value.data.status ? "Active" : "Not Active"}
        </MuiButton>
    </div>
);
const ActionCellComponent = (value: CustomCellRendererProps) => {
    return (
        <div className="w-full h-full items-center flex gap-x-3">
            <MuiButton color="success">Visit</MuiButton>
            <MuiButton color="error">Delete</MuiButton>
        </div>
    );
};
export default function UsersPage() {
    const [search, setSearch] = useState("");
    const colDefs = useMemo(
        () => [
            { field: "id", hide: true },
            { field: "name", headerName: "Name" },
            { field: "email", headerName: "Email" },
            { field: "created_at", headerName: "Created at" },
            { field: "role", headerName: "Role" },
            {
                field: "status",
                headerName: "Status",
                cellRenderer: StatusCellComponent,
            },
            {
                field: "action",
                headerName: "Action",
                cellRenderer: ActionCellComponent,
            },
        ],
        []
    );
    const [rowData, setRowData] = useState([
        {
            id: 1,
            name: "Masoud Harooni",
            email: "masoudharooni@gmail.com",
            created_at: "2015-02-13",
            role: "Admin",
            status: true,
            action: "action",
        },
        {
            id: 2,
            name: "Masoud Harooni2",
            email: "masoudharooni@gmail.com2",
            created_at: "2015-02-13",
            role: "Admin",
            status: false,
            action: "action",
        },
        {
            id: 3,
            name: "Masoud Haroon3",
            email: "masoudharooni@gmail.co3",
            created_at: "2015-02-13",
            role: "Admin",
            status: true,
            action: "action",
        },
    ]);
    return (
        <section className="dark:bg-bgSoft bg-bgSoftLight p-5 rounded-[10px] mt-5">
            <Link href="/dashboard/users/add">
                <button className="p-2.5 text-text bg-[#8e88e7] dark:bg-[#5d57c9] rounded-md">
                    Add
                </button>
            </Link>

            <div className="mt-5">
                <AgGridComponent columnDefs={colDefs} rowData={rowData} />
            </div>
        </section>
    );
}
