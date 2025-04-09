// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { message } = await req.json();

//   const apiKey = process.env.OPENAI_API_KEY;

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }],
//     }),
//   });

//   const data = await response.json();

//   return NextResponse.json({
//     reply: data.choices[0]?.message?.content || "Sorry, I didn't understand that.",
//   });
// }



// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     if (!message) {
//       return NextResponse.json({ error: "No message provided." }, { status: 400 });
//     }

//     const apiKey = process.env.OPENAI_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json({ error: "API key is missing." }, { status: 500 });
//     }

//     const res = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: message }],
//       }),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.error("OpenAI API Error:", errorText);
//       return NextResponse.json({ error: "OpenAI API request failed." }, { status: res.status });
//     }

//     const data = await res.json();

//     return NextResponse.json({
//       reply: data?.choices?.[0]?.message?.content || "Sorry, I didn't understand that.",
//     });
//   } catch (error) {
//     console.error("Server error:", error);
//     return NextResponse.json({ error: "Server error." }, { status: 500 });
//   }
// }





// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const result = await model.generateContent(message);
//     const response = await result.response;
//     const text = response.text();

//     return NextResponse.json({ reply: text });
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return NextResponse.json({ reply: "Sorry, I couldn't process that.", error }, { status: 500 });
//   }
// }






//api key limit
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Set up Gemini AI
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// // Basic in-memory rate limiter (resets when server restarts)
// let requestCount = 0;
// const MAX_REQUESTS = 10;

// export async function POST(req: Request) {
//   if (requestCount >= MAX_REQUESTS) {
//     return NextResponse.json(
//       { reply: "🔒 You've reached the request limit for this session. Please try again later." },
//       { status: 429 }
//     );
//   }

//   try {
//     const { message } = await req.json();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const result = await model.generateContent(message);
//     const response = await result.response;
//     const text = response.text();

//     // Increment usage count
//     requestCount++;

//     return NextResponse.json({ reply: text });
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return NextResponse.json({ reply: "Sorry, I couldn't process that.", error }, { status: 500 });
//   }
// }





//10 req per user
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Set up Gemini AI
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// // In-memory store for rate limits (resets when server restarts)
// const userRequests = new Map<string, number>();
// const MAX_REQUESTS = 10;

// export async function POST(req: Request) {
//   const ip = req.headers.get("x-forwarded-for") || "unknown"; // Try to get user IP

//   const currentCount = userRequests.get(ip) || 0;

//   if (currentCount >= MAX_REQUESTS) {
//     return NextResponse.json(
//       { reply: "🔒 You've reached the 10-request limit for this session. Please try again later." },
//       { status: 429 }
//     );
//   }

//   try {
//     const { message } = await req.json();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const result = await model.generateContent(message);
//     const response = await result.response;
//     const text = response.text();

//     // Increment per-user usage
//     userRequests.set(ip, currentCount + 1);

//     return NextResponse.json({ reply: text });
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return NextResponse.json({ reply: "Sorry, I couldn't process that.", error }, { status: 500 });
//   }
// }





//10 REQUESTS PER HOUR BY A USER
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Track each user's request count and time
type RateLimit = {
  count: number;
  firstRequestTime: number;
};

const userRequests = new Map<string, RateLimit>();
const MAX_REQUESTS = 10;
const TIME_WINDOW_MS = 60 * 60 * 1000; // 1 hour

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown"; // or use real userID if logged in
  const currentTime = Date.now();

  const userData = userRequests.get(ip);

  // If user already made requests
  if (userData) {
    const { count, firstRequestTime } = userData;

    if (currentTime - firstRequestTime < TIME_WINDOW_MS) {
      // If under 1 hour
      if (count >= MAX_REQUESTS) {
        return NextResponse.json(
          { reply: "🔒 You've reached your hourly request limit. Try again later." },
          { status: 429 }
        );
      } else {
        userRequests.set(ip, { count: count + 1, firstRequestTime });
      }
    } else {
      // Reset count after 1 hour
      userRequests.set(ip, { count: 1, firstRequestTime: currentTime });
    }
  } else {
    // First time user
    userRequests.set(ip, { count: 1, firstRequestTime: currentTime });
  }

  // If request allowed, call Gemini API
  try {
    const { message } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ reply: "Sorry, I couldn't process that.", error }, { status: 500 });
  }
}
