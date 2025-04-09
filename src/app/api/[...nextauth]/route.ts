// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri = "your-mongodb-uri"; // Replace with your MongoDB connection string
// const client = new MongoClient(uri);

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await client.connect();
//         const usersCollection = client.db("medicationDB").collection("users");
//        // const user = await usersCollection.findOne({ email: credentials.email });
//        const { email, password } = credentials || {}; // Ensure credentials is not undefined
//        const user = await usersCollection.findOne({ email });


//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id, email: user.email };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: "your-secret-key",
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs"; // Use bcryptjs instead of bcrypt
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI; // Use .env file for security
// const client = new MongoClient(uri);

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", required: true },
//         password: { label: "Password", type: "password", required: true },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         await client.connect();
//         const usersCollection = client.db("medicationDB").collection("users");
//         const user = await usersCollection.findOne({ email: credentials.email });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id.toString(), email: user.email };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET, // Store in .env
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri: string | undefined = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error("Missing MONGODB_URI in environment variables");
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// if (!global._mongoClientPromise) {
//   client = new MongoClient(uri);
//   global._mongoClientPromise = client.connect();
// }
// clientPromise = global._mongoClientPromise;

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const client = await clientPromise;
//         const db = client.db("medicationDB");
//         const usersCollection = db.collection("users");

//         const user = await usersCollection.findOne({ email: credentials.email });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id.toString(), email: user.email };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET as string,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };





// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri: string | undefined = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error("Missing MONGODB_URI in environment variables");
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// if (!global._mongoClientPromise) {
//   client = new MongoClient(uri);
//   global._mongoClientPromise = client.connect();
// }
// clientPromise = global._mongoClientPromise;

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const client = await clientPromise;
//         const db = client.db("medicationDB");
//         const usersCollection = db.collection("users");

//         const user = await usersCollection.findOne({ email: credentials.email });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id.toString(), email: user.email };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET as string,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };




// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri: string | undefined = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error("Missing MONGODB_URI in environment variables");
// }

// const client = new MongoClient(uri);
// const clientPromise = client.connect();

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: Record<"email" | "password", string> | undefined) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const client = await clientPromise;
//         const db = client.db("medicationDB");
//         const usersCollection = db.collection("users");

//         const user = await usersCollection.findOne<{ _id: string; email: string; password: string }>({ email: credentials.email });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id.toString(), email: user.email };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET as string,
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async signIn({ user }) {
//       return !!user;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };



// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { MongoClient } from "mongodb";

// const uri: string | undefined = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error("Missing MONGODB_URI in environment variables");
// }

// const client = new MongoClient(uri);
// const clientPromise = client.connect();

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: Record<"email" | "password", string> | undefined) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const client = await clientPromise;
//         const db = client.db("medicationDB");
//         const usersCollection = db.collection("users");

//         const user = await usersCollection.findOne<{ _id: string; email: string; password: string }>({ email: credentials.email });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return { id: user._id.toString(), email: user.email };
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET as string,
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async signIn({ user }) {
//       return !!user;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };









// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// // import connectDB from "@/utils/db";
// import connectDB from "../../../utils/db"; // Relative path
// import User from "../../../models/User";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "your@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectDB();

//         const user = await User.findOne({ email: credentials?.email });
//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isMatch = await bcrypt.compare(credentials?.password, user.password);
//         if (!isMatch) {
//           throw new Error("Invalid credentials");
//         }

//         return { id: user._id, name: user.name, email: user.email };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login", // Redirect failed login attempts back to login page
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };





// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import connectDB from "../../../utils/db"; // Relative path
// import User from "../../../models/User";

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "your@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         await connectDB();

//         const user = await User.findOne({ email: credentials.email });
//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isMatch = await bcrypt.compare(credentials.password, user.password);
//         if (!isMatch) {
//           throw new Error("Invalid credentials");
//         }

//         return { id: user._id.toString(), name: user.name, email: user.email };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.sub || "";
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.sub = user.id;
//       }
//       return token;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };




import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "../../../utils/db"; // Relative path
import User from "../../../models/User";

// Extend session type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
    };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found");
        }

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) {
          throw new Error("Invalid credentials");
        }

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
