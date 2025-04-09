// import "./globals.css";
// // import Header from "@/components/Header";
// import Header from "./../components/Header";
// // import Footer from "@/components/Footer";
// import Footer from "./../components/Footer";
// import { CssBaseline, Container } from "@mui/material";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <CssBaseline />
//         <Header />
//         <Container maxWidth="md">
//           {children}
//         </Container>
//         <Footer />
//       </body>
//     </html>
//   );
// }



// "use client";

// import Link from "next/link";
// import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsAuthenticated(!!user);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     router.push("/login");
//   };

//   return (
//     <>
//       <AppBar position="static" sx={{ bgcolor: "green" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Medication Finder
//           </Typography>
//           <Box>
//             <Link href="/" passHref>
//               <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//             </Link>
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login" passHref>
//                   <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//                 </Link>
//                 <Link href="/register" passHref>
//                   <Button color="inherit">Register</Button>
//                 </Link>
//               </>
//             ) : (
//               <Button color="inherit" onClick={handleLogout}>Logout</Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <main>{children}</main>
//     </>
//   );
// }


// "use client";

// import Link from "next/link";
// import { AppBar, Toolbar, Button, Typography, Box, Container } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     setIsAuthenticated(!!user);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     router.push("/login");
//   };

//   return (
//     <html lang="en">
//       <body>
//         <AppBar position="static" sx={{ bgcolor: "MediumVioletRed" }}>
//           <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               Medication Finder
//             </Typography>
//             <Box>
//               <Link href="/" passHref>
//                 <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//               </Link>
//               {!isAuthenticated ? (
//                 <>
//                   <Link href="/login" passHref>
//                     <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//                   </Link>
//                   <Link href="/register" passHref>
//                     <Button color="inherit">Register</Button>
//                   </Link>
//                 </>
//               ) : (
//                 <Button color="inherit" onClick={handleLogout}>Logout</Button>
//               )}
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Container sx={{ mt: 3 }}>
//           {children}
//         </Container>
//       </body>
//     </html>
//   );
// }



// "use client";
// import Link from "next/link";
// import { AppBar, Toolbar, Button, Typography, Box, Container } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = localStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth); // ✅ Listen for login/logout changes

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     window.dispatchEvent(new Event("storage")); // ✅ Ensure update on all tabs
//     router.push("/login");
//   };

//   return (
//     <html lang="en">
//       <body>
//         <AppBar position="static" sx={{ bgcolor: "MediumVioletRed" }}>
//           <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               Medication Finder
//             </Typography>
//             <Box>
//               <Link href="/" passHref>
//                 <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//               </Link>
//               {!isAuthenticated ? (
//                 <>
//                   <Link href="/login" passHref>
//                     <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//                   </Link>
//                   <Link href="/register" passHref>
//                     <Button color="inherit">Register</Button>
//                   </Link>
//                 </>
//               ) : (
//                 <Button color="inherit" onClick={handleLogout}>Logout</Button>
//               )}
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Container sx={{ mt: 3 }}>{children}</Container>
//       </body>
//     </html>
//   );
// }





// "use client";
// import Link from "next/link";
// import { AppBar, Toolbar, Button, Typography, Box, Container } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = sessionStorage.getItem("user"); // ✅ Use sessionStorage
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth); // ✅ Listen for login/logout changes

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("user");
//     setIsAuthenticated(false);
//     window.dispatchEvent(new Event("storage")); // ✅ Trigger update
//     router.push("/login");
//   };

//   return (
//     <html lang="en">
//       <body>
//         <AppBar position="static" sx={{ bgcolor: "MediumVioletRed" }}>
//           <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               Medication Finder
//             </Typography>
//             <Box>
//               <Link href="/" passHref>
//                 <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//               </Link>
//               {!isAuthenticated ? (
//                 <>
//                   <Link href="/login" passHref>
//                     <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//                   </Link>
//                   <Link href="/register" passHref>
//                     <Button color="inherit">Register</Button>
//                   </Link>
//                 </>
//               ) : (
//                 <Button color="inherit" onClick={handleLogout}>Logout</Button>
//               )}
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Container sx={{ mt: 3 }}>{children}</Container>
//       </body>
//     </html>
//   );
// }




// "use client";

// import Link from "next/link";
// import { AppBar, Toolbar, Button, Typography, Box, Container } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = () => {
//       const user = sessionStorage.getItem("user");
//       setIsAuthenticated(!!user);
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth); // ✅ Listen for login/logout changes

//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("user");
//     setIsAuthenticated(false);
//     window.dispatchEvent(new Event("storage")); // ✅ Trigger navbar update
//     router.push("/login");
//   };

//   return (
//     <html lang="en">
//       <body>
//         <AppBar position="static" sx={{ bgcolor: "MediumVioletRed" }}>
//           <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               Medication Finder
//             </Typography>
//             <Box>
//               <Link href="/" passHref>
//                 <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
//               </Link>
//               {!isAuthenticated ? (
//                 <>
//                   <Link href="/login" passHref>
//                     <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
//                   </Link>
//                   <Link href="/register" passHref>
//                     <Button color="inherit">Register</Button>
//                   </Link>
//                 </>
//               ) : (
//                 <Button color="inherit" onClick={handleLogout}>Logout</Button>
//               )}
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Container sx={{ mt: 3 }}>{children}</Container>
//       </body>
//     </html>
//   );
// }



//ENTIRE CODE REPLACE
// "use client";

// import { Container } from "@mui/material";
// import Navbar from "@/components/Navbar"; // ✅ use the dynamic navbar

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar /> {/* ✅ Show dynamic Navbar */}
//         <Container sx={{ mt: 3 }}>{children}</Container>
//       </body>
//     </html>
//   );
// }




//CHATBOT
"use client";

import { Container } from "@mui/material";
import Navbar from "@/components/Navbar"; // ✅ Keep the dynamic navbar
import ChatbotButton from "@/components/ChatbotButton"; // ✅ Import floating chatbot button

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Show dynamic Navbar */}
        <Container sx={{ mt: 3 }}>{children}</Container>
        <ChatbotButton /> {/* ✅ Add floating chatbot button */}
      </body>
    </html>
  );
}
