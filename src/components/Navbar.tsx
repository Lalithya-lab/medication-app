// "use client";
// import { useState, useEffect } from "react";
// import { AppBar, Toolbar, Button, Typography } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
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

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     router.push("/login"); // Redirect to login page
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Medication App
//         </Typography>
//         <Link href="/">
//           <Button color="inherit">Home</Button>
//         </Link>
//         {isAuthenticated ? (
//           <Button color="inherit" onClick={handleLogout}>
//             Logout
//           </Button>
//         ) : (
//           <Link href="/login">
//             <Button color="inherit">Login</Button>
//           </Link>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }





// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setMessage("");
//     setError("");

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Invalid credentials.");
//         return;
//       }

//       setMessage("Login successful ✅ Redirecting...");
//       localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Store user session
//       window.dispatchEvent(new Event("storage")); // ✅ Notify Navbar to update

//       setTimeout(() => router.push("/"), 1000); // ✅ Redirect after login
//     } catch {
//       setError("Failed to connect to the server. Please try again.");
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", bgcolor: "#f4f4f4" }}>
//       <Container maxWidth="sm">
//         <Box sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
//           <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "green" }}>
//             Login
//           </Typography>
//           <TextField fullWidth label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
//           <TextField fullWidth label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />
//           <Button onClick={handleLogin} fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
//             Login
//           </Button>
//           {message && <Alert severity="success" sx={{ mt: 3 }}>{message}</Alert>}
//           {error && <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>}

//           <Typography sx={{ mt: 2 }}>
//             Don&apos;t have an account?{" "}
//             <Link href="/register" style={{ color: "blue", textDecoration: "underline" }}>
//               Register here
//             </Link>
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }





// "use client";
// import { useState, useEffect } from "react";
// import { AppBar, Toolbar, Button, Typography } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
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

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     router.push("/login");
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Medication App
//         </Typography>
//         <Link href="/">
//           <Button color="inherit">Home</Button>
//         </Link>
//         {isAuthenticated ? (
//           <Button color="inherit" onClick={handleLogout}>
//             Logout
//           </Button>
//         ) : (
//           <Link href="/login">
//             <Button color="inherit">Login</Button>
//           </Link>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }




// "use client";
// import { useEffect, useState } from "react";
// import { AppBar, Toolbar, Button, Typography } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     console.log("User in localStorage (Navbar):", user);
//     setIsAuthenticated(!!user);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     router.push("/login");
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Medication App
//         </Typography>
//         <Link href="/">
//           <Button color="inherit">Home</Button>
//         </Link>
//         {isAuthenticated ? (
//           <Button color="inherit" onClick={handleLogout}>
//             Logout
//           </Button>
//         ) : (
//           <Link href="/login">
//             <Button color="inherit">Login</Button>
//           </Link>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       //const user = sessionStorage.getItem("user");
//       const user = localStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth(); // run initially
//     window.addEventListener("storage", checkAuth); // listen for login/logout events

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleLogout = () => {
//     //sessionStorage.removeItem("user");
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     window.dispatchEvent(new Event("storage")); // notify others
//     router.push("/login");
//   };

//   return (
//     <AppBar position="static" sx={{ bgcolor: "MediumVioletRed" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Medication Finder
//         </Typography>
//         <Box>
//           <Link href="/" passHref>
//             <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//           </Link>
//           {!isAuthenticated ? (
//             <>
//               <Link href="/login" passHref>
//                 <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//               </Link>
//               <Link href="/register" passHref>
//                 <Button color="inherit">Register</Button>
//               </Link>
//             </>
//           ) : (
//             <Button color="inherit" onClick={handleLogout}>Logout</Button>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }





//AUTHENTICATED
// "use client";

// import { useEffect, useState } from "react";
// import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
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

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     window.dispatchEvent(new Event("storage"));
//     router.push("/login");
//   };

//   return (
//     <AppBar position="static" sx={{ bgcolor: "DeepPurple" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Medication Finder
//         </Typography>
//         <Box>
//           <Link href="/" passHref>
//             <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//           </Link>
//           {!isAuthenticated ? (
//             <>
//               <Link href="/login" passHref>
//                 <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//               </Link>
//               <Link href="/register" passHref>
//                 <Button color="inherit">Register</Button>
//               </Link>
//             </>
//           ) : (
//             <Button color="inherit" onClick={handleLogout}>Logout</Button>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }




//NavBar colour
"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      setIsAuthenticated(!!user);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("storage"));
    router.push("/login");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#191970" }}> {/* Royal Blue */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00FA9A" }}>
          Medication Finder
        </Typography>
        <Box>
          <Link href="/" passHref>
            <Button sx={{ color: "white", mr: 2 }}>Home</Button>
          </Link>
          {!isAuthenticated ? (
            <>
              <Link href="/login" passHref>
                <Button sx={{ color: "white", mr: 2 }}>Login</Button>
              </Link>
              <Link href="/register" passHref>
                <Button sx={{ color: "white" }}>Register</Button>
              </Link>
            </>
          ) : (
            <Button sx={{ color: "white" }} onClick={handleLogout}>Logout</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
