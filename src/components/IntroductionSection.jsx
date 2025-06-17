import React from "react";
import { Typography, Box, Grid, Stack } from "@mui/material";
import videoThumbnail from "../images/crown.png";
import qiyana_battle_queen from "../images/Qiyana_BattleQueen.webp";

const IntroductionSection = () => {
  return (
    <Stack maxWidth={1500} display={"flex"}>
      <Grid
        container
        spacing={{ xs: 3, md: 5, lg: 10 }}
        paddingBottom={10}
        sx={{
          paddingX: { xs: 0, sm: 2, md: 2, lg: 3 },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            component={"img"}
            src={videoThumbnail}
            border={1.5}
            borderColor={"primary.secondary"}
            //
            sx={{
              width: {
                xs: "calc(85% - 48px)",
                sm: "calc(85% - 48px)",
                md: "calc(100% - 48px)",
                lg: "calc(100% - 48px)",
              },
              height: "auto",
              overflow: "hidden",
              borderRadius: "10px",
              display: "flex",
              opacity: 0.8,
            }}
          >
            {/* <video
              src="https://neace.gg/wp-content/uploads/2022/05/NEACE-Coaching_Video.mp4"
              controls // Add controls for play, pause, etc.
              poster={videoThumbnail}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "100%",
                borderColor: "white",
                border: 1,
                zIndex: 2,
              }}
            /> */}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            "&::before": {
              // Create the overlay
              content: '""',
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${qiyana_battle_queen})`,
              backgroundSize: { xs: "35%", sm: "27.5%", md: "40%" },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.265, // Set the desired opacity
              zIndex: 0, // Ensure it's above the background but below the content
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center", md: "normal" },
              paddingTop: { xs: 5, sm: 5, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary.secondary",
                textAlign: "center",
                display: "flex",
                fontWeight: "750",
                paddingTop: { xs: 0, sm: 0, md: 3 },
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
              You can call me&nbsp;
              <Box
                component="span"
                sx={{
                  color: "#932F16", // Choose any highlight color
                  fontWeight: "bold",
                }}
              >
                Edo
              </Box>
              .
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "primary.secondary",
                textAlign: "center",
                display: "flex",
                fontWeight: "750",
                paddingTop: 3,
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
              I am a top 0.1% midlaner.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "primary.secondary",
                display: "flex",
                fontWeight: "750",
                paddingTop: 3,
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
              Played 4000+ hours on Qiyana.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "primary.secondary",
                display: "flex",
                fontWeight: "750",
                textAlign: {
                  xs: "center",
                  sm: "left",
                  md: "left",
                  lg: "left",
                },
                paddingTop: 3,
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
              Helped over 750 Clients climb.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default IntroductionSection;
