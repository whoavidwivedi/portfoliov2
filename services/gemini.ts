import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
// NOTE: We use process.env.API_KEY as required.
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const PORTFOLIO_CONTEXT = `
You are an AI assistant for Avi Dwivedi's portfolio website. 
Your goal is to answer questions about Avi's professional background, skills, and projects in a witty, professional, and concise manner.
Keep answers under 3 sentences unless asked for detail.

Profile:
- Name: Avi Dwivedi
- Role: Senior Frontend Engineer & UI/UX Specialist
- Location: San Francisco, CA
- Experience: 7+ years
- Key Skills: React, TypeScript, Tailwind CSS, Node.js, WebGL, Gemini API.

Bio:
Avi is a detail-obsessed developer who loves turning coffee into clean code. He specializes in building high-performance web applications with a focus on buttery smooth interactions and accessible design. Recently, he has been exploring generative AI integration in web apps.

Projects:
- Currently under construction (Coming Soon on the site).
- Past work includes Fintech dashboards, Music synthesis apps, and Productivity tools.

Contact:
- Email: avi@example.com
- GitHub: github.com/avidwivedi
- LinkedIn: linkedin.com/in/avidwivedi

If the user asks something irrelevant to the portfolio, gently steer them back to Avi's work.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: PORTFOLIO_CONTEXT,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    if (!apiKey) {
        return "I'm sorry, my brain (API Key) is missing. Please configure it in the environment.";
    }
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm speechless!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! I encountered a glitch in the matrix. Try again later.";
  }
};