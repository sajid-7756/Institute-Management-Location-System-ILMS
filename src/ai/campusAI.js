import campusData from "./campusData";

export function campusAI(input) {
  const question = input.toLowerCase();

  for (const item of campusData) {
    if (item.keywords.some((word) => question.includes(word))) {
      return item.answer;
    }
  }

  return "I can help you find campus locations like the mosque, offices, hostels, and facilities.";
}
