// "use client";
// import { useSearchParams } from "next/navigation";
// import { Container, Typography, Box } from "@mui/material";

// export default function NaturalMedicinePage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "your condition";

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Medicine for {condition}
//       </Typography>
//       <Box>
//         <Typography variant="body1">
//           🌿 Recommended Natural Treatment:
//         </Typography>
//         <Typography variant="body2" sx={{ mt: 1 }}>
//           - Drink herbal tea (e.g., ginger, turmeric)  
//           - Use honey and lemon for throat relief  
//           - Apply aloe vera for skin irritation  
//         </Typography>
//       </Box>
//     </Container>
//   );
// }


// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

// export default function NaturalMedicinePage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "Unknown Condition";
//   const [medications, setMedications] = useState<string[]>([]);

//   useEffect(() => {
//     fetch(`/api/recommend?condition=${encodeURIComponent(condition)}`)
//       .then((res) => res.json())
//       .then((data) => setMedications(data.recommendations?.natural || ["No recommendations available"]));
//   }, [condition]);

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Medicine for {condition}
//       </Typography>
//       <List>
//         {medications.map((med, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={med} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// }


// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";
// import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

// export default function NaturalMedicinePage() {
//   return (
//     <Suspense fallback={<Loading />}>
//       <NaturalMedicineContent />
//     </Suspense>
//   );
// }

// function NaturalMedicineContent() {
//   const searchParams = useSearchParams(); // ✅ Wrapped inside Suspense
//   const condition = searchParams.get("condition") || "Unknown Condition";
//   const [medications, setMedications] = useState<string[]>([]);

//   useEffect(() => {
//     fetch(`/api/recommend?condition=${encodeURIComponent(condition)}`)
//       .then((res) => res.json())
//       .then((data) => setMedications(data.recommendations?.natural || ["No recommendations available"]));
//   }, [condition]);

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Medicine for {condition}
//       </Typography>
//       <List>
//         {medications.map((med, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={med} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// }

// // 🔹 Fallback Component for Suspense
// function Loading() {
//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Loading natural remedies...
//       </Typography>
//     </Container>
//   );
// }



// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Alert } from "@mui/material";

// export default function NaturalRecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "Unknown Condition";
//   const [recommendation, setRecommendation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchRecommendation() {
//       try {
//         const res = await fetch("/api/recommend", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ condition }),
//         });

//         const data = await res.json();
//         if (!res.ok) {
//           setError(data.error);
//         } else {
//           setRecommendation(data.natural);
//         }
//       } catch {
//         setError("Failed to fetch recommendations.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRecommendation();
//   }, [condition]);

//   if (loading) return <Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>;
//   if (error) return <Container sx={{ textAlign: "center", mt: 4 }}><Alert severity="error">{error}</Alert></Container>;

//   return (
//     <Container sx={{ textAlign: "center", mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Remedy for {condition}
//       </Typography>
//       <Card sx={{ maxWidth: 500, mx: "auto", mt: 3 }}>
//         <CardMedia component="img" height="250" image={recommendation.image} alt={condition} />
//         <CardContent>
//           <Typography variant="body1">{recommendation.remedy}</Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }




// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Alert } from "@mui/material";

// export default function NaturalRecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "Unknown Condition";
//   const [recommendation, setRecommendation] = useState<{ remedy: string; image: string } | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchRecommendation() {
//       try {
//         const res = await fetch("/api/recommend", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ condition }),
//         });

//         const data = await res.json();
//         if (!res.ok) {
//           setError(data.error);
//         } else {
//           setRecommendation(data.natural);
//         }
//       } catch {
//         setError("Failed to fetch recommendations.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRecommendation();
//   }, [condition]);

//   if (loading) return <Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>;
//   if (error) return <Container sx={{ textAlign: "center", mt: 4 }}><Alert severity="error">{error}</Alert></Container>;

//   return (
//     <Container sx={{ textAlign: "center", mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Remedy for {condition}
//       </Typography>
//       <Card sx={{ maxWidth: 500, mx: "auto", mt: 3 }}>
//         <CardMedia component="img" height="250" image={recommendation?.image} alt={condition} />
//         <CardContent>
//           <Typography variant="body1">{recommendation?.remedy}</Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }






// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Alert, Grid } from "@mui/material";

// export default function NaturalRecommendationPage() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "";
//   const [recommendations, setRecommendations] = useState<{ remedy: string; image: string }[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchRecommendation() {
//       try {
//         const res = await fetch("/api/recommend", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ condition }),
//         });

//         const data = await res.json();
//         if (!res.ok) {
//           setError(data.error);
//         } else {
//           //setRecommendations(data.map((rec: any) => rec.natural)); // Extracting only natural remedies
//           setRecommendations(data.map((rec: { natural: { remedy: string; image: string } }) => rec.natural));

//         }
//       } catch {
//         setError("Failed to fetch recommendations.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRecommendation();
//   }, [condition]);

//   if (loading) return <Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>;
//   if (error) return <Container sx={{ textAlign: "center", mt: 4 }}><Alert severity="error">{error}</Alert></Container>;

//   return (
//     <Container sx={{ textAlign: "center", mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Remedies for {condition}
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {recommendations.map((rec, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 400, mx: "auto", mt: 3 }}>
//               <CardMedia component="img" height="250" image={rec.image} alt={condition} />
//               <CardContent>
//                 <Typography variant="body1">{rec.remedy}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }




// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";
// import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Alert, Grid } from "@mui/material";

// function NaturalRecommendationContent() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "";
//   const [recommendations, setRecommendations] = useState<{ remedy: string; image: string }[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchRecommendation() {
//       try {
//         const res = await fetch("/api/recommend", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ condition }),
//         });

//         const data = await res.json();
//         if (!res.ok) {
//           setError(data.error);
//         } else {
//           setRecommendations(data.map((rec: { natural: { remedy: string; image: string } }) => rec.natural));
//         }
//       } catch {
//         setError("Failed to fetch recommendations.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRecommendation();
//   }, [condition]);

//   if (loading) return <Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>;
//   if (error) return <Container sx={{ textAlign: "center", mt: 4 }}><Alert severity="error">{error}</Alert></Container>;

//   return (
//     <Container sx={{ textAlign: "center", mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Remedies for {condition}
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {recommendations.map((rec, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 400, mx: "auto", mt: 3 }}>
//               <CardMedia component="img" height="250" image={rec.image} alt={condition} />
//               <CardContent>
//                 <Typography variant="body1">{rec.remedy}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default function NaturalRecommendationPage() {
//   return (
//     <Suspense fallback={<Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>}>
//       <NaturalRecommendationContent />
//     </Suspense>
//   );
// }





// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";
// import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Alert, Grid } from "@mui/material";

// function NaturalRecommendationPageContent() {
//   const searchParams = useSearchParams();
//   const condition = searchParams.get("condition") || "";
//   const [recommendations, setRecommendations] = useState<{ remedy: string; image: string }[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchRecommendation() {
//       try {
//         const res = await fetch("/api/recommend", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ condition }),
//         });

//         const data = await res.json();
//         if (!res.ok) {
//           setError(data.error);
//         } else {
//           setRecommendations(data.map((rec: { natural: { remedy: string; image: string } }) => rec.natural));
//         }
//       } catch {
//         setError("Failed to fetch recommendations.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRecommendation();
//   }, [condition]);

//   if (loading) return <Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>;
//   if (error) return <Container sx={{ textAlign: "center", mt: 4 }}><Alert severity="error">{error}</Alert></Container>;

//   return (
//     <Container sx={{ textAlign: "center", mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Natural Remedies for {condition}
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {recommendations.map((rec, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 400, mx: "auto", mt: 3 }}>
//               <CardMedia component="img" height="250" image={rec.image} alt={condition} />
//               <CardContent>
//                 <Typography variant="body1">{rec.remedy}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default function NaturalRecommendationPage() {
//   return (
//     <Suspense fallback={<Container sx={{ textAlign: "center", mt: 4 }}><CircularProgress /></Container>}>
//       <NaturalRecommendationPageContent />
//     </Suspense>
//   );
// }



//bg colour
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Alert,
  Grid,
  Box,
} from "@mui/material";

function NaturalRecommendationPageContent() {
  const searchParams = useSearchParams();
  const condition = searchParams.get("condition") || "";
  const [recommendations, setRecommendations] = useState<{ remedy: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecommendation() {
      try {
        const res = await fetch("/api/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ condition }),
        });

        const data = await res.json();
        if (!res.ok) {
          setError(data.error);
        } else {
          setRecommendations(data.map((rec: { natural: { remedy: string; image: string } }) => rec.natural));
        }
      } catch {
        setError("Failed to fetch recommendations.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendation();
  }, [condition]);

  if (loading)
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );

  if (error)
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/natural_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          Natural Remedies for {condition}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {recommendations.map((rec, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 400, mx: "auto", mt: 3 }}>
                <CardMedia component="img" height="250" image={rec.image} alt={condition} />
                <CardContent>
                  <Typography variant="body1" sx={{ color: "purple" }}>{rec.remedy}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default function NaturalRecommendationPage() {
  return (
    <Suspense
      fallback={
        <Container sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
        </Container>
      }
    >
      <NaturalRecommendationPageContent />
    </Suspense>
  );
}
