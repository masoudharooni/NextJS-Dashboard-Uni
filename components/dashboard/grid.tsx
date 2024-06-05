import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo } from "react";
import useTheme from "@/hooks/useTheme";

export default function AgGridComponent(props: AgGridReactProps) {
    const theme = useTheme();
    const defaultColDef = useMemo(
        () => ({
            flex: 1,
            minWidth: 200,
            resizable: true,
            sortable: true,
            filter: true,
        }),
        []
    );
    return (
        <div
            className={theme === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"}
            style={{ height: 300 }}
        >
            <AgGridReact
                rowData={props.rowData}
                columnDefs={props.columnDefs}
                defaultColDef={defaultColDef}
                gridOptions={{
                    animateRows: true,
                }}
            />
        </div>
    );
}
