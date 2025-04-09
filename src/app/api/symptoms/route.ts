// import { NextResponse } from "next/server";

// // Sample rule-based symptom-to-condition mapping
// const symptomConditionMap: Record<string, string[]> = {
//   "fever": ["Flu", "Dengue", "Typhoid"],
//   "cough": ["Common Cold", "Bronchitis", "Pneumonia"],
//   "headache": ["Migraine", "Tension Headache", "Sinusitis"],
//   "fatigue": ["Anemia", "Diabetes", "Thyroid Disorder"],
//   "sore throat": ["Strep Throat", "Tonsillitis", "Common Cold"],
// };

// export async function POST(req: Request) {
//   try {
//     const { symptoms } = await req.json();
//     if (!symptoms || !Array.isArray(symptoms)) {
//       return NextResponse.json({ error: "Invalid input" }, { status: 400 });
//     }

//     let possibleConditions = new Set<string>();

//     symptoms.forEach((symptom) => {
//       const conditions = symptomConditionMap[symptom.toLowerCase()];
//       if (conditions) {
//         conditions.forEach((condition) => possibleConditions.add(condition));
//       }
//     });

//     return NextResponse.json({ conditions: Array.from(possibleConditions) }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }






// "use server";
// import { NextResponse } from "next/server";

// // Simple rule-based mapping of symptoms to conditions
// const symptomConditions = {
//   "fever": ["Flu", "Dengue", "Malaria"],
//   "cough": ["Common Cold", "Bronchitis", "COVID-19"],
//   "headache": ["Migraine", "Tension Headache", "Sinusitis"],
//   "fatigue": ["Anemia", "Thyroid Disorder", "Chronic Fatigue Syndrome"],
//   "nausea": ["Food Poisoning", "Gastritis", "Pregnancy"],
// };

// export async function POST(req: Request) {
//   try {
//     const { symptoms } = await req.json();
//     if (!symptoms || !Array.isArray(symptoms)) {
//       return NextResponse.json({ error: "Invalid symptoms format" }, { status: 400 });
//     }

//     // Find matching conditions
//     let possibleConditions = new Set<string>();
//     symptoms.forEach(symptom => {
//       if (symptomConditions[symptom.toLowerCase()]) {
//         symptomConditions[symptom.toLowerCase()].forEach(condition => possibleConditions.add(condition));
//       }
//     });

//     return NextResponse.json({ conditions: Array.from(possibleConditions) });
//   } catch (error) {
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }





// import { NextResponse } from "next/server";

// const symptomConditions: Record<string, string[]> = {
//   fever: ["Flu", "COVID-19", "Malaria"],
//   cough: ["Cold", "COVID-19", "Bronchitis"],
//   headache: ["Migraine", "Tension Headache", "Sinusitis"],
//   fatigue: ["Anemia", "Diabetes", "Thyroid Disorder"],
//   nausea: ["Food Poisoning", "Gastritis", "Pregnancy"],
// };

// export async function POST(req: Request) {
//   try {
//     const { symptoms } = await req.json();

//     if (!Array.isArray(symptoms) || symptoms.length === 0) {
//       return NextResponse.json({ error: "No symptoms provided." }, { status: 400 });
//     }

//     let possibleConditions = new Set<string>();

//     symptoms.forEach((symptom) => {
//       const key = symptom.toLowerCase();
//       if (key in symptomConditions) {
//         symptomConditions[key].forEach((condition) => possibleConditions.add(condition));
//       }
//     });

//     return NextResponse.json({ conditions: Array.from(possibleConditions) });
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid request." }, { status: 400 });
//   }
// }




// import { NextResponse } from "next/server";

// const symptomConditions: Record<string, string[]> = {
//   fever: ["Flu", "COVID-19", "Malaria"],
//   cough: ["Cold", "COVID-19", "Bronchitis"],
//   headache: ["Migraine", "Tension Headache", "Sinusitis"],
//   fatigue: ["Anemia", "Diabetes", "Thyroid Disorder"],
//   nausea: ["Food Poisoning", "Gastritis", "Pregnancy"],
// };

// export async function POST(req: Request) {
//   try {
//     const { symptoms } = await req.json();

//     if (!Array.isArray(symptoms) || symptoms.length === 0) {
//       return NextResponse.json({ error: "No symptoms provided." }, { status: 400 });
//     }

//     const possibleConditions = new Set<string>();

//     symptoms.forEach((symptom) => {
//       const key = symptom.toLowerCase();
//       if (symptomConditions[key]) {
//         symptomConditions[key].forEach((condition) => possibleConditions.add(condition));
//       }
//     });

//     return NextResponse.json({ conditions: Array.from(possibleConditions) });
//   } catch {
//     return NextResponse.json({ error: "Invalid request." }, { status: 400 });
//   }
// }



//WORKING CODE
import { NextResponse } from "next/server";

const symptomDatabase: Record<string, string[]> = {
  fever: ["Flu", "COVID-19", "Malaria"],
  cough: ["Common Cold",  "Bronchitis"],
  headache: ["Migraine", "Tension Headache", "Sinusitis", "Headache"],
  fatigue: ["Anemia", "Diabetes", "Thyroid Disorder"],
  chills: ["Malaria", "Flu"],
  bodypain: ["Flu", "Body Pain"],
  backpain: ["Back Pain", "Sciatica"],
  sorethroat: ["Common Cold", "Flu"],
  sneezing: ["Common Cold", "Allergies"],
  musclepain: ["Body Pain", "Dengue", "Back Pain"],
  stomachpain: ["Stomach Pain", "Indigestion", "Food Poisoning"]
};

export async function POST(req: Request) {
  try {
    const { symptoms } = await req.json();

    if (!symptoms || symptoms.length === 0) {
      return NextResponse.json({ error: "No symptoms provided." }, { status: 400 });
    }

    const possibleConditions = symptoms
      //.map((symptom: string) => symptomDatabase[symptom.toLowerCase()] || [])
      .map((symptom: string) => {
        const normalized = symptom.toLowerCase().replace(/\s+/g, "");
        return symptomDatabase[normalized] || [];
      })
      .flat();

    return NextResponse.json({
      conditions: [...new Set(possibleConditions)], // Remove duplicates
    });
  } catch (error) {
    console.error("Error in symptoms API:", error); // ✅ Now 'error' is used
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
