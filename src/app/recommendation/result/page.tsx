// "use client";
// import { useSearchParams } from "next/navigation";
// import { Container, Button, Typography, Box } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function ResultPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "your condition";
//   const router = useRouter();

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Recommendations for {condition}
//       </Typography>
//       <Box display="flex" flexDirection="column" gap={2}>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => router.push(`/recommend/natural?condition=${condition}`)}
//         >
//           Natural Medicine
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => router.push(`/recommend/english?condition=${condition}`)}
//         >
//           English Medicine
//         </Button>
//       </Box>
//     </Container>
//   );
// }




"use client";

import { useSearchParams } from "next/navigation";
import { Container, Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function ResultPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ResultContent />
    </Suspense>
  );
}

function ResultContent() {
  const searchParams = useSearchParams(); // ✅ Wrapped inside Suspense
  const condition = searchParams.get("condition") || "your condition";
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Recommendations for {condition}
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.push(`/recommend/natural?condition=${condition}`)}
        >
          Natural Medicine
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push(`/recommend/english?condition=${condition}`)}
        >
          English Medicine
        </Button>
      </Box>
    </Container>
  );
}

// 🔹 Fallback Component for Suspense
function Loading() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Loading recommendations...
      </Typography>
    </Container>
  );
}
