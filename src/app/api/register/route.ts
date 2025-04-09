// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI!;
// const client = new MongoClient(uri);

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
//     }

//     await client.connect();
//     const db = client.db("medicationDB");
//     const usersCollection = db.collection("users");

//     // Check if user already exists
//     const existingUser = await usersCollection.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json({ error: "User already exists" }, { status: 400 });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await usersCollection.insertOne({ email, password: hashedPassword });

//     return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

//   } catch (error) {
//     console.error("Registration Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI!;
// const client = new MongoClient(uri);

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
//     }

//     await client.connect();
//     const db = client.db("medicationDB");
//     const usersCollection = db.collection("users");

//     // Check if user already exists
//     const existingUser = await usersCollection.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json({ error: "User already exists" }, { status: 400 });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await usersCollection.insertOne({ email, password: hashedPassword });

//     return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

//   } catch (error) {
//     console.error("Registration Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error("MONGODB_URI is not defined in environment variables");
// }

// const client = new MongoClient(uri);

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     // Debugging log
//     console.log("Received registration request:", { email });

//     // Validate email and password
//     if (!email || !password) {
//       return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
//     }

//     await client.connect();
//     const db = client.db("medicationDB");
//     const usersCollection = db.collection("users");

//     // Check if user already exists
//     const existingUser = await usersCollection.findOne({ email });
//     if (existingUser) {
//       await client.close();
//       return NextResponse.json({ error: "User already exists" }, { status: 400 });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await usersCollection.insertOne({ email, password: hashedPassword });

//     // Close the connection after use
//     await client.close();

//     return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

//   } catch (error) {
//     console.error("Registration Error:", error);
//     await client.close(); // Ensure connection is closed even on errors
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server"; // ✅ Ensure this is only imported once
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    console.log("Received registration request:", { email });

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("medicationDB");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      await client.close();
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await usersCollection.insertOne({ email, password: hashedPassword });

    await client.close();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

  } catch (error) {
    console.error("Registration Error:", error);
    await client.close();
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
