"use client";
import { FormEvent, useEffect, useState } from "react";
import AgGridComponent from "@/components/dashboard/grid";
import { CustomCellRendererProps } from "ag-grid-react";
import MuiButton from "@/components/MUI/muiButton";
import UserType from "@/contracts/types/userType";
import usersSource from "@/sources/users";
import MuiInput from "@/components/MUI/muiInput";
import MuiSelect from "@/components/MUI/muiSelect";
import MuiConfrimAlert from "@/components/MUI/muiConfirmAlert";
import { Alert } from "@mui/material";
const StatusCellComponent = (value: CustomCellRendererProps) => (
    <div className="w-full h-full py-3 flex items-center pr-3">
        <MuiButton color={value.data.status ? "success" : "error"}>
            {value.data.status ? "Active" : "Not Active"}
        </MuiButton>
    </div>
);
const RoleCellComponent = (value: CustomCellRendererProps) => (
    <div className="w-full h-full py-3 flex items-center pr-3">
        <MuiButton color={value.data.status ? "primary" : "warning"}>
            {value.data.status ? "Admin" : "User"}
        </MuiButton>
    </div>
);

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

type TAlert = {
    message: string;
    type: "error" | "info" | "success" | "warning";
};

export default function UserPage() {
    const [alert, setAlert] = useState<TAlert>({
        message: "",
        type: "error",
    });
    const [rowData, setRowData] = useState<UserType[]>([]);
    const [userId, setUserId] = useState<null | number>(null);
    const initFormData = {
        username: "",
        email: "",
        password: "",
        phone: "",
        isAdmin: true,
        isActive: true,
        address: "",
    };
    const [formData, setFormData] = useState<TFromData>(initFormData);
    const changeHandler = (event: InputChangeEvent) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const isAdminOpitons = [
        { label: "Yes", value: true },
        { label: "No", value: false },
    ];
    useEffect(() => {
        setRowData(usersSource);
    }, []);
    const [confirmState, setConfirmState] = useState(false);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const existingUser = usersSource.find(
            (user) =>
                user.email === formData.email || user.username === formData.username
        );
        if (existingUser) {
            return setAlert((prev) => ({
                ...prev,
                message: "This username or email already exists:(",
            }));
        }

        // add a user
        if (userId === null) {
            const data: UserType = {
                id: usersSource.length,
                username: formData.username,
                password: formData.password,
                email: formData.email,
                phone: formData.phone,
                role: formData.isAdmin,
                status: formData.isActive,
                address: formData.address,
            };
            setRowData((prev) => [...prev, data]);
            setFormData(initFormData);
            setUserId(null);
            return setAlert(() => ({
                type: 'success',
                message: "User added successfully :)",
            }));
        }
        // update an existing user
        else {
            const data = {
                username: formData.username,
                password: formData.password,
                email: formData.email,
                phone: formData.phone,
                role: formData.isAdmin,
                status: formData.isActive,
                address: formData.address,
            };
            setRowData((prev) =>
                prev.map((item) => (item.id === userId ? { ...item, ...data } : item))
            );
            setFormData(initFormData);
            setUserId(null);
            return setAlert(() => ({
                type: 'success',
                message: "User updated successfully :)",
            }));
        }
    };
    const ActionCellComponent = (value: CustomCellRendererProps) => {
        const cellData = value.data;
        const visitHandler = () => {
            setUserId(cellData.id);
            setFormData({
                username: cellData.username,
                email: cellData.email,
                password: cellData.password,
                phone: cellData.phone,
                isAdmin: cellData.role,
                isActive: cellData.status,
                address: cellData.address,
            });
        };
        const deleteHandler = () => {
            setRowData((prev) => prev.filter((item) => item.id !== cellData.id));
        };

        return (
            <div className="w-full h-full items-center flex gap-x-3">
                <MuiButton color="success" onClick={visitHandler}>
                    Visit
                </MuiButton>
                <MuiConfrimAlert
                    header="Delete user"
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
    const userGridColDefs = [
        { field: "id", hide: true },
        { field: "password", hide: true },
        { field: "username", headerName: "username" },
        { field: "email", headerName: "Email" },
        { field: "phone", headerName: "Phone" },
        { field: "role", headerName: "Role", cellRenderer: RoleCellComponent },
        { field: "address", headerName: "Address" },
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
    ];
    return (
        <>
            {!!alert.message && (
                <Alert
                    onClose={() => setAlert((prev) => ({ ...prev, message: "" }))}
                    variant="filled"
                    severity={alert.type}
                >
                    {alert.message}
                </Alert>
            )}
            <form
                onSubmit={submitHandler}
                className="grid md:grid-cols-2 gap-5 md:gap-10 px-2 md:px-5 "
            >
                <MuiInput
                    required
                    label="Id"
                    type="number"
                    value={userId}
                    disabled
                    sx={{ display: "none" }}
                />

                <MuiInput
                    required
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Please enter the Username"
                    value={formData.username}
                    onChange={changeHandler}
                />

                <MuiInput
                    required
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Please enter the password"
                    value={formData.password}
                    onChange={changeHandler}
                />
                <MuiInput
                    required
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Please enter the Email"
                    value={formData.email}
                    onChange={changeHandler}
                />
                <MuiInput
                    required
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="Please enter the Phone Number"
                    value={formData.phone}
                    onChange={changeHandler}
                />
                <MuiSelect
                    required
                    name="isAdmin"
                    label="Is admin?"
                    value={formData.isAdmin}
                    options={isAdminOpitons}
                    onChange={changeHandler}
                />
                <MuiSelect
                    required
                    name="isActive"
                    label="Is active?"
                    value={formData.isActive}
                    options={isAdminOpitons}
                    onChange={changeHandler}
                />
                <MuiInput
                    required
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
                <div className="col-span-full mb-10">
                    <MuiButton
                        type="submit"
                        sx={{ width: "100%" }}
                        color="success"
                        variant="contained"
                    >
                        {userId === null ? "Add" : "update"}
                    </MuiButton>
                </div>
            </form>
            <div className="mt-5 px-5">
                <AgGridComponent columnDefs={userGridColDefs} rowData={rowData} />
            </div>
        </>
    );
}
