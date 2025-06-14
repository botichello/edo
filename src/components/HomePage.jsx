import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import HeaderHome from "./HeaderHome";
import { useScroll } from "./ScrollContext";
import theme from "../theme";
import edo_hero from "../images/hero_image.png";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Stack,
  Grid,
  Fade,
} from "@mui/material";

export default function HomePage() {
  const [typographyVariant, setTypographyVariant] = useState("h3");
  const { scrollToAbout, setScrollToAbout } = useScroll();
  const aboutRef = useRef(null);
  const { scrollToTestimonials, setScrollToTestimonials } = useScroll();
  const testimonialRef = useRef(null);

  useEffect(() => {
    const updateVariant = () => {
      if (window.innerWidth < theme.breakpoints.values.md) {
        setTypographyVariant("h3");
      } else {
        setTypographyVariant("h2");
      }
    };

    updateVariant();
    window.addEventListener("resize", updateVariant);

    return () => {
      window.removeEventListener("resize", updateVariant);
    };
  }, []);

  useEffect(() => {
    if (scrollToAbout && aboutRef.current) {
      const yOffset = -150; // Number of pixels you want to scroll above the element
      const elementPosition = aboutRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setScrollToAbout(false); // Reset the state
    }
  }, [scrollToAbout, setScrollToAbout]);

  useEffect(() => {
    if (scrollToTestimonials && testimonialRef.current) {
      const yOffset = -150; // Number of pixels you want to scroll above the element
      const elementPosition =
        testimonialRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setScrollToTestimonials(false); // Reset the state
    }
  }, [scrollToTestimonials, setScrollToTestimonials]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderHome aboutRef={aboutRef} testimonialRef={testimonialRef} />
      <Stack
        sx={{
          backgroundColor: "black",
          marginTop: { xs: "-90px", sm: "-160px" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: -1,
        }}
      >
        <Stack
          maxWidth={2000}
          display={"flex"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#09000F",
              width: "100%",
              maxWidth: 2100,
              height: "100%",
              minHeight: {
                xs: "22.5rem",
                sm: "30rem",
                md: "40rem",
                lg: "50rem",
                xl: "60rem",
              },
              display: "flex",
              alignItems: "center", // Vertical alignment
              justifyContent: "center", // Horizontal alignment
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${edo_hero})`,
                backgroundSize: { xs: "140% auto", sm: "100% auto" },
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                opacity: { xs: 0.5, sm: 0.55 },
              },
            }}
          ></Box>
        </Stack>
      </Stack>
    </div>
  );
}
