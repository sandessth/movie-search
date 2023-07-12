import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     width: 500,
//     position: "fixed",
//     bottom: 0,
//     backgroundColor: "#2d313a",
//     zIndex: 100,
//   },
// });

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          styles={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />

        <BottomNavigationAction
          styles={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />

        <BottomNavigationAction
          styles={{ color: "white" }}
          label="TV Series"
          icon={<TvIcon />}
        />

        <BottomNavigationAction
          styles={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
