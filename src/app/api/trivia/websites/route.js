import { NextResponse } from "next/server";
const qns = [
  {
    category: "Website Development",
    question:
      "How can a professionally designed website enhance your business's online presence?",
    options: [
      "Attract more customers",
      "Add fun animations",
      "Change website colors",
      "Create complex layouts",
    ],
    correctAnswer: "Attract more customers",
  },
  {
    category: "Website Development",
    question: "Why is it important for your website to be mobile-friendly?",
    options: [
      "It looks cool",
      "Improved user experience",
      "More complex features",
      "Better for desktop users",
    ],
    correctAnswer: "Improved user experience",
  },
  {
    category: "Website Development",
    question:
      "What's the main benefit of having a 'Contact Us' form on your website?",
    options: [
      "Decorative element",
      "Collecting user opinions",
      "Interacting with visitors",
      "Making the website heavier",
    ],
    correctAnswer: "Interacting with visitors",
  },
  {
    category: "Website Development",
    question: "How does a modern website contribute to brand credibility?",
    options: [
      "By having a lot of text",
      "Using flashy images",
      "Having a simple design",
      "Professional and updated appearance",
    ],
    correctAnswer: "Professional and updated appearance",
  },
  {
    category: "Website Development",
    question:
      "What's the advantage of having an 'About Us' page on your website?",
    options: [
      "To show off awards",
      "To share your favorite recipes",
      "To introduce your team and company values",
      "To display funny cat videos",
    ],
    correctAnswer: "To introduce your team and company values",
  },
  {
    category: "Website Development",
    question:
      "How can a blog section on your website contribute to business growth?",
    options: [
      "It doesn't",
      "Increases website loading time",
      "Showcasing expertise and building trust",
      "To post personal diary entries",
    ],
    correctAnswer: "Showcasing expertise and building trust",
  },
  {
    category: "Website Development",
    question:
      "What's the purpose of having a clear 'Call to Action' button on your website?",
    options: [
      "To confuse visitors",
      "To showcase fancy fonts",
      "To make the website colorful",
      "To guide visitors to take specific actions",
    ],
    correctAnswer: "To guide visitors to take specific actions",
  },
  {
    category: "Website Development",
    question:
      "Why is it important to regularly update the content on your website?",
    options: [
      "Because it's fun",
      "To impress competitors",
      "To keep visitors engaged and informed",
      "To use more server resources",
    ],
    correctAnswer: "To keep visitors engaged and informed",
  },
  {
    category: "Website Development",
    question:
      "How can a visually appealing website design positively impact your business?",
    options: [
      "It can't",
      "Attracts more visitors and potential clients",
      "Increases website loading time",
      "Scares away potential clients",
    ],
    correctAnswer: "Attracts more visitors and potential clients",
  },
  {
    category: "Website Development",
    question:
      "What's the main advantage of having a user-friendly navigation menu on your website?",
    options: [
      "To confuse visitors",
      "To showcase advanced coding skills",
      "To make the website look busy",
      "To help visitors easily find what they're looking for",
    ],
    correctAnswer: "To help visitors easily find what they're looking for",
  },
  {
    category: "Website Development",
    question:
      "How can a user-friendly website design improve your customer's experience?",
    options: [
      "It adds more colors",
      "It confuses users",
      "It makes the website slower",
      "It helps users navigate easily",
    ],
    correctAnswer: "It helps users navigate easily",
  },
  {
    category: "Website Development",
    question: "Why is it crucial for your website to load quickly?",
    options: [
      "To waste time",
      "To impress friends",
      "To keep visitors engaged",
      "To showcase heavy graphics",
    ],
    correctAnswer: "To keep visitors engaged",
  },
  {
    category: "Website Development",
    question:
      "What role does a well-designed 'Services' page play on your website?",
    options: [
      "To confuse visitors",
      "To list random facts",
      "To showcase your expertise and offerings",
      "To display random images",
    ],
    correctAnswer: "To showcase your expertise and offerings",
  },
  {
    category: "Website Development",
    question:
      "How does a secure website contribute to building trust with your audience?",
    options: [
      "It doesn't matter",
      "By having a lot of pop-ups",
      "By protecting user data and transactions",
      "By displaying a lot of ads",
    ],
    correctAnswer: "By protecting user data and transactions",
  },
  {
    category: "Website Development",
    question:
      "What's the significance of having a 'Testimonials' section on your website?",
    options: [
      "To share your favorite quotes",
      "To display random feedback",
      "To build credibility through customer reviews",
      "To list employee achievements",
    ],
    correctAnswer: "To build credibility through customer reviews",
  },
  {
    category: "Website Development",
    question:
      "How can a well-organized website structure impact the user experience?",
    options: [
      "It can't",
      "By making the website look chaotic",
      "By helping users find information easily",
      "By adding unnecessary complexity",
    ],
    correctAnswer: "By helping users find information easily",
  },
  {
    category: "Website Development",
    question:
      "Why is it beneficial to integrate social media links on your website?",
    options: [
      "To distract users",
      "To increase loading time",
      "To share cat memes",
      "To connect with your audience and expand your online presence",
    ],
    correctAnswer:
      "To connect with your audience and expand your online presence",
  },
  {
    category: "Website Development",
    question:
      "What impact can a well-designed 'Contact' page have on your business?",
    options: [
      "It's unnecessary",
      "To confuse visitors",
      "To encourage visitors to reach out and inquire",
      "To display your favorite colors",
    ],
    correctAnswer: "To encourage visitors to reach out and inquire",
  },
  {
    category: "Website Development",
    question: "How does a responsive website design benefit your business?",
    options: [
      "It doesn't",
      "By making the website look old-fashioned",
      "By adapting to different devices, attracting a wider audience",
      "By showcasing fancy animations",
    ],
    correctAnswer:
      "By adapting to different devices, attracting a wider audience",
  },
  {
    category: "Website Development",
    question: "What's the advantage of having a 'FAQ' section on your website?",
    options: [
      "To confuse visitors",
      "To display random facts",
      "To answer common questions and provide information",
      "To hide important details",
    ],
    correctAnswer: "To answer common questions and provide information",
  },
  {
    category: "Website Development",
    question:
      "How can a well-designed website contribute to gaining a competitive edge in your industry?",
    options: [
      "By having more advertisements",
      "By using complicated technical jargon",
      "By showcasing a visually appealing and user-friendly design",
      "By hiding information from visitors",
    ],
    correctAnswer:
      "By showcasing a visually appealing and user-friendly design",
  },
  {
    category: "Website Development",
    question:
      "What role does a 'Subscribe' feature play on a business website?",
    options: [
      "To annoy visitors with frequent emails",
      "To increase website loading time",
      "To showcase the latest memes",
      "To build a mailing list for newsletters and updates",
    ],
    correctAnswer: "To build a mailing list for newsletters and updates",
  },
  {
    category: "Website Development",
    question:
      "How can a strategically placed 'Call to Action' button enhance user engagement on your website?",
    options: [
      "It has no impact",
      "By confusing visitors",
      "By guiding visitors to specific actions like making a purchase or contacting you",
      "By playing background music",
    ],
    correctAnswer:
      "By guiding visitors to specific actions like making a purchase or contacting you",
  },
  {
    category: "Website Development",
    question:
      "What benefits can an easy-to-navigate menu bring to your website visitors?",
    options: [
      "To make the website look busy",
      "To hide important information",
      "To create confusion",
      "To help visitors quickly find the information they are looking for",
    ],
    correctAnswer:
      "To help visitors quickly find the information they are looking for",
  },
  {
    category: "Website Development",
    question:
      "Why is it crucial for your website to be accessible on various devices?",
    options: [
      "It's not necessary",
      "To make it difficult for users",
      "To improve user experience and reach a broader audience",
      "To limit the number of visitors",
    ],
    correctAnswer: "To improve user experience and reach a broader audience",
  },
  {
    category: "Website Development",
    question:
      "How can an engaging homepage contribute to keeping visitors on your website?",
    options: [
      "By displaying only text",
      "By having a black and white design",
      "By using confusing animations",
      "By providing relevant and visually appealing content",
    ],
    correctAnswer: "By providing relevant and visually appealing content",
  },
  {
    category: "Website Development",
    question:
      "What is the significance of having clear and concise content on your website?",
    options: [
      "To confuse visitors",
      "To increase website loading time",
      "To showcase your extensive vocabulary",
      "To effectively communicate your message and engage visitors",
    ],
    correctAnswer:
      "To effectively communicate your message and engage visitors",
  },
  {
    category: "Website Development",
    question: "Why should your website be optimized for search engines (SEO)?",
    options: [
      "To hide from search engines",
      "To increase website loading time",
      "To improve visibility and attract more potential clients",
      "To confuse search engine algorithms",
    ],
    correctAnswer: "To improve visibility and attract more potential clients",
  },
  {
    category: "Website Development",
    question:
      "What benefits can a regularly updated blog section bring to your website?",
    options: [
      "To showcase your poetry skills",
      "To make the website slower",
      "To keep visitors informed and engaged",
      "To decrease website traffic",
    ],
    correctAnswer: "To keep visitors informed and engaged",
  },
  {
    category: "Website Development",
    question:
      "How can a secure website impact the trustworthiness of your business?",
    options: [
      "By scaring away potential clients",
      "By making the website look unprofessional",
      "By protecting user data and transactions, building trust",
      "By displaying excessive pop-ups",
    ],
    correctAnswer: "By protecting user data and transactions, building trust",
  },
  {
    category: "Website Development",
    question:
      "How can a well-designed website contribute to brand recognition and memorability?",
    options: [
      "By using random colors",
      "By keeping the website layout plain",
      "By incorporating a consistent and visually appealing design",
      "By hiding the company logo",
    ],
    correctAnswer:
      "By incorporating a consistent and visually appealing design",
  },
  {
    category: "Website Development",
    question:
      "What's the significance of having a 'Latest News' section on your business website?",
    options: [
      "To share personal updates",
      "To confuse visitors",
      "To showcase your favorite recipes",
      "To keep visitors informed about your company's recent activities and achievements",
    ],
    correctAnswer:
      "To keep visitors informed about your company's recent activities and achievements",
  },
  {
    category: "Website Development",
    question:
      "How does an easily accessible 'Contact Us' page contribute to user satisfaction?",
    options: [
      "It doesn't matter",
      "By making it difficult for visitors to contact you",
      "By showcasing unrelated content",
      "By providing a straightforward way for visitors to reach out and inquire",
    ],
    correctAnswer:
      "By providing a straightforward way for visitors to reach out and inquire",
  },
  {
    category: "Website Development",
    question:
      "What role does a visually appealing 'Portfolio' section play on a business website?",
    options: [
      "To showcase random images",
      "To hide important information",
      "To highlight your company's previous projects and expertise",
      "To confuse visitors",
    ],
    correctAnswer:
      "To highlight your company's previous projects and expertise",
  },
  {
    category: "Website Development",
    question:
      "How can an engaging 'About Us' page positively impact potential clients?",
    options: [
      "By displaying unrelated content",
      "By showcasing your company's mission, values, and team members",
      "By keeping the page blank",
      "By featuring only technical details",
    ],
    correctAnswer:
      "By showcasing your company's mission, values, and team members",
  },
  {
    category: "Website Development",
    question:
      "Why is it essential for your website to have an easily readable font and clear typography?",
    options: [
      "To confuse visitors",
      "To make it difficult for users",
      "To showcase your unique font collection",
      "To enhance readability and improve the overall user experience",
    ],
    correctAnswer:
      "To enhance readability and improve the overall user experience",
  },
  {
    category: "Website Development",
    question:
      "How can an interactive 'FAQ' section benefit your website visitors?",
    options: [
      "To hide important information",
      "To increase loading time",
      "To confuse visitors",
      "To provide quick answers to common questions and address potential concerns",
    ],
    correctAnswer:
      "To provide quick answers to common questions and address potential concerns",
  },
  {
    category: "Website Development",
    question:
      "What's the importance of having a 'Testimonials' section on your website?",
    options: [
      "To showcase unrelated feedback",
      "To confuse visitors",
      "To build trust by sharing positive experiences of previous clients",
      "To increase website loading time",
    ],
    correctAnswer:
      "To build trust by sharing positive experiences of previous clients",
  },
  {
    category: "Website Development",
    question:
      "How can a strategically placed 'Subscribe for Updates' feature benefit your website?",
    options: [
      "To annoy visitors",
      "To make it difficult for users to subscribe",
      "To showcase random content",
      "To build a loyal audience and keep visitors updated on your latest offerings",
    ],
    correctAnswer:
      "To build a loyal audience and keep visitors updated on your latest offerings",
  },
  {
    category: "Website Development",
    question:
      "Why is it beneficial for your website to have a user-friendly navigation menu?",
    options: [
      "To confuse visitors",
      "To increase loading time",
      "To create a chaotic experience",
      "To help visitors easily find information and navigate through your site",
    ],
    correctAnswer:
      "To help visitors easily find information and navigate through your site",
  },
  {
    category: "Website Development",
    question:
      "How does a well-optimized website contribute to better visibility on search engines like Google?",
    options: [
      "By using invisible text",
      "By having a lot of pop-ups",
      "By optimizing content and meta tags",
      "By having a complex and confusing structure",
    ],
    correctAnswer: "By optimizing content and meta tags",
  },
  {
    category: "Website Development",
    question:
      "Why is it essential for your website to load quickly, especially on mobile devices?",
    options: [
      "To impress friends",
      "To showcase heavy animations",
      "To improve user experience and retain mobile users",
      "To display lengthy content",
    ],
    correctAnswer: "To improve user experience and retain mobile users",
  },
  {
    category: "Website Development",
    question:
      "What benefits can an easy-to-understand 'Services' page bring to potential clients?",
    options: [
      "To showcase irrelevant information",
      "To create confusion",
      "To provide clarity about your offerings and how they can benefit clients",
      "To hide information",
    ],
    correctAnswer:
      "To provide clarity about your offerings and how they can benefit clients",
  },
  {
    category: "Website Development",
    question:
      "How can a well-designed 'Contact Us' form improve user interaction on your website?",
    options: [
      "By asking unnecessary personal questions",
      "By having complex fields",
      "By making it difficult for users to submit inquiries",
      "By providing a convenient way for users to reach out and ask questions",
    ],
    correctAnswer:
      "By providing a convenient way for users to reach out and ask questions",
  },
  {
    category: "Website Development",
    question:
      "What role does a prominently displayed 'Free Consultation' button play on your website?",
    options: [
      "It has no impact",
      "To make the website look cluttered",
      "To encourage potential clients to take the first step towards engaging with your services",
      "To confuse visitors",
    ],
    correctAnswer:
      "To encourage potential clients to take the first step towards engaging with your services",
  },
  {
    category: "Website Development",
    question:
      "How does an engaging 'Case Studies' section on your website showcase your expertise?",
    options: [
      "By showcasing unrelated projects",
      "By keeping the section empty",
      "By presenting detailed success stories and outcomes of your previous work",
      "By featuring random images",
    ],
    correctAnswer:
      "By presenting detailed success stories and outcomes of your previous work",
  },
  {
    category: "Website Development",
    question:
      "Why is it crucial for your website to have clear and concise 'Call to Action' statements?",
    options: [
      "To confuse visitors",
      "To make it difficult for users to take action",
      "To guide users on what steps to take next, such as making a purchase or requesting information",
      "To increase website loading time",
    ],
    correctAnswer:
      "To guide users on what steps to take next, such as making a purchase or requesting information",
  },
  {
    category: "Website Development",
    question:
      "How does a visually appealing 'Testimonials' section contribute to building trust with potential clients?",
    options: [
      "By showcasing negative feedback",
      "By displaying unrelated quotes",
      "By presenting positive experiences and feedback from satisfied clients",
      "By keeping the section blank",
    ],
    correctAnswer:
      "By presenting positive experiences and feedback from satisfied clients",
  },
  {
    category: "Website Development",
    question:
      "What benefits can an 'Interactive Demo' feature bring to your website?",
    options: [
      "To make the website slower",
      "To confuse visitors",
      "To allow potential clients to experience your product or service in action",
      "To showcase random content",
    ],
    correctAnswer:
      "To allow potential clients to experience your product or service in action",
  },
  {
    category: "Website Development",
    question:
      "Why is it beneficial for your website to have a clear and easily accessible 'FAQ' section?",
    options: [
      "To create confusion",
      "To hide important information",
      "To provide quick answers to common questions and address potential concerns",
      "To showcase unrelated content",
    ],
    correctAnswer:
      "To provide quick answers to common questions and address potential concerns",
  },
];

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export async function GET(request) {
  try {
    const shuffled_qns = shuffleArray(qns);
    return NextResponse.json(
      { message: shuffled_qns?.slice(0, 10) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
