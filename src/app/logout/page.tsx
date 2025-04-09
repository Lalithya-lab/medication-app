// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function LogoutPage() {
//   const router = useRouter();

//   useEffect(() => {
//     localStorage.removeItem("user"); // ✅ Clear authentication
//     window.dispatchEvent(new Event("storage")); // ✅ Update across tabs
//     router.push("/login"); // ✅ Redirect to login
//   }, []);

//   return <p>Logging out...</p>;
// }



"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("user"); // ✅ Clear authentication
    window.dispatchEvent(new Event("storage")); // ✅ Sync logout across tabs
    router.push("/login"); // ✅ Redirect to login
  }, [router]);

  return <p>Logging out...</p>;
}
