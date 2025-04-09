import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 2, mt: 4, bgcolor: "grey.200" }}>
      <Typography variant="body2">© {new Date().getFullYear()} Medication App. All Rights Reserved.</Typography>
    </Box>
  );
}
