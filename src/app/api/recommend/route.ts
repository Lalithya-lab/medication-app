// import { NextResponse } from "next/server";

// // Sample database of conditions and their recommendations
// const recommendations: Record<string, { natural: string[]; english: string[] }> = {
//   fever: {
//     natural: ["Drink ginger tea", "Stay hydrated", "Use honey & lemon"],
//     english: ["Take Paracetamol", "Use Ibuprofen", "Stay hydrated"],
//   },
//   cold: {
//     natural: ["Drink warm herbal tea", "Use steam inhalation", "Eat garlic"],
//     english: ["Take Antihistamines", "Use nasal spray", "Take Vitamin C"],
//   },
//   headache: {
//     natural: ["Apply peppermint oil", "Use a cold compress", "Rest in a dark room"],
//     english: ["Take Aspirin", "Use Ibuprofen", "Drink enough water"],
//   },
// };

// // Handle GET request
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const condition = searchParams.get("condition")?.toLowerCase() || "unknown";

//   // Ensure the condition exists in recommendations
//   if (!(condition in recommendations)) {
//     return NextResponse.json({
//       condition,
//       recommendations: {
//         natural: ["No recommendations available"],
//         english: ["Consult a doctor"],
//       },
//     });
//   }

//   return NextResponse.json({ condition, recommendations: recommendations[condition] });
// }





// import { NextResponse } from "next/server";

// const recommendations = {
//   fever: {
//     natural: ["Drink ginger tea", "Stay hydrated", "Use honey & lemon"],
//     english: ["Take Paracetamol", "Use Ibuprofen", "Stay hydrated"],
//   },
//   cold: {
//     natural: ["Drink warm herbal tea", "Use steam inhalation", "Eat garlic"],
//     english: ["Take Antihistamines", "Use nasal spray", "Take Vitamin C"],
//   },
//   headache: {
//     natural: ["Apply peppermint oil", "Use a cold compress", "Rest in a dark room"],
//     english: ["Take Aspirin", "Use Ibuprofen", "Drink enough water"],
//   },
// };

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const condition = searchParams.get("condition")?.toLowerCase() || "unknown";

//   const result = recommendations[condition] || {
//     natural: ["No recommendations available"],
//     english: ["Consult a doctor"],
//   };

//   return NextResponse.json({ condition, recommendations: result });
// }


// import { NextResponse } from "next/server";

// const recommendations: Record<string, { natural: string[]; english: string[] }> = {
//   fever: {
//     natural: ["Drink ginger tea", "Stay hydrated", "Use honey & lemon"],
//     english: ["Take Paracetamol", "Use Ibuprofen", "Stay hydrated"],
//   },
//   cold: {
//     natural: ["Drink warm herbal tea", "Use steam inhalation", "Eat garlic"],
//     english: ["Take Antihistamines", "Use nasal spray", "Take Vitamin C"],
//   },
//   headache: {
//     natural: ["Apply peppermint oil", "Use a cold compress", "Rest in a dark room"],
//     english: ["Take Aspirin", "Use Ibuprofen", "Drink enough water"],
//   },
// };

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const condition = searchParams.get("condition")?.toLowerCase() || "unknown";

//   // ✅ Check if the condition exists in recommendations
//   if (!recommendations[condition]) {
//     return NextResponse.json({
//       condition,
//       recommendations: {
//         natural: ["No recommendations available"],
//         english: ["Consult a doctor"],
//       },
//     });
//   }

//   return NextResponse.json({
//     condition,
//     recommendations: recommendations[condition], // ✅ Safe to access
//   });
// }









// import { NextResponse } from "next/server";

// const recommendationsDB: Record<string, { natural: string; english: string }> = {
//   Flu: { natural: "Ginger tea, honey, and rest.", english: "Paracetamol and fluids." },
//   "Common Cold": { natural: "Garlic soup, Vitamin C, and sleep.", english: "Antihistamines and nasal spray." },
//   Migraine: { natural: "Peppermint oil, magnesium, hydration.", english: "Ibuprofen or Triptans." },
// };

// export async function POST(req: Request) {
//   try {
//     const { condition } = await req.json();

//     if (!condition || !recommendationsDB[condition]) {
//       return NextResponse.json({ error: "No recommendations available." }, { status: 404 });
//     }

//     return NextResponse.json(recommendationsDB[condition]);
//   } catch (error) {
//     return NextResponse.json({ error: "Server error." }, { status: 500 });
//   }
// }





// import { NextResponse } from "next/server";

// const recommendationsDB: Record<
//   string,
//   { 
//     natural: { remedy: string; image: string }; 
//     english: { remedy: string; image: string } 
//   }
// > = {
//   Flu: {
//     natural: { remedy: "Ginger tea, honey, and rest.", image: "/images/flu_natural.png" },
//     english: { remedy: "Paracetamol and fluids.", image: "/images/flu_medicine.png" },
//   },
//   "Common Cold": {
//     natural: { remedy: "Garlic soup, Vitamin C, and sleep.", image: "/images/cold_natural.png" },
//     english: { remedy: "Antihistamines and nasal spray.", image: "/images/cold_medicine.png" },
//   },
//   Migraine: {
//     natural: { remedy: "Peppermint oil, magnesium, hydration.", image: "/images/migraine_natural.png" },
//     english: { remedy: "Ibuprofen or Triptans.", image: "/images/migraine_medicine.png" },
//   },
// };

// export async function POST(req: Request) {
//   try {
//     const { condition } = await req.json();

//     if (!condition || !recommendationsDB[condition]) {
//       return NextResponse.json({ error: "No recommendations available." }, { status: 404 });
//     }

//     return NextResponse.json(recommendationsDB[condition]);
//   } catch (error) {
//     return NextResponse.json({ error: "Server error." }, { status: 500 });
//   }
// }



// import { NextResponse } from "next/server";

// const recommendationsDB: Record<string, { natural: { remedy: string; image: string }; english: { remedy: string; image: string } }> = {
//   Flu: { 
//     natural: { remedy: "Ginger tea, honey, and rest.", image: "/images/ginger_tea.jpg" }, 
//     english: { remedy: "Paracetamol and fluids.", image: "/images/paracetamol.jpg" } 
//   },
//   "Common Cold": { 
//     natural: { remedy: "Garlic soup, Vitamin C, and sleep.", image: "/images/garlic_soup.jpg" }, 
//     english: { remedy: "Antihistamines and nasal spray.", image: "/images/nasal_spray.jpg" } 
//   },
//   Migraine: { 
//     natural: { remedy: "Peppermint oil, magnesium, hydration.", image: "/images/peppermint_oil.jpg" }, 
//     english: { remedy: "Ibuprofen or Triptans.", image: "/images/ibuprofen.jpg" } 
//   }
// };

// export async function POST(req: Request) {
//   try {
//     const { condition } = await req.json();

//     if (!condition || !recommendationsDB[condition]) {
//       return NextResponse.json({ error: "No recommendations available." }, { status: 404 });
//     }

//     return NextResponse.json(recommendationsDB[condition]);
//   } catch (error) {
//     return NextResponse.json({ error: "Server error." }, { status: 500 });
//   }
// }





// import { NextResponse } from "next/server";

// const recommendationsDB: Record<string, { 
//   natural: { remedy: string; image: string }; 
//   english: { remedy: string; image: string } 
// }> = {
//   Flu: { 
//     natural: { remedy: "Ginger tea, honey, and rest.", image: "/images/ginger_tea.jpg" }, 
//     english: { remedy: "Paracetamol and fluids.", image: "/images/paracetamol.jpg" } 
//   },
//   "Common Cold": { 
//     natural: { remedy: "Garlic soup, Vitamin C, and sleep.", image: "/images/garlic_soup.jpg" }, 
//     english: { remedy: "Antihistamines and nasal spray.", image: "/images/nasal_spray.jpg" } 
//   },
//   Malaria: {
//     natural: { remedy: "Neem leaves, papaya leaf extract.", image: "/images/neem_leaves.jpg" },
//     english: { remedy: "Chloroquine, artemisinin-based therapy.", image: "/images/chloroquine.jpg" }
//   },
//   "COVID-19": {
//     natural: { remedy: "Steam inhalation, turmeric milk.", image: "/images/steam_inhalation.jpg" },
//     english: { remedy: "Antiviral medications, oxygen therapy.", image: "/images/antiviral_meds.jpg" }
//   }
// };

// export async function POST(req: Request) {
//   try {
//     const { condition } = await req.json();

//     if (!condition) {
//       return NextResponse.json({ error: "No condition provided." }, { status: 400 });
//     }

//     //const conditionsArray = condition.split(",").map(c => c.trim());
//     const conditionsArray = condition.split(",").map((c: string) => c.trim());
//     const matchedRecommendations = conditionsArray
//       .map(c => recommendationsDB[c])
//       .filter(Boolean);

//     if (matchedRecommendations.length === 0) {
//       return NextResponse.json({ error: "No recommendations available." }, { status: 404 });
//     }

//     return NextResponse.json(matchedRecommendations);
//   } catch (error) {
//     console.error("Error in recommend API:", error); // ✅ Properly use 'error'
//     return NextResponse.json({ error: "Server error." }, { status: 500 });
//   }
// }



//WORKING CODE
import { NextResponse } from "next/server";

const recommendationsDB: Record<string, { 
  natural: { remedy: string; image: string }; 
  english: { remedy: string; image: string } 
}> = {
  Flu: { 
    natural: { remedy: "Ginger tea, honey, and rest.", image: "/images/ginger_tea.jpg" }, 
    english: { remedy: "Paracetamol and fluids.", image: "/images/paracetamol.jpg" } 
  },
  "Common Cold": { 
    natural: { remedy: "Garlic soup, Vitamin C, and sleep.", image: "/images/garlic_soup.jpg" }, 
    english: { remedy: "Antihistamines and nasal spray.", image: "/images/nasal_spray.jpg" } 
  },
  Malaria: {
    natural: { remedy: "Neem leaves, papaya leaf extract.", image: "/images/neem_leaves.jpg" },
    english: { remedy: "Chloroquine, artemisinin-based therapy.", image: "/images/chloroquine.jpg" }
  },
  "COVID-19": {
    natural: { remedy: "Steam inhalation, turmeric milk.", image: "/images/steam_inhalation.jpg" },
    english: { remedy: "Antiviral medications, oxygen therapy.", image: "/images/antiviral_meds.jpg" }
  },
  Cough: {
    natural: { remedy: "Tulsi leaves, honey, warm water gargle.", image: "/images/tulsi_tea.jpg" },
    english: { remedy: "Cough syrup and lozenges.", image: "/images/cough_syrup.jpg" },
  },
  Headache: {
    natural: { remedy: "Peppermint oil massage, hydration.", image: "/images/peppermint_oil.jpg" },
    english: { remedy: "Ibuprofen or aspirin.", image: "/images/ibuprofen.jpg" },
  },
  "Back Pain": {
    natural: { remedy: "Hot compress, yoga stretches.", image: "/images/hot_compress.jpg" },
    english: { remedy: "Muscle relaxants and physiotherapy.", image: "/images/muscle_relaxants.jpg" },
  },
  "Body Pain": {
    natural: { remedy: "Epsom salt bath, turmeric paste.", image: "/images/epsom_salt.jpg" },
    english: { remedy: "Painkillers and rest.", image: "/images/painkillers.jpg" },
  },
  "Stomach Pain": {
    natural: {
      remedy: "Ajwain water, ginger, and light meals.",
      image: "/images/ajwain_water.webp",
    },
    english: {
      remedy: "Antacids or pain relievers like Buscopan.",
      image: "/images/antacids.jpg",
    }
  }

};

export async function POST(req: Request) {
  try {
    const { condition } = await req.json();

    if (!condition) {
      return NextResponse.json({ error: "No condition provided." }, { status: 400 });
    }

    // Explicitly define `c` as a string
    const conditionsArray: string[] = condition.split(",").map((c: string) => c.trim());
    
    const matchedRecommendations = conditionsArray
      .map((c: string) => recommendationsDB[c] || null) // Ensure undefined is handled properly
      .filter((recommendation): recommendation is { natural: { remedy: string; image: string }; english: { remedy: string; image: string } } => recommendation !== null);

    if (matchedRecommendations.length === 0) {
      return NextResponse.json({ error: "No recommendations available." }, { status: 404 });
    }

    return NextResponse.json(matchedRecommendations);
  } catch (error) {
    console.error("Error in recommend API:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}


