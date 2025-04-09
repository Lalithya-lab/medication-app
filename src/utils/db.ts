// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI || "";

// const connectDB = async () => {
//   if (mongoose.connections[0].readyState) return;
//   try {
//     await mongoose.connect(MONGO_URI, { dbName: "your_db_name" });
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//     throw new Error("Database connection failed!");
//   }
// };

// export default connectDB;



// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI; // Read from .env

// const connectDB = async () => {
//   if (!MONGO_URI) {
//     throw new Error("MONGO_URI is not defined in .env");
//   }

//   if (mongoose.connections[0].readyState) return;

//   try {
//     await mongoose.connect(MONGO_URI, {
//       dbName: "your_db_name",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error);
//     throw error;
//   }
// };

// export default connectDB;




import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected");
      return;
    }

    await mongoose.connect(MONGO_URI, {
      dbName: "medicationDB",
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
