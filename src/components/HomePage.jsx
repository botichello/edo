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
  const { scrollToPlans, setScrollToPlans } = useScroll();
  const planRef = useRef(null);

  useEffect(() => {
    const updateVariant = () => {
      if (window.innerWidth < theme.breakpoints.values.md) {
        setTypographyVariant("h4");
      } else {
        setTypographyVariant("h3");
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

  useEffect(() => {
    if (scrollToPlans && planRef.current) {
      const yOffset = -150; // Number of pixels you want to scroll above the element
      const elementPosition = planRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setScrollToPlans(false); // Reset the state
    }
  }, [scrollToPlans, setScrollToPlans]);

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
          <Fade in={true} timeout={500}>
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
                  opacity: { xs: 0.4, sm: 0.45 },
                },
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Fade in={true} timeout={700}>
                  <Typography
                    component="div"
                    variant={typographyVariant}
                    sx={{
                      color: "#C09338",
                      position: "relative",
                      zIndex: 2,
                      maxWidth: {
                        xs: "71%",
                        sm: "70%",
                        md: "65%",
                        lg: "60%",
                      },
                      marginTop: { xs: "0%", sm: "2%", md: "2%", lg: "-5%" },
                      textAlign: "center",
                      display: "flex",
                      fontWeight: "750",
                      textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7)
    `,
                    }}
                  >
                    THE BEST QIYANA COACHING FOR LEAGUE OF LEGENDS
                  </Typography>
                </Fade>
                <Fade in={true} timeout={1000}>
                  <Button
                    onClick={scrollToPlans}
                    variant={"contained"}
                    sx={{
                      flexGrow: 0,
                      color: "#C09338",
                      paddingY: { xs: 1.2, sm: 1.55 },
                      marginTop: { xs: "3%", sm: "3%", md: "3%", lg: "3%" },
                      size: { xs: "medium", sm: "large", md: "large" },
                      fontSize: { sm: 17.5, md: 22.5 },
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
                    GET YOUR COACHING
                  </Button>
                </Fade>
              </Stack>
            </Box>
          </Fade>
        </Stack>
      </Stack>
    </div>
  );
}
