// "use client";
// import { useSearchParams } from "next/navigation";
// import { Container, Typography, Button, Box } from "@mui/material";
// import Link from "next/link";

// export default function RecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "Unknown Condition";

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Recommendations for {condition}
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Choose your preferred type of medication.
//       </Typography>
//       <Box display="flex" flexDirection="column" gap={2}>
//         <Button
//           variant="contained"
//           color="primary"
//           component={Link}
//           href={`/recommendation/english?condition=${encodeURIComponent(condition)}`}
//         >
//           English Medicine
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           component={Link}
//           href={`/recommendation/natural?condition=${encodeURIComponent(condition)}`}
//         >
//           Natural Medicine
//         </Button>
//       </Box>
//     </Container>
//   );
// }


// "use client";
// import { useSearchParams } from "next/navigation";
// import { Container, Typography, Button, Box } from "@mui/material";
// import Link from "next/link";

// export default function RecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "Unknown Condition";

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Recommendations for {condition}
//       </Typography>
//       <Typography variant="body1" mb={3}>
//         Choose a treatment approach:
//       </Typography>
//       <Box display="flex" flexDirection="column" gap={2}>
//         <Button
//           variant="contained"
//           color="primary"
//           component={Link}
//           href={`/recommendation/english?condition=${encodeURIComponent(condition)}`}
//         >
//           English Medicine
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           component={Link}
//           href={`/recommendation/natural?condition=${encodeURIComponent(condition)}`}
//         >
//           Natural Medicine
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, Button, CircularProgress, Box } from "@mui/material";

// export default function RecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition");
//   const [data, setData] = useState<{ natural: string[]; english: string[] } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (condition) {
//       fetch(`/api/recommend?condition=${encodeURIComponent(condition)}`)
//         .then((res) => res.json())
//         .then((response) => {
//           setData(response.recommendations);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching recommendations:", error);
//           setLoading(false);
//         });
//     }
//   }, [condition]);

//   if (loading) {
//     return (
//       <Container sx={{ textAlign: "center", mt: 5 }}>
//         <CircularProgress />
//         <Typography variant="h6" mt={2}>Loading recommendations...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ textAlign: "center", mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Medication Recommendations for {condition}
//       </Typography>

//       {data ? (
//         <>
//           <Box mb={2}>
//             <Typography variant="h6">Natural Medicine</Typography>
//             {data.natural.map((item, index) => (
//               <Typography key={index} variant="body1">- {item}</Typography>
//             ))}
//           </Box>

//           <Box mb={2}>
//             <Typography variant="h6">English Medicine</Typography>
//             {data.english.map((item, index) => (
//               <Typography key={index} variant="body1">- {item}</Typography>
//             ))}
//           </Box>

//           <Button variant="contained" color="primary" href="/">
//             Back to Home
//           </Button>
//         </>
//       ) : (
//         <Typography variant="h6" color="error">
//           No recommendations found.
//         </Typography>
//       )}
//     </Container>
//   );
// }



// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, Button, CircularProgress, Box } from "@mui/material";

// export default function RecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition"); // Get condition from query
//   const [data, setData] = useState<{ natural: string[]; english: string[] } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (condition) {
//       fetch(`/api/recommend?condition=${encodeURIComponent(condition)}`)
//         .then((res) => res.json())
//         .then((response) => {
//           setData(response.recommendations);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching recommendations:", error);
//           setLoading(false);
//         });
//     }
//   }, [condition]);

//   if (!condition) {
//     return (
//       <Container sx={{ textAlign: "center", mt: 5 }}>
//         <Typography variant="h6" color="error">
//           No condition provided.
//         </Typography>
//       </Container>
//     );
//   }

//   if (loading) {
//     return (
//       <Container sx={{ textAlign: "center", mt: 5 }}>
//         <CircularProgress />
//         <Typography variant="h6" mt={2}>Loading recommendations...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ textAlign: "center", mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Medication Recommendations for {condition}
//       </Typography>

//       {data ? (
//         <>
//           <Box mb={2}>
//             <Typography variant="h6">Natural Medicine</Typography>
//             {data.natural.map((item, index) => (
//               <Typography key={index} variant="body1">- {item}</Typography>
//             ))}
//           </Box>

//           <Box mb={2}>
//             <Typography variant="h6">English Medicine</Typography>
//             {data.english.map((item, index) => (
//               <Typography key={index} variant="body1">- {item}</Typography>
//             ))}
//           </Box>

//           <Button variant="contained" color="primary" href="/">
//             Back to Home
//           </Button>
//         </>
//       ) : (
//         <Typography variant="h6" color="error">
//           No recommendations found.
//         </Typography>
//       )}
//     </Container>
//   );
// }


// export default function RecommendationPage() {
//   return <h1>Recommendation Page Loaded Successfully! 🎉</h1>;
// }


// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, CircularProgress, Box, List, ListItem } from "@mui/material";

// export default function RecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "unknown";
//   const [recommendations, setRecommendations] = useState<{ natural: string[]; english: string[] } | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       try {
//         const response = await fetch(`/api/recommend?condition=${encodeURIComponent(condition)}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch recommendations");
//         }
//         const data = await response.json();
//         setRecommendations(data.recommendations);
//       } catch (err) {
//         setError("Something went wrong. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecommendations();
//   }, [condition]);

//   return (
//     <Container sx={{ textAlign: "center", mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Recommendations for "{condition}"
//       </Typography>

//       {loading && <CircularProgress />}
//       {error && <Typography color="error">{error}</Typography>}

//       {recommendations && (
//         <>
//           <Box mt={3}>
//             <Typography variant="h5" color="primary">🌿 Natural Remedies</Typography>
//             <List>
//               {recommendations.natural.map((item, index) => (
//                 <ListItem key={index}>✅ {item}</ListItem>
//               ))}
//             </List>
//           </Box>

//           <Box mt={3}>
//             <Typography variant="h5" color="secondary">💊 English Medicine</Typography>
//             <List>
//               {recommendations.english.map((item, index) => (
//                 <ListItem key={index}>💊 {item}</ListItem>
//               ))}
//             </List>
//           </Box>
//         </>
//       )}
//     </Container>
//   );
// }






// "use client";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Container, Typography, Button, Box } from "@mui/material";

// export default function RecommendationSelection() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const condition = searchParams.get("condition") || "unknown";

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Recommendations for: {condition}
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Choose your preferred type of medicine.
//       </Typography>
//       <Box display="flex" justifyContent="center" gap={2}>
//         <Button
//           variant="contained"
//           color="success"
//           onClick={() => router.push(`/recommendation/natural?condition=${condition}`)}
//         >
//           🌿 Natural Medicine
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => router.push(`/recommendation/english?condition=${condition}`)}
//         >
//           💊 English Medicine
//         </Button>
//       </Box>
//     </Container>
//   );
// }



// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { Container, Typography, Button, Box } from "@mui/material";
// import { Suspense } from "react";

// export default function RecommendationSelectionPage() {
//   return (
//     <Suspense fallback={<Loading />}>
//       <RecommendationSelection />
//     </Suspense>
//   );
// }

// function RecommendationSelection() {
//   const searchParams = useSearchParams(); // ✅ Wrapped inside Suspense
//   const router = useRouter();
//   // const condition = searchParams.get("condition") || "unknown";
//   const conditions = searchParams.get("conditions") || "unknown";

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Recommendations for: {conditions}
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Choose your preferred type of medicine.
//       </Typography>
//       <Box display="flex" justifyContent="center" gap={2}>
//         <Button
//           variant="contained"
//           color="success"
//           onClick={() => router.push(`/recommendation/natural?condition=${conditions}`)}
//         >
//           🌿 Natural Medicine
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => router.push(`/recommendation/english?condition=${conditions}`)}
//         >
//           💊 English Medicine
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// // 🔹 Fallback Component for Suspense
// function Loading() {
//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Loading recommendations...
//       </Typography>
//     </Container>
//   );
// }





//bg image
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Container, Typography, Button, Box } from "@mui/material";
import { Suspense } from "react";

export default function RecommendationSelectionPage() {
  return (
    <Suspense fallback={<Loading />}>
      <RecommendationSelection />
    </Suspense>
  );
}

function RecommendationSelection() {
  const searchParams = useSearchParams(); // ✅ Wrapped inside Suspense
  const router = useRouter();
  const conditions = searchParams.get("conditions") || "unknown";

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 8,
        backgroundImage: "url('/images/recom_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
        Recommendations for: {conditions}
      </Typography>
      <Typography variant="body1" color="palegreen" mb={3}>
        Choose your preferred type of medicine.
      </Typography>
      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            router.push(`/recommendation/natural?condition=${conditions}`)
          }
        >
          🌿 Natural Medicine
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            router.push(`/recommendation/english?condition=${conditions}`)
          }
        >
          💊 English Medicine
        </Button>
      </Box>
    </Container>
  );
}

// 🔹 Fallback Component for Suspense
function Loading() {
  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Loading recommendations...
      </Typography>
    </Container>
  );
}
