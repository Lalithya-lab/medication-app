// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import connectDB from "@/utils/db";
// import User from "../../../models/User"; // Make sure you have a User model

// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const { email, password } = await req.json();

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//     }

//     return NextResponse.json({ message: "Login successful", user }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import connectDB from "@/utils/db";
import connectDB from "../../../utils/db";
import User from "../../../models/User"; // Ensure you have a User model

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
