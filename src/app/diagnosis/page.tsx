// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert,
//   Chip,
// } from "@mui/material";

// export default function DiagnosisPage() {
//   const [symptoms, setSymptoms] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleAddSymptom = () => {
//     if (inputValue.trim() && !symptoms.includes(inputValue.trim())) {
//       setSymptoms([...symptoms, inputValue.trim()]);
//       setInputValue("");
//     }
//   };

//   const handleRemoveSymptom = (symptom: string) => {
//     setSymptoms(symptoms.filter((s) => s !== symptom));
//   };

//   const handleSubmit = () => {
//     if (symptoms.length === 0) {
//       setError("⚠ Please enter at least one symptom.");
//       return;
//     }
//     router.push(`/recommendation?symptoms=${encodeURIComponent(symptoms.join(","))}`);
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your symptoms to get possible conditions.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter a symptom"
//           variant="outlined"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleAddSymptom()}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="primary" onClick={handleAddSymptom}>
//           Add Symptom
//         </Button>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, maxWidth: 400 }}>
//           {symptoms.map((symptom, index) => (
//             <Chip key={index} label={symptom} onDelete={() => handleRemoveSymptom(symptom)} />
//           ))}
//         </Box>
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Diagnosis
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }









// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert,
//   Chip,
// } from "@mui/material";

// export default function DiagnosisPage() {
//   const [symptoms, setSymptoms] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   // ✅ Check if user is logged in, otherwise redirect to login page
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       router.push("/login");
//     }
//   }, []);

//   const handleAddSymptom = () => {
//     if (inputValue.trim() && !symptoms.includes(inputValue.trim())) {
//       setSymptoms([...symptoms, inputValue.trim()]);
//       setInputValue("");
//     }
//   };

//   const handleRemoveSymptom = (symptom: string) => {
//     setSymptoms(symptoms.filter((s) => s !== symptom));
//   };

//   const handleSubmit = async () => {
//     if (symptoms.length === 0) {
//       setError("⚠ Please enter at least one symptom.");
//       return;
//     }

//     try {
//       // ✅ Send symptoms to the API for diagnosis
//       const response = await fetch("/api/symptoms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ symptoms }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (data.conditions.length > 0) {
//           // ✅ Correctly pass diagnosed conditions to recommendations page
//           router.push(`/recommendation?conditions=${encodeURIComponent(data.conditions.join(","))}`);
//         } else {
//           setError("No matching conditions found.");
//         }
//       } else {
//         setError(data.error || "Failed to fetch conditions.");
//       }
//     } catch (err) {
//       setError("Server error. Please try again.");
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your symptoms to get possible conditions.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter a symptom"
//           variant="outlined"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleAddSymptom()}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="primary" onClick={handleAddSymptom}>
//           Add Symptom
//         </Button>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, maxWidth: 400 }}>
//           {symptoms.map((symptom, index) => (
//             <Chip key={index} label={symptom} onDelete={() => handleRemoveSymptom(symptom)} />
//           ))}
//         </Box>
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Diagnosis
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }





// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert,
//   Chip,
// } from "@mui/material";

// export default function DiagnosisPage() {
//   const [symptoms, setSymptoms] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   // ✅ Check if user is logged in, otherwise redirect to login page
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       router.replace("/login"); // ✅ Redirect properly
//     }
//   }, [router]); // ✅ Added 'router' to dependency array to fix ESLint warning

//   const handleAddSymptom = () => {
//     if (inputValue.trim() && !symptoms.includes(inputValue.trim())) {
//       setSymptoms([...symptoms, inputValue.trim()]);
//       setInputValue("");
//     }
//   };

//   const handleRemoveSymptom = (symptom: string) => {
//     setSymptoms(symptoms.filter((s) => s !== symptom));
//   };

//   const handleSubmit = async () => {
//     if (symptoms.length === 0) {
//       setError("⚠ Please enter at least one symptom.");
//       return;
//     }

//     try {
//       // ✅ Send symptoms to API for diagnosis
//       const response = await fetch("/api/symptoms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ symptoms }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (data.conditions && data.conditions.length > 0) {
//           // ✅ Correctly pass diagnosed conditions to recommendations page
//           router.push(`/recommendation?conditions=${encodeURIComponent(data.conditions.join(","))}`);
//         } else {
//           setError("⚠ No matching conditions found. Try different symptoms.");
//         }
//       } else {
//         setError(data.error || "⚠ Failed to fetch conditions.");
//       }
//     } catch {
//       setError("⚠ Server error. Please try again.");
//     }
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your symptoms to get possible conditions.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter a symptom"
//           variant="outlined"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleAddSymptom()}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="primary" onClick={handleAddSymptom}>
//           Add Symptom
//         </Button>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, maxWidth: 400 }}>
//           {symptoms.map((symptom, index) => (
//             <Chip key={index} label={symptom} onDelete={() => handleRemoveSymptom(symptom)} />
//           ))}
//         </Box>
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Diagnosis
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert,
//   Chip,
//   CircularProgress,
// } from "@mui/material";

// export default function DiagnosisPage() {
//   const [symptoms, setSymptoms] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true); // ✅ State for authentication check
//   const router = useRouter();

//   // ✅ Improved authentication check
//   useEffect(() => {
//     // const user = sessionStorage.getItem("user"); // ⬅ Try sessionStorage instead
//     const user = localStorage.getItem("user");
//     //const user = sessionStorage.getItem("user");


//     if (!user) {
//       router.replace("/login");
//     } else {
//       setLoading(false); // ✅ Only render content after login check
//     }
//   }, [router]);

//   const handleAddSymptom = () => {
//     if (inputValue.trim() && !symptoms.includes(inputValue.trim())) {
//       setSymptoms([...symptoms, inputValue.trim()]);
//       setInputValue("");
//     }
//   };

//   const handleRemoveSymptom = (symptom: string) => {
//     setSymptoms(symptoms.filter((s) => s !== symptom));
//   };

//   const handleSubmit = async () => {
//     if (symptoms.length === 0) {
//       setError("⚠ Please enter at least one symptom.");
//       return;
//     }

//     try {
//       const response = await fetch("/api/symptoms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ symptoms }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (data.conditions && data.conditions.length > 0) {
//           // router.push(`/recommendation?conditions=${encodeURIComponent(data.conditions.join(","))}`);
//           router.push(`/recommendation?conditions=${encodeURIComponent(data.conditions.join(","))}`);
//         } else {
//           setError("⚠ No matching conditions found. Try different symptoms.");
//         }
//       } else {
//         setError(data.error || "⚠ Failed to fetch conditions.");
//       }
//     } catch {
//       setError("⚠ Server error. Please try again.");
//     }
//   };

//   // ✅ Show loading screen until authentication check is done
//   if (loading) {
//     return (
//       <Container sx={{ textAlign: "center", mt: 8 }}>
//         <CircularProgress />
//         <Typography variant="h6" sx={{ mt: 2 }}>Checking login...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your symptoms to get possible conditions.
//       </Typography>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter a symptom"
//           variant="outlined"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleAddSymptom()}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//         <Button variant="contained" color="primary" onClick={handleAddSymptom}>
//           Add Symptom
//         </Button>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, maxWidth: 400 }}>
//           {symptoms.map((symptom, index) => (
//             <Chip key={index} label={symptom} onDelete={() => handleRemoveSymptom(symptom)} />
//           ))}
//         </Box>
//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Diagnosis
//         </Button>
//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }



//AUTHENTICATED
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert,
//   Chip,
//   CircularProgress,
// } from "@mui/material";

// export default function DiagnosisPage() {
//   const [symptoms, setSymptoms] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       router.replace("/login");
//     } else {
//       setLoading(false);
//     }
//   }, [router]);

//   const handleAddSymptom = () => {
//     const trimmed = inputValue.trim();
//     if (trimmed && !symptoms.includes(trimmed)) {
//       setSymptoms([...symptoms, trimmed]);
//       setInputValue("");
//     }
//   };

//   const handleRemoveSymptom = (symptom: string) => {
//     setSymptoms(symptoms.filter((s) => s !== symptom));
//   };

//   const handleSubmit = async () => {
//     setError("");
//     if (symptoms.length === 0) {
//       setError("⚠ Please enter at least one symptom.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/symptoms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ symptoms }),
//       });

//       const data = await res.json();

//       if (res.ok && data.conditions?.length > 0) {
//         const query = encodeURIComponent(data.conditions.join(","));
//         router.push(`/recommendation?conditions=${query}`);
//       } else {
//         setError("⚠ No matching conditions found. Try different symptoms.");
//       }
//     } catch {
//       setError("⚠ Server error. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <Container sx={{ textAlign: "center", mt: 8 }}>
//         <CircularProgress />
//         <Typography variant="h6" sx={{ mt: 2 }}>
//           Checking login...
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Symptom-Based Diagnosis
//       </Typography>
//       <Typography variant="body1" color="textSecondary" mb={3}>
//         Enter your symptoms to get possible conditions.
//       </Typography>

//       <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//         <TextField
//           label="Enter a symptom"
//           variant="outlined"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleAddSymptom()}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />

//         <Button variant="contained" color="primary" onClick={handleAddSymptom}>
//           Add Symptom
//         </Button>

//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, maxWidth: 400 }}>
//           {symptoms.map((symptom, idx) => (
//             <Chip key={idx} label={symptom} onDelete={() => handleRemoveSymptom(symptom)} />
//           ))}
//         </Box>

//         <Button variant="contained" color="success" onClick={handleSubmit}>
//           Get Diagnosis
//         </Button>

//         {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
//       </Box>
//     </Container>
//   );
// }






//bg image
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Chip,
  CircularProgress,
} from "@mui/material";

export default function DiagnosisPage() {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleAddSymptom = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !symptoms.includes(trimmed)) {
      setSymptoms([...symptoms, trimmed]);
      setInputValue("");
    }
  };

  const handleRemoveSymptom = (symptom: string) => {
    setSymptoms(symptoms.filter((s) => s !== symptom));
  };

  const handleSubmit = async () => {
    setError("");
    if (symptoms.length === 0) {
      setError("⚠ Please enter at least one symptom.");
      return;
    }

    try {
      const res = await fetch("/api/symptoms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      const data = await res.json();

      if (res.ok && data.conditions?.length > 0) {
        const query = encodeURIComponent(data.conditions.join(","));
        router.push(`/recommendation?conditions=${query}`);
      } else {
        setError("⚠ No matching conditions found. Try different symptoms.");
      }
    } catch {
      setError("⚠ Server error. Please try again.");
    }
  };

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 8 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Checking login...
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('/images/diagnosis_bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ textAlign: "center", mt: 8, bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Symptom-Based Diagnosis
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          Enter your symptoms to get possible conditions.
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <TextField
            label="Enter a symptom"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddSymptom()}
            fullWidth
            sx={{ maxWidth: 400 }}
          />

          <Button variant="contained" color="primary" onClick={handleAddSymptom}>
            Add Symptom
          </Button>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, maxWidth: 400 }}>
            {symptoms.map((symptom, idx) => (
              <Chip key={idx} label={symptom} onDelete={() => handleRemoveSymptom(symptom)} />
            ))}
          </Box>

          <Button variant="contained" color="success" onClick={handleSubmit}>
            Get Diagnosis
          </Button>

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </Box>
      </Container>
    </Box>
  );
}
