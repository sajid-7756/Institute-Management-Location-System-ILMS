export interface CampusEntry {
  keywords: string[];
  answer: string;
}

const campusData: CampusEntry[] = [
  {
    keywords: ["your name", "what is your name", "who are you called"],
    answer:
      "My name is BPI Bot 🤖. I am the Campus AI Assistant created to help with campus navigation and information.",
  },

  {
    keywords: ["bpi bot", "bot name"],
    answer: "I’m BPI Bot 🤖, your friendly campus guide.",
  },
  {
    keywords: ["introduce yourself", "about you"],
    answer:
      "Hello! I’m BPI Bot 🤖, a smart campus assistant designed to help students, teachers, and visitors find locations and information easily.",
  },

  {
    keywords: ["ok", "okay", "alright"],
    answer:
      "Alright 😊 Let me know if you need any help with campus information.",
  },
  {
    keywords: ["wait", "hold on"],
    answer: "Sure, take your time. I’m here when you’re ready.",
  },
  {
    keywords: ["yes", "yeah", "yup"],
    answer: "Great! What would you like to know about the campus?",
  },
  {
    keywords: ["bye", "goodbye"],
    answer: "Goodbye 👋 Have a nice day on campus!",
  },
  {
    keywords: ["good morning"],
    answer: "Good morning ☀️ How can I help you today?",
  },
  {
    keywords: ["good evening"],
    answer: "Good evening 🌆 Let me know if you need any campus information.",
  },
  {
    keywords: ["good night"],
    answer: "Good night 🌙 Feel free to ask me again anytime.",
  },

  {
    keywords: ["who are you", "what are you"],
    answer:
      "I am the Campus AI Assistant. I help students and visitors find locations and information inside the campus.",
  },
  {
    keywords: ["who made you", "who created you", "who developed you"],
    answer:
      "I was developed as a class group project by CST Department students of Session 2022–2023: Rishat, Toya, Tanvin, Atiah, Sompa, Ashik, Shagor, Nurnobi, Rahul, and Sajid, to make campus navigation easier using AI.",
  },

  {
    keywords: ["purpose", "goal", "target", "why are you made"],
    answer:
      "My purpose is to help students, parents, and visitors easily find campus locations and important facilities.",
  },
  {
    keywords: ["help", "help me", "need help", "support"],
    answer:
      "Sure 😊 I’m here to help. You can ask me about campus locations, departments, hostels, offices, the mosque, or the campus map.",
  },

  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello 👋 How can I help you with campus information today?",
  },
  {
    keywords: ["thanks", "thank you"],
    answer: "You’re welcome 😊 If you need any more help, feel free to ask!",
  },

  {
    keywords: ["mosque", "masjid"],
    answer: "The campus mosque is located to the south of the North Hostel.",
  },
  {
    keywords: ["north hostel"],
    answer: "The North Hostel is located to the west of the Academic Building.",
  },
  {
    keywords: ["south hostel"],
    answer: "The South Hostel is located to the south of the campus mosque.",
  },
  {
    keywords: ["girls hostel", "karatoa", "karatoa girls hostel"],
    answer:
      "The Karatoa Girls Hostel is a separate hostel inside the campus. It's on the opposite side of the vice principal's quatre",
  },
  {
    keywords: ["hostel", "residential"],
    answer:
      "There are three hostels in the campus: North Hostel, South Hostel, and Karatoa Girls Hostel.",
  },
  {
    keywords: ["rover", "rover den"],
    answer: "The Rover Den is located at the south-east corner of the campus.",
  },
  {
    keywords: ["principal", "principal room", "principal office"],
    answer: "The Principal’s office is located in the Administrative Building.",
  },
  {
    keywords: ["field", "playground"],
    answer: "The campus field is located to the south of the New Building.",
  },
  {
    keywords: ["garage", "garrage"],
    answer:
      "The campus garage is located to the east of the Academic Building.",
  },
  {
    keywords: ["canteen", "food"],
    answer: "The campus canteen is located near the student hostel area.",
  },
  {
    keywords: ["map", "campus map"],
    answer:
      "You can find the campus map in the navigation bar. Click on the 'Map' option.",
  },
  {
    keywords: ["namaj ghar", "prayer room", "mosque", "masjid"],
    answer:
      "The prayer room (Namaj Ghar) is located to the east of the Academic Building.",
  },
  {
    keywords: [
      "vice principal",
      "vice principal room",
      "vp room",
      "vice principal office",
    ],
    answer:
      "The Vice Principal’s office is located in room number 215 of the Academic Building.",
  },
  {
    keywords: ["placement cell", "career cell", "job placement"],
    answer:
      "The Placement Cell is located to the east of the Principal’s room.",
  },
  {
    keywords: ["cst", "computer", "computer science"],
    answer:
      "The CST department is located on the 2nd floor of the New Building. CI-1 is on the west side, and CI-2 is on the east side of the building.",
  },
  {
    keywords: ["civil", "civil engineering"],
    answer:
      "The Civil Engineering department is located on the 2nd floor of the Academic Building, east of the seminar room. Both CI-1 and CI-2 are in the same area.",
  },
  {
    keywords: ["mechanical", "mechanical engineering"],
    answer:
      "The Mechanical Engineering department is located on the 2nd floor of the Academic Building, in front of the Civil Engineering department. Both CI-1 and CI-2 are in this location.",
  },
  {
    keywords: ["electrical", "electrical engineering"],
    answer:
      "The Electrical Engineering department is located on the 2nd floor of the Academic Building (east side). CI-1 is east of room no. 0206, and CI-2 is west of room no. 0206.",
  },
  {
    keywords: ["electronics", "electronics engineering"],
    answer:
      "The Electronics Engineering department has two locations: CI-1 is on the 2nd floor of the Academic Building (west side), and CI-2 is on the 3rd floor of the Academic Building (west side).",
  },
  {
    keywords: ["power", "power engineering"],
    answer:
      "The Power Engineering department is located on the 2nd floor of the Academic Building (east side). Both CI-1 and CI-2 are west of room no. 0206.",
  },
  {
    keywords: ["rac", "refrigeration", "refrigeration and air conditioning"],
    answer:
      "The RAC department is located in the New Building. CI-1 is on the 3rd floor (east side), and CI-2 is on the 3rd floor (west side).",
  },
  {
    keywords: [
      "library",
      "where is the institute library",
      "where is the library",
    ],
    answer:
      "Located on the 3rd floor of the Academic Building. Room number 309",
  },
];

export default campusData;
