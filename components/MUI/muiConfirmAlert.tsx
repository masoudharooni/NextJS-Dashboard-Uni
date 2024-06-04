import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import useTheme from "@/hooks/useTheme";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MuiConfrimAlert({
    children,
    open,
    setOpen,
    onConfirm,
    text,
    header,
}: {
    children: React.ReactNode;
    open: boolean;
    setOpen: (value: boolean) => void;
    onConfirm: () => void;
    text: string;
    header: string;
}) {
    const theme = useTheme();
    return (
        <React.Fragment>
            {children}
            <Dialog
                PaperProps={{
                    style: {
                        backgroundColor: theme === "light" ? "#e3ebff" : "#182237",
                    },
                }}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    sx={{
                        color: theme === "light" ? "#333333" : "#ffffff",
                        fontWeight: "bold",
                    }}
                >
                    {header}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        sx={{
                            color: theme === "light" ? "#333333" : "#ffffff",
                        }}
                    >
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="text"
                        color="error"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Disagree
                    </Button>
                    <Button
                        variant="text"
                        color="success"
                        onClick={() => {
                            setOpen(false);
                            onConfirm();
                        }}
                    >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
