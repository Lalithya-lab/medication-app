// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage("");

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//      });

//     if (result?.error) {
//       setMessage("Invalid email or password!");
//     } else {
//       setMessage("Login successful! Redirecting...");
//       setTimeout(() => router.push("/dashboard"), 1500); // Redirect after 1.5s
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           mt: 8,
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           boxShadow: 3,
//           borderRadius: 2,
//           bgcolor: "white",
//         }}
//       >
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//           Login
//         </Typography>
//         <form onSubmit={handleLogin} style={{ width: "100%" }}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}
//           >
//             Login
//           </Button>
//         </form>

//         {message && (
//           <Alert severity={message.includes("successful") ? "success" : "error"} sx={{ mt: 3 }}>
//             {message}
//           </Alert>
//         )}

//         <Typography sx={{ mt: 3 }}>
//           Don't have an account?{" "}
//           <a href="/register" style={{ color: "blue", fontWeight: "bold" }}>
//             Register
//           </a>
//         </Typography>
//       </Box>
//     </Container>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage("");

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (result?.error) {
//       setMessage(result.error);
//     } else {
//       setMessage("Login successful! Redirecting...");
//       setTimeout(() => router.push("/dashboard"), 2000);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           mt: 8,
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           boxShadow: 3,
//           borderRadius: 2,
//           bgcolor: "white",
//         }}
//       >
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//           Login
//         </Typography>
//         <form onSubmit={handleLogin} style={{ width: "100%" }}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             required
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "blue", "&:hover": { bgcolor: "darkblue" } }}>
//             Login
//           </Button>
//         </form>
//         {message && (
//           <Alert severity={message.includes("successful") ? "success" : "error"} sx={{ mt: 3 }}>
//             {message}
//           </Alert>
//         )}
//       </Box>
//     </Container>
//   );
// }






// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false, // Prevents automatic redirect to error page
//     });

//     if (result?.error) {
//       setError(result.error);
//     } else {
//       router.push("/dashboard"); // Redirect to dashboard or home page
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           mt: 8,
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           boxShadow: 3,
//           borderRadius: 2,
//           bgcolor: "white",
//         }}
//       >
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//           Login
//         </Typography>
//         <form onSubmit={handleLogin} style={{ width: "100%" }}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             required
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
//             Login
//           </Button>
//         </form>
//         {error && (
//           <Alert severity="error" sx={{ mt: 3 }}>
//             {error}
//           </Alert>
//         )}
//       </Box>
//     </Container>
//   );
// }




// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import Link from "next/link"; // Import Link for navigation
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false, // Prevents automatic redirect to error page
//     });

//     if (result?.error) {
//       setError(result.error);
//     } else {
//       router.push("/dashboard"); // Redirect to dashboard after successful login
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           mt: 8,
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           boxShadow: 3,
//           borderRadius: 2,
//           bgcolor: "white",
//         }}
//       >
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//           Login
//         </Typography>
//         <form onSubmit={handleLogin} style={{ width: "100%" }}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             required
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
//             Login
//           </Button>
//         </form>
//         {error && (
//           <Alert severity="error" sx={{ mt: 3 }}>
//             {error}
//           </Alert>
//         )}

//         {/* Add Link to Register Page */}
//         <Typography sx={{ mt: 2 }}>
//           Don't have an account?{" "}
//           <Link href="/register" style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}>
//             Register here
//           </Link>
//         </Typography>
//       </Box>
//     </Container>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
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

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       setMessage("Login successful ✅ Redirecting...");
//       localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
//       setTimeout(() => router.push("/dashboard"), 2000); // Redirect to dashboard
//     } else {
//       setError(data.error);
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
//         </Box>
//       </Container>
//     </Box>
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

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       setMessage("Login successful ✅ Redirecting...");
//       localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
//       setTimeout(() => router.push("/dashboard"), 2000); // Redirect to dashboard
//     } else {
//       setError(data.error);
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
          
//           {/* Register Link for Users Who Don't Have an Account */}
//           <Typography sx={{ mt: 2 }}>
//             Don't have an account?{" "}
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
//       localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
//       setTimeout(() => router.push("/dashboard"), 2000); // Redirect to dashboard
//     } catch (err) {
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

//           {/* Register Link for Users Who Don't Have an Account */}
//           <Typography sx={{ mt: 2 }}>
//             Don't have an account?{" "}
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
//       localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
//       // setTimeout(() => router.push("/dashboard"), 2000); // Redirect to dashboard
//       setTimeout(() => router.push("/"), 2000);
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

//           {/* Register Link for Users Who Don't Have an Account */}
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
//       // sessionStorage.setItem("user", JSON.stringify(data.user)); // ✅ Store user session
//       localStorage.setItem("user", JSON.stringify(data.user)); 
//       window.dispatchEvent(new Event("storage")); // ✅ Notify layout.tsx to update navbar
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

// import { useState } from "react";
// //import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function LoginPage() {
//  // const router = useRouter();
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
//       localStorage.setItem("user", JSON.stringify(data.user));
//       window.dispatchEvent(new Event("storage")); // Notify layout

//       //setTimeout(() => router.push("/"), 1000);
//       setTimeout(() => (window.location.href = "/"), 1000);

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





//AUTHENTICATED 
// "use client"; 

// import { useState } from "react";
// import Link from "next/link";
// import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

// export default function LoginPage() {
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
//       localStorage.setItem("user", JSON.stringify(data.user));
//       window.dispatchEvent(new Event("storage"));

//       setTimeout(() => (window.location.href = "/"), 1000);
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

//           <TextField fullWidth label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
//           <TextField fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />

//           <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }} onClick={handleLogin}>
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





//BG IMAGE 
"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid credentials.");
        return;
      }

      setMessage("Login successful ✅ Redirecting...");
      localStorage.setItem("user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("storage"));

      setTimeout(() => (window.location.href = "/"), 1000);
    } catch {
      setError("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('/images/login_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "green" }}>
            Login
          </Typography>

          <TextField fullWidth label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
          <TextField fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />

          <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }} onClick={handleLogin}>
            Login
          </Button>

          {message && <Alert severity="success" sx={{ mt: 3 }}>{message}</Alert>}
          {error && <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>}

          <Typography sx={{ mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link href="/register" style={{ color: "blue", textDecoration: "underline" }}>
              Register here
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
