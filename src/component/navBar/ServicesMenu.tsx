import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createHoverStyle } from "@/component/core/styles";
import { StyledMenu } from "@/component/core/menuStyles";
import { serviceButtonStyle } from "@/component/core/buttonStyles";
import { useNavigate } from "react-router-dom";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BugReportIcon from "@mui/icons-material/BugReport";
import BirdIcon from "@mui/icons-material/EmojiNature";
import GroupIcon from "@mui/icons-material/Groups";
import MouseIcon from "@mui/icons-material/Mouse";

export default function ServicesMenu({ isMobile }: { isMobile: boolean }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const serviceMenuItems = [
    { text: "DESRRATIZADO", icon: <MouseIcon />, path: "rattedOut" },
    { text: "SANITIZADO", icon: <LocalHospitalIcon />, path: "sanitized" },
    { text: "DESINSECTADO", icon: <BugReportIcon />, path: "disinsectized" },
    { text: "CONTROL DE AVES", icon: <BirdIcon />, path: "birdControl" },
    { text: "ASESORES / CONSULTORES", icon: <GroupIcon />, path: "adviser" },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    setAnchorEl(null);
    navigate(`/services/${path}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMobile ? "flex-start" : "center",
        alignItems: "center",
        margin: isMobile ? 0 : "initial",
      }}
    >
      <Button
        id="services-button"
        aria-controls={open ? "services-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={(event) => {
          event.stopPropagation();
          handleClick(event);
        }}
        endIcon={<KeyboardArrowDownIcon />}
        sx={serviceButtonStyle(isMobile)}
      >
        Servicios
      </Button>

      <StyledMenu
        id="services-menu"
        MenuListProps={{
          "aria-labelledby": "services-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          margin: 0,
        }}
      >
        {serviceMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(item.path)}
            disableRipple
            sx={createHoverStyle("0, 111, 41", 0.1)}
          >
            {item.icon}
            {item.text}
          </MenuItem>
        ))}
        <Divider sx={{ my: 0.5 }} />
      </StyledMenu>
    </div>
  );
}