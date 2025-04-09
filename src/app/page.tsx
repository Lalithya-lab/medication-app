// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";

// export default function Home() {
//   const [condition, setCondition] = useState("");
//   const router = useRouter();

//   const handleSubmit = () => {
//     if (condition.trim()) {
//       router.push(`/recommendation?condition=${encodeURIComponent(condition)}`);
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Find the Right Medication
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your health condition to get recommendations.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter your condition"
//           variant="outlined"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Recommendations
//         </Button>
//       </Box>
//     </Container>
//   );
// }


// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";

// export default function Home() {
//   const [condition, setCondition] = useState("");
//   const router = useRouter();

//   const handleSubmit = () => {
//     if (condition.trim()) {
//       router.push(`/recommendation?condition=${encodeURIComponent(condition)}`);
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Find the Right Medication
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your health condition to get recommendations.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter your condition"
//           variant="outlined"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Recommendations
//         </Button>
//       </Box>
//     </Container>
//   );
// }






// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";

// export default function Home() {
//   const [condition, setCondition] = useState("");
//   const router = useRouter();

//   const handleSubmit = () => {
//     if (condition.trim()) {
//       router.push(`/recommendation?condition=${encodeURIComponent(condition)}`);
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Find the Right Medication
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your health condition to get recommendations.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter your condition"
//           variant="outlined"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Recommendations
//         </Button>
//       </Box>
//     </Container>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function Home() {
//   const [condition, setCondition] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsAuthenticated(!!user);
//   }, []);

//   const handleSubmit = () => {
//     if (!isAuthenticated) {
//       setError("Please log in to get recommendations.");
//       return;
//     }

//     if (condition.trim()) {
//       router.push(`/recommendation?condition=${encodeURIComponent(condition)}`);
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Find the Right Medication
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your health condition to get recommendations.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter your condition"
//           variant="outlined"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Recommendations
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }




// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function Home() {
//   const [condition, setCondition] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = localStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth); // ✅ Listen for login changes

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleSubmit = () => {
//     if (!isAuthenticated) {
//       setError("⚠ Please log in to get recommendations.");
//       return;
//     }

//     if (condition.trim()) {
//       router.push(`/recommendation?condition=${encodeURIComponent(condition)}`);
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Find the Right Medication
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your health condition to get recommendations.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter your condition"
//           variant="outlined"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Recommendations
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }














// // app/page.tsx after symptoms diagnosis
// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   const [condition, setCondition] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = localStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth);

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleSubmit = () => {
//     if (!isAuthenticated) {
//       setError("⚠ Please log in to get recommendations.");
//       return;
//     }

//     if (condition.trim()) {
//       router.push(`/recommendation?condition=${encodeURIComponent(condition)}`);
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Find the Right Medication
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your health condition to get recommendations.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter your condition"
//           variant="outlined"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Recommendations
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//         <Link href="/diagnosis">
//           <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }




// "use client";
// import { useState, useEffect } from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = localStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth);

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom color="primary">
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="h6" color="textSecondary" mb={3}>
//         Get personalized medication recommendations based on your symptoms.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
//         <Link href="/diagnosis">
//           <Button
//             variant="contained"
//             color="success"
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 24px",
//               backgroundColor: "#28a745",
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//           >
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }







// "use client";
// import { useEffect } from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   useEffect(() => {
//     const checkAuth = () => {
//       // ✅ Removed 'user' since it's not used
//       localStorage.getItem("user");
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth);

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom color="primary">
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="h6" color="textSecondary" mb={3}>
//         Get personalized medication recommendations based on your symptoms.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
//         <Link href="/diagnosis">
//           <Button
//             variant="contained"
//             color="success"
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 24px",
//               backgroundColor: "#28a745",
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//           >
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }




// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Typography, Box, Button } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = localStorage.getItem("user"); // Check if user exists
//       setIsAuthenticated(!!user); // Convert to boolean
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth); // Update when storage changes

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   // ✅ Redirect if user is not logged in
//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/login"); // Redirect to login page
//     }
//   }, [isAuthenticated, router]);

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom color="primary">
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="h6" color="textSecondary" mb={3}>
//         Get personalized medication recommendations based on your symptoms.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
//         <Link href="/diagnosis">
//           <Button
//             variant="contained"
//             color="success"
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 24px",
//               backgroundColor: "#28a745",
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//           >
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }





// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Typography, Box, Button } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setIsAuthenticated(true);
//     }
//     setLoading(false); // Mark authentication check as complete
//   }, []);

//   useEffect(() => {
//     if (!loading && !isAuthenticated) {
//       router.push("/login"); // Redirect only if check is complete
//     }
//   }, [isAuthenticated, loading, router]);

//   if (loading) return <Typography>Loading...</Typography>; // Show loading indicator

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom color="primary">
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="h6" color="textSecondary" mb={3}>
//         Get personalized medication recommendations based on your symptoms.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
//         <Link href="/diagnosis">
//           <Button
//             variant="contained"
//             color="success"
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 24px",
//               backgroundColor: "#28a745",
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//           >
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }





// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Typography, Box, Button } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = localStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth);

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/login");
//     }
//   }, [isAuthenticated, router]);

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom color="primary">
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="h6" color="textSecondary" mb={3}>
//         Get personalized medication recommendations based on your symptoms.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
//         <Link href="/diagnosis">
//           <Button
//             variant="contained"
//             color="success"
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 24px",
//               backgroundColor: "#28a745",
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//           >
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }




// //AUTHENTICATION SUCCESS
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Typography, Box, Button } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     console.log("User in localStorage (Home):", user);

//     if (!user) {
//       router.push("/login");
//     } else {
//       setIsAuthenticated(true);
//     }
//   //}, []);
// }, [router]);

//   if (!isAuthenticated) return null; // Prevent UI flicker

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom color="primary">
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="h6" color="textSecondary" mb={3}>
//         Get personalized medication recommendations based on your symptoms.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
//         <Link href="/diagnosis">
//           <Button
//             variant="contained"
//             color="success"
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 24px",
//               backgroundColor: "#28a745",
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//           >
//             Try Symptom-Based Diagnosis
//           </Button>
//         </Link>
//       </Box>
//     </Container>
//   );
// }





//BG IMAGE

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log("User in localStorage (Home):", user);

    if (!user) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/images/dashboard_bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Container sx={{ textAlign: "center", bgcolor: "rgba(255, 255, 255, 0.85)", borderRadius: 4, p: 5 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Symptom-Based Diagnosis
        </Typography>
        <Typography variant="h6" color="textSecondary" mb={3}>
          Get personalized medication recommendations based on your symptoms.
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          <Link href="/diagnosis">
            <Button
              variant="contained"
              sx={{
                fontSize: "1.2rem",
                padding: "12px 24px",
                backgroundColor: "#800000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#660000",
                },
              }}
            >
              Try Symptom-Based Diagnosis
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
