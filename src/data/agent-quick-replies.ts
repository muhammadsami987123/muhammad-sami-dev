/**
 * Instant client-side replies for conversational filler — greetings, identity,
 * thanks, small talk. These resolve locally so trivial turns feel immediate and
 * never spend an LLM call. Anything substantive falls through to /api/chat.
 */

export const ASSISTANT_NAME = 'Sami’s Portfolio Assistant';

/** Strip punctuation and collapse whitespace so "Hi!!" and "hi" match the same rule. */
function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

type QuickReply = {
  id: string;
  /** Matched against the normalized message. */
  test: (normalized: string) => boolean;
  reply: string;
};

/** Whole-phrase match — guards against "hi" firing inside "which project is biggest". */
const isExactly = (...phrases: string[]) => (text: string) => phrases.includes(text);

/** Short opener like "hi there" / "hello, good morning" — still pure greeting, no real question. */
const isShortGreeting = (text: string) => {
  const words = text.split(' ');
  if (words.length > 4) return false;
  const greetingWords = /^(hi|hey|hello|yo|hiya|howdy|greetings|salam|assalam|assalamualaikum|morning|afternoon|evening|good)$/;
  const filler = /^(there|everyone|mate|buddy|bot|assistant|sami|morning|afternoon|evening|day)$/;
  return words.some((w) => greetingWords.test(w)) && words.every((w) => greetingWords.test(w) || filler.test(w));
};

const QUICK_REPLIES: QuickReply[] = [
  {
    id: 'greeting',
    test: isShortGreeting,
    reply:
      "Hi there — good to meet you.\n\nI can walk you through Sami's projects, engineering background, or tech stack. What would you like to know?",
  },
  {
    id: 'how-are-you',
    test: (t) =>
      /^(how are you|how are you doing|how r u|hows it going|how's it going|how are things|you good|how do you do|whats up|what's up|sup)( today| doing)?$/.test(
        t
      ) || isExactly('how are you today', 'hope you are well', 'how have you been')(t),
    reply:
      "Doing well, thanks for asking — ready to help.\n\nAsk me anything about Sami's work, or pick one of the suggestions below to get started.",
  },
  {
    id: 'identity',
    test: (t) =>
      /^(what('s| is) your name|who are you|what are you|whats your name|introduce yourself|tell me about yourself|what do you do|what can you do|who am i talking to|what is this)\??$/.test(
        t
      ),
    reply:
      "I'm Sami's portfolio assistant.\n\nI answer questions about his projects, engineering experience, and technical background. Try asking about a specific project, or how to get in touch.",
  },
  {
    id: 'who-is-sami',
    test: (t) =>
      /^(who is sami|who is muhammad sami|who's sami|tell me about sami|tell me about muhammad sami|about sami)\??$/.test(
        t
      ),
    reply:
      "**Muhammad Sami** is an AI Agent Engineer and Full-Stack Developer based in Karachi, Pakistan.\n\nHe's the Founder & COO at MARSA Empower and founder of CodePulse Innovations, working mainly across AI agents, automation, and production web platforms.\n\nWant to hear about a specific project or his stack?",
  },
  {
    id: 'thanks',
    test: (t) =>
      /^(thanks|thank you|thanks a lot|thank you so much|thx|ty|appreciate it|thanks so much|cheers|nice one|awesome thanks)( mate| buddy| man)?$/.test(
        t
      ),
    reply: 'Happy to help. Anything else you’d like to know?',
  },
  {
    id: 'goodbye',
    test: (t) =>
      /^(bye|goodbye|see you|see ya|later|cya|good night|goodnight|take care|thats all|that's all|im done|i'm done|nothing else|no thanks)$/.test(
        t
      ),
    reply: 'Thanks for stopping by — feel free to reach out to Sami directly at **m.samiwaseem1234@gmail.com**. Take care.',
  },
  {
    id: 'capabilities',
    test: (t) =>
      /^(help|what can i ask|what can you help with|what should i ask|options|how does this work|what do you know)\??$/.test(
        t
      ),
    reply:
      "Here's what I can cover:\n\n- **Projects** — architecture, stack, and what each one does\n- **Experience** — roles, background, and engineering focus\n- **Skills** — languages, frameworks, and AI tooling\n- **Contact** — the best way to reach Sami\n\nWhat sounds useful?",
  },
];

/** Returns an instant reply, or null when the question needs the model. */
export function getQuickReply(message: string): string | null {
  const normalized = normalize(message);
  if (!normalized) return null;
  return QUICK_REPLIES.find((rule) => rule.test(normalized))?.reply ?? null;
}

/** Clickable openers shown on an empty conversation. */
export const SUGGESTED_PROMPTS = [
  { label: 'Featured projects', prompt: 'What are Sami’s most significant projects?' },
  { label: 'ChatForge', prompt: 'How does ChatForge work, and what is it built with?' },
  { label: 'AI agent work', prompt: 'Tell me about Sami’s experience building AI agents.' },
  { label: 'Tech stack', prompt: 'What technologies does Sami work with day to day?' },
  { label: 'Get in touch', prompt: 'What’s the best way to contact Sami?' },
];

export const WELCOME_MESSAGE =
  "Hello — I'm Sami's portfolio assistant.\n\nI can tell you about his projects, engineering experience, and technical background. What would you like to know?";
