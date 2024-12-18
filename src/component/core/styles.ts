import { SxProps } from "@mui/system";

export const createHoverStyle = (color: string, opacity: number): SxProps => ({
    "&:hover": {
        backgroundColor: `rgba(${color}, ${opacity}) !important`,
    },
});