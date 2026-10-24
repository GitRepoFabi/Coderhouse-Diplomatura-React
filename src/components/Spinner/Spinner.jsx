import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
  );
};

export default Spinner;
