// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
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
//       redirect: false,
//     });

//     if (result?.error) {
//       setError("Invalid email or password!");
//     } else {
//       router.push("/dashboard"); // Redirect to Dashboard
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

//         {error && (
//           <Alert severity="error" sx={{ mt: 3 }}>
//             {error}
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

// export default function RegisterPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = async () => {
//     setMessage(""); // Reset message

//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       setMessage("User registered successfully ✅");
//     } else {
//       setMessage(`Error: ${data.error}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Register</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }




//AUTHENTICATED and BG IMAGE 
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link for navigation
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setMessage("");
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("User registered successfully ✅ Redirecting...");
      setTimeout(() => router.push("/login"), 2000); // Redirect to login page after 2 seconds
    } else {
      setError(data.error);
    }
  };

  return (
    <Box
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // height: "100vh",
        // bgcolor: "#f4f4f4",
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
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "white",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "green" }}>
            Register
          </Typography>
          <TextField fullWidth label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
          <TextField fullWidth label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />
          <Button onClick={handleRegister} fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
            Register
          </Button>
          {message && <Alert severity="success" sx={{ mt: 3 }}>{message}</Alert>}
          {error && <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>}

          {/* Add Link to Login Page */}
          <Typography sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}>
              Login here
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
