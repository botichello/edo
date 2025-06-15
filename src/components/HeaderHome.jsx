import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Link,
} from "@mui/material";
import logo from "../images/edo_logo.png";

export default function HeaderHome({ aboutRef, testimonialRef, planRef }) {
  const scrollToAbout = () => {
    if (aboutRef && aboutRef.current) {
      const position =
        aboutRef.current.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };
  const scrollToTestimonials = () => {
    if (testimonialRef && testimonialRef.current) {
      const position =
        testimonialRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        150;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };
  const scrollToPlans = () => {
    if (planRef && planRef.current) {
      const position =
        planRef.current.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        height: { xs: "90px", sm: "160px" },
        minHeight: { xs: "80px", sm: "160px" },
        backgroundColor: "transparent",
        color: "white",
        justifyContent: "center",
      }}
    >
      {/* Flex container to center the Toolbar content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "2100px",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            px: { xs: 1, sm: 3, md: 3 },
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: "40px", sm: "70px" },
              height: "100%",
              width: "100%", // Ensure Toolbar takes the full width of the inner Box
            }}
          >
            <Link href="/">
              <Box
                component={"img"}
                src={logo}
                maxHeight={{ xs: 70, sm: 85, md: 100, lg: 120 }}
                height={{ xs: 70, sm: 85, md: 100, lg: 120 }}
                sx={{ flexGrow: 0 }}
              />
            </Link>
            <Box sx={{ flexGrow: 1 }} /> {/* Invisible spacer */}
            <Button
              onClick={scrollToAbout}
              sx={{
                marginRight: "2%",
                color: "#C09338",
                textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7)
    `,
                fontWeight: 650,
                letterSpacing: 0.3,
                display: { xs: "none", md: "block" },
              }}
            >
              About me
            </Button>
            <Button
              onClick={scrollToTestimonials}
              sx={{
                marginRight: "4%",
                color: "#C09338",
                textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7)
    `,
                fontWeight: 650,
                letterSpacing: 0.3,
                display: { xs: "none", md: "block" },
              }}
            >
              Testimonials
            </Button>
            <Button
              onClick={scrollToPlans}
              variant={"contained"}
              sx={{
                flexGrow: 0,
                color: "#C09338",
                paddingY: { xs: 1, sm: 1.75 },
                size: { xs: "medium", sm: "large", md: "large" },
                textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6)
      `,
                boxShadow: `
      0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 8px 10px rgba(0, 0, 0, 0.15),
      0px 12px 16px rgba(0, 0, 0, 0.2),
      0px 14px 18px rgba(0, 0, 0, 0.25)
    `,
                fontWeight: 650,
                letterSpacing: 0.3,
              }}
            >
              Book now
            </Button>
          </Toolbar>
        </Box>
      </Box>
    </AppBar>
  );
}
