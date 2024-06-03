import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import useTheme from "@/hooks/useTheme";

export default function MuiButton(props: ButtonProps) {
    const theme = useTheme();
    React.useEffect(() => {
        console.log("theme: ", theme);
    }, [theme]);

    const CustomButton = styled(Button)(({ color }) => ({
        ...(color === "success" && {
            backgroundColor:
                theme === "light"
                    ? `${green[500]} !important`
                    : `${green[900]} !important`,
            color: "#ffffff",
            "&:hover": {
                backgroundColor:
                    theme === "light"
                        ? `${green[800]} !important`
                        : `${green[700]} !important`,
            },
            "&:active": {
                backgroundColor: `${green[700]} !important`,
            },
            "&:disabled": {
                backgroundColor: `${green[300]} !important`,
                color: "#666666",
            },
        }),
        ...(color === "error" && {
            backgroundColor:
                theme === "light" ? `${red[500]} !important` : `${red[900]} !important`,
            color: "#ffffff",
            "&:hover": {
                backgroundColor:
                    theme === "light"
                        ? `${red[800]} !important`
                        : `${red[700]} !important`,
            },
            "&:active": {
                backgroundColor: `${red[700]} !important`,
            },
            "&:disabled": {
                backgroundColor: `${red[300]} !important`,
                color: "#666666",
            },
        }),
        ...(color === "primary" && {
            backgroundColor:
                theme === "light"
                    ? `${blue[500]} !important`
                    : `${blue[900]} !important`,
            color: "#ffffff",
            "&:hover": {
                backgroundColor:
                    theme === "light"
                        ? `${blue[800]} !important`
                        : `${blue[700]} !important`,
            },
            "&:active": {
                backgroundColor: `${blue[700]} !important`,
            },
            "&:disabled": {
                backgroundColor: `${blue[300]} !important`,
                color: "#666666",
            },
        }),
    }));

    return <CustomButton {...props}>{props.children}</CustomButton>;
}
