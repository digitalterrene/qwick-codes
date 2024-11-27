import { NextResponse } from "next/server";
const qns = [
  {
    category: "App Development",
    question:
      "How can a 'Personalized Recommendation' feature enhance the client experience within your app?",
    options: [
      "Recommendations are irrelevant",
      "Clients prefer to explore everything on their own",
      "A well-implemented 'Personalized Recommendation' feature suggests tailored content or products based on client preferences, improving user engagement",
      "Recommendations make the app too cluttered",
    ],
    correctAnswer:
      "A well-implemented 'Personalized Recommendation' feature suggests tailored content or products based on client preferences, improving user engagement",
  },
  {
    category: "App Development",
    question:
      "What benefits can a 'One-Click Purchase' option bring to clients using your app?",
    options: [
      "One-click purchases are unnecessary",
      "Clients enjoy a lengthy purchasing process",
      "A streamlined 'One-Click Purchase' option simplifies the buying process, providing a quick and convenient way for clients to make transactions",
      "One-click purchases make the app too expensive",
    ],
    correctAnswer:
      "A streamlined 'One-Click Purchase' option simplifies the buying process, providing a quick and convenient way for clients to make transactions",
  },
  {
    category: "App Development",
    question:
      "How does a 'Daily/Weekly Challenges' feature encourage clients to stay active and engaged with your app?",
    options: [
      "Challenges are irrelevant",
      "Clients prefer not to participate in challenges",
      "Incorporating 'Daily/Weekly Challenges' adds a motivational aspect, prompting clients to regularly use the app to achieve goals and earn rewards",
      "Challenges make the app too competitive",
    ],
    correctAnswer:
      "Incorporating 'Daily/Weekly Challenges' adds a motivational aspect, prompting clients to regularly use the app to achieve goals and earn rewards",
  },
  {
    category: "App Development",
    question:
      "Why is it important for your app to have an easily accessible 'Customer Support Chat' feature?",
    options: [
      "Customer support is unnecessary",
      "Clients prefer not to seek help",
      "An instant 'Customer Support Chat' feature allows clients to quickly get assistance, resolving issues and ensuring a positive app experience",
      "Customer support features make the app too complicated",
    ],
    correctAnswer:
      "An instant 'Customer Support Chat' feature allows clients to quickly get assistance, resolving issues and ensuring a positive app experience",
  },
  {
    category: "App Development",
    question:
      "How can an 'Achievement Badge' system contribute to client motivation and satisfaction?",
    options: [
      "Achievements are irrelevant",
      "Clients don't care about badges",
      "Implementing an 'Achievement Badge' system rewards clients for reaching milestones, creating a sense of accomplishment and enhancing app enjoyment",
      "Achievements make the app too childish",
    ],
    correctAnswer:
      "Implementing an 'Achievement Badge' system rewards clients for reaching milestones, creating a sense of accomplishment and enhancing app enjoyment",
  },
  {
    category: "App Development",
    question:
      "What benefits can a 'Progressive Disclosure' approach bring to clients exploring your app features?",
    options: [
      "Progressive disclosure is unnecessary",
      "Clients prefer to see all features at once",
      "Adopting a 'Progressive Disclosure' approach gradually reveals complex features, preventing information overload and guiding clients to discover functionality at their own pace",
      "Progressive disclosure makes the app too slow",
    ],
    correctAnswer:
      "Adopting a 'Progressive Disclosure' approach gradually reveals complex features, preventing information overload and guiding clients to discover functionality at their own pace",
  },
  {
    category: "App Development",
    question:
      "How can a 'Qwik Tutorial' section assist clients in understanding essential app features?",
    options: [
      "Tutorials are irrelevant",
      "Clients prefer not to learn about app features",
      "A concise 'Qwik Tutorial' section provides clients with essential information, helping them quickly grasp key app functionalities for a smoother experience",
      "Tutorials make the app too complicated",
    ],
    correctAnswer:
      "A concise 'Qwik Tutorial' section provides clients with essential information, helping them quickly grasp key app functionalities for a smoother experience",
  },
  {
    category: "App Development",
    question:
      "What role does a 'Dark Mode' feature play in enhancing the visual comfort of clients using your app?",
    options: [
      "Dark mode is irrelevant",
      "Clients prefer bright interfaces",
      "Implementing a 'Dark Mode' option reduces eye strain and enhances readability, allowing clients to customize their visual experience within the app",
      "Dark mode makes the app too gloomy",
    ],
    correctAnswer:
      "Implementing a 'Dark Mode' option reduces eye strain and enhances readability, allowing clients to customize their visual experience within the app",
  },
  {
    category: "App Development",
    question:
      "How can a 'Simplified Registration' process positively impact the onboarding experience for new clients?",
    options: [
      "Complex registrations are better",
      "Clients enjoy filling out lengthy forms",
      "A straightforward 'Simplified Registration' process minimizes friction, making it easier for new clients to sign up and explore the app",
      "Simplified registrations make the app seem less secure",
    ],
    correctAnswer:
      "A straightforward 'Simplified Registration' process minimizes friction, making it easier for new clients to sign up and explore the app",
  },
  {
    category: "App Development",
    question:
      "Why is it important for your app to have a 'Share Your Progress' feature on social media?",
    options: [
      "Sharing progress is unnecessary",
      "Clients prefer not to share their achievements",
      "Allowing clients to 'Share Your Progress' on social media promotes user engagement and attracts new users, expanding the app's reach",
      "Sharing progress makes the app too competitive",
    ],
    correctAnswer:
      "Allowing clients to 'Share Your Progress' on social media promotes user engagement and attracts new users, expanding the app's reach",
  },
  {
    category: "App Development",
    question:
      "How does seamless integration with other platforms enhance the overall client experience within your app?",
    options: [
      "Integration is unnecessary",
      "Complex integrations are better",
      "Seamless integration with popular platforms makes it easy for clients to connect and share data across different services",
      "Integration makes the app slow",
    ],
    correctAnswer:
      "Seamless integration with popular platforms makes it easy for clients to connect and share data across different services",
  },
  {
    category: "App Development",
    question:
      "Why is it important for your app to have a clear and straightforward 'Privacy Policy' section?",
    options: [
      "Privacy policies are too complicated",
      "To make the app appear less trustworthy",
      "A transparent 'Privacy Policy' builds trust by clearly communicating how client data is handled and protected",
      "Privacy policies have no impact",
    ],
    correctAnswer:
      "A transparent 'Privacy Policy' builds trust by clearly communicating how client data is handled and protected",
  },
  {
    category: "App Development",
    question:
      "What benefits can a well-designed 'FAQ' section bring to your clients?",
    options: [
      "FAQs are unnecessary",
      "FAQs confuse users",
      "An informative 'FAQ' section provides quick answers to common client questions, reducing confusion and enhancing user experience",
      "FAQs increase app loading time",
    ],
    correctAnswer:
      "An informative 'FAQ' section provides quick answers to common client questions, reducing confusion and enhancing user experience",
  },
  {
    category: "App Development",
    question:
      "How does implementing a secure payment gateway within your app contribute to client trust?",
    options: [
      "Payment security is overrated",
      "Clients prefer insecure payment methods",
      "A secure payment gateway ensures the safety of client transactions, building trust in the app's reliability",
      "Payment gateways slow down the app",
    ],
    correctAnswer:
      "A secure payment gateway ensures the safety of client transactions, building trust in the app's reliability",
  },
  {
    category: "App Development",
    question:
      "What role does a well-crafted 'Tutorial' section play in helping clients maximize the app's features?",
    options: [
      "Tutorials are unnecessary",
      "Clients prefer a trial-and-error approach",
      "A comprehensive 'Tutorial' section guides clients through the app's features, promoting a deeper understanding and usage",
      "Tutorials make the app too complex",
    ],
    correctAnswer:
      "A comprehensive 'Tutorial' section guides clients through the app's features, promoting a deeper understanding and usage",
  },
  {
    category: "App Development",
    question:
      "How can a strategically placed 'Share' feature within your app benefit clients?",
    options: [
      "Sharing is unnecessary",
      "Clients prefer not to share anything",
      "A convenient 'Share' feature allows clients to easily share their app experiences, promoting word-of-mouth and attracting new users",
      "Sharing features slow down the app",
    ],
    correctAnswer:
      "A convenient 'Share' feature allows clients to easily share their app experiences, promoting word-of-mouth and attracting new users",
  },
  {
    category: "App Development",
    question:
      "Why is it crucial for your app to have an easily accessible 'Contact Us' button?",
    options: [
      "Contact options are irrelevant",
      "To make it difficult for clients to contact support",
      "An easily accessible 'Contact Us' button allows clients to quickly reach out for assistance, improving user satisfaction",
      "Contact options make the app too cluttered",
    ],
    correctAnswer:
      "An easily accessible 'Contact Us' button allows clients to quickly reach out for assistance, improving user satisfaction",
  },
  {
    category: "App Development",
    question:
      "How can a well-designed 'Notifications' feature enhance client engagement with your app?",
    options: [
      "Notifications are annoying",
      "Clients prefer not to be notified",
      "Strategically timed and relevant notifications keep clients engaged by providing valuable updates and reminders",
      "Notifications are irrelevant for client engagement",
    ],
    correctAnswer:
      "Strategically timed and relevant notifications keep clients engaged by providing valuable updates and reminders",
  },
  {
    category: "App Development",
    question:
      "What benefits can a straightforward 'Login' process bring to client onboarding within your app?",
    options: [
      "Complex logins are better",
      "Clients enjoy lengthy login processes",
      "A simple and efficient 'Login' process ensures a smooth onboarding experience, reducing frustration and encouraging regular app usage",
      "Login processes should be skipped for simplicity",
    ],
    correctAnswer:
      "A simple and efficient 'Login' process ensures a smooth onboarding experience, reducing frustration and encouraging regular app usage",
  },
  {
    category: "App Development",
    question:
      "How does a personalized 'User Profile' section contribute to a tailored client experience within your app?",
    options: [
      "User profiles are unnecessary",
      "Clients prefer not to personalize their experience",
      "A personalized 'User Profile' allows clients to customize their app interactions, creating a more individualized and enjoyable experience",
      "User profiles make the app too complex",
    ],
    correctAnswer:
      "A personalized 'User Profile' allows clients to customize their app interactions, creating a more individualized and enjoyable experience",
  },
  {
    category: "App Development",
    question:
      "How can a well-implemented 'Offline Mode' feature enhance the client experience within your app?",
    options: [
      "Offline features are unnecessary",
      "Clients prefer constant online connectivity",
      "An 'Offline Mode' allows clients to use essential app features even without an internet connection, providing uninterrupted functionality",
      "Offline features make the app too complex",
    ],
    correctAnswer:
      "An 'Offline Mode' allows clients to use essential app features even without an internet connection, providing uninterrupted functionality",
  },
  {
    category: "App Development",
    question:
      "What role does a 'Feedback Survey' play in understanding and improving the client experience?",
    options: [
      "Surveys are irrelevant",
      "Clients prefer not to give feedback",
      "A well-designed 'Feedback Survey' gathers valuable insights, allowing you to address client concerns and enhance app features based on user input",
      "Surveys make the app too complicated",
    ],
    correctAnswer:
      "A well-designed 'Feedback Survey' gathers valuable insights, allowing you to address client concerns and enhance app features based on user input",
  },
  {
    category: "App Development",
    question:
      "How can a strategically placed 'Help Center' section assist clients in resolving issues within your app?",
    options: [
      "Help centers are unnecessary",
      "Clients prefer not to seek help",
      "An easily accessible 'Help Center' provides clients with quick solutions to common problems, improving user satisfaction and reducing frustration",
      "Help centers make the app too cluttered",
    ],
    correctAnswer:
      "An easily accessible 'Help Center' provides clients with quick solutions to common problems, improving user satisfaction and reducing frustration",
  },
  {
    category: "App Development",
    question:
      "What benefits can a well-structured 'In-App Purchase' system bring to your clients?",
    options: [
      "In-app purchases are unnecessary",
      "Clients prefer not to make purchases within the app",
      "A user-friendly 'In-App Purchase' system allows clients to easily buy additional features or content, enhancing their overall app experience",
      "In-app purchases make the app too expensive",
    ],
    correctAnswer:
      "A user-friendly 'In-App Purchase' system allows clients to easily buy additional features or content, enhancing their overall app experience",
  },
  {
    category: "App Development",
    question:
      "How does a 'Progress Tracker' feature contribute to client engagement and goal achievement within your app?",
    options: [
      "Progress trackers are irrelevant",
      "Clients prefer not to track their progress",
      "A well-implemented 'Progress Tracker' keeps clients motivated by showcasing their achievements and encouraging them to reach app-related goals",
      "Progress trackers make the app too complex",
    ],
    correctAnswer:
      "A well-implemented 'Progress Tracker' keeps clients motivated by showcasing their achievements and encouraging them to reach app-related goals",
  },
  {
    category: "App Development",
    question:
      "Why is it important for your app to have a straightforward 'Navigation Menu' for easy access to key features?",
    options: [
      "Navigation menus are overrated",
      "Clients enjoy complex navigation",
      "An intuitive 'Navigation Menu' allows clients to quickly find and access essential features, enhancing overall app usability",
      "Navigation menus make the app too crowded",
    ],
    correctAnswer:
      "An intuitive 'Navigation Menu' allows clients to quickly find and access essential features, enhancing overall app usability",
  },
  {
    category: "App Development",
    question:
      "How can a 'Social Media Integration' feature benefit clients in sharing their app experiences with friends?",
    options: [
      "Social media integration is unnecessary",
      "Clients prefer not to share their experiences",
      "Incorporating 'Social Media Integration' allows clients to easily share their achievements and app experiences, promoting word-of-mouth marketing",
      "Social media integration slows down the app",
    ],
    correctAnswer:
      "Incorporating 'Social Media Integration' allows clients to easily share their achievements and app experiences, promoting word-of-mouth marketing",
  },
  {
    category: "App Development",
    question:
      "What role does a 'Gamification' element play in keeping clients engaged and entertained within your app?",
    options: [
      "Gamification is irrelevant",
      "Clients prefer serious apps",
      "Integrating 'Gamification' elements, like badges and rewards, enhances client engagement by adding a fun and competitive aspect to the app experience",
      "Gamification makes the app too childish",
    ],
    correctAnswer:
      "Integrating 'Gamification' elements, like badges and rewards, enhances client engagement by adding a fun and competitive aspect to the app experience",
  },
  {
    category: "App Development",
    question:
      "How can a 'User Community' feature foster a sense of belonging and collaboration among your clients?",
    options: [
      "User communities are unnecessary",
      "Clients prefer to use the app individually",
      "Creating a 'User Community' allows clients to connect, share insights, and seek advice, building a supportive environment within your app",
      "User communities make the app too complicated",
    ],
    correctAnswer:
      "Creating a 'User Community' allows clients to connect, share insights, and seek advice, building a supportive environment within your app",
  },
  {
    category: "App Development",
    question:
      "Why is it crucial for your app to have an easily accessible 'Settings' section for personalized user preferences?",
    options: [
      "Settings are irrelevant",
      "Clients prefer not to customize their experience",
      "An organized 'Settings' section allows clients to tailor their app experience, ensuring a personalized and user-friendly interaction",
      "Settings make the app too complicated",
    ],
    correctAnswer:
      "An organized 'Settings' section allows clients to tailor their app experience, ensuring a personalized and user-friendly interaction",
  },
  {
    category: "App Development",
    question:
      "How does an 'Offline Data Sync' feature contribute to client convenience and data accessibility?",
    options: [
      "Data sync is unnecessary",
      "Clients prefer constant online data access",
      "Implementing an 'Offline Data Sync' feature allows clients to access and update information even without an internet connection, enhancing usability",
      "Offline data sync makes the app too slow",
    ],
    correctAnswer:
      "Implementing an 'Offline Data Sync' feature allows clients to access and update information even without an internet connection, enhancing usability",
  },
  {
    category: "App Development",
    question:
      "How does an 'Automatic Updates' feature contribute to client convenience and security within your app?",
    options: [
      "Automatic updates are unnecessary",
      "Clients prefer manual updates",
      "Enabling 'Automatic Updates' ensures clients have the latest features and security patches without the hassle of manual downloads",
      "Automatic updates make the app too complicated",
    ],
    correctAnswer:
      "Enabling 'Automatic Updates' ensures clients have the latest features and security patches without the hassle of manual downloads",
  },
  {
    category: "App Development",
    question:
      "What benefits can an 'Easy-to-Use Search' function bring to clients navigating your app?",
    options: [
      "Search functions are overrated",
      "Clients prefer scrolling through content",
      "A user-friendly 'Search' function allows clients to quickly find specific content, saving time and improving overall app usability",
      "Search functions make the app too cluttered",
    ],
    correctAnswer:
      "A user-friendly 'Search' function allows clients to quickly find specific content, saving time and improving overall app usability",
  },
  {
    category: "App Development",
    question:
      "How does an 'Interactive Tutorial' feature contribute to client engagement and learning within your app?",
    options: [
      "Tutorials are unnecessary",
      "Clients prefer not to interact with tutorials",
      "Incorporating an 'Interactive Tutorial' feature engages clients in a hands-on learning experience, making it easier for them to understand and remember app functionalities",
      "Tutorials make the app too childish",
    ],
    correctAnswer:
      "Incorporating an 'Interactive Tutorial' feature engages clients in a hands-on learning experience, making it easier for them to understand and remember app functionalities",
  },
  {
    category: "App Development",
    question:
      "Why is it important for your app to have a clear and informative 'Privacy Consent' process?",
    options: [
      "Privacy consents are unnecessary",
      "Clients prefer not to provide consent",
      "A transparent 'Privacy Consent' process builds trust by clearly explaining how client data is used and obtaining permission for necessary functionalities",
      "Privacy consents make the app too complex",
    ],
    correctAnswer:
      "A transparent 'Privacy Consent' process builds trust by clearly explaining how client data is used and obtaining permission for necessary functionalities",
  },
  {
    category: "App Development",
    question:
      "How can a 'Multilingual Support' feature cater to a diverse client base and enhance user accessibility?",
    options: [
      "Multilingual support is unnecessary",
      "Clients prefer a single language",
      "Incorporating 'Multilingual Support' ensures a broader audience can use the app in their preferred language, improving inclusivity and user satisfaction",
      "Multilingual support makes the app too slow",
    ],
    correctAnswer:
      "Incorporating 'Multilingual Support' ensures a broader audience can use the app in their preferred language, improving inclusivity and user satisfaction",
  },
  {
    category: "App Development",
    question:
      "What role does a 'Simple Checkout Process' play in encouraging clients to complete transactions within your app?",
    options: [
      "Complex checkouts are better",
      "Clients enjoy a lengthy checkout process",
      "A streamlined 'Simple Checkout Process' minimizes friction, making it easy for clients to complete purchases and increasing conversion rates",
      "Simple checkouts make the app too expensive",
    ],
    correctAnswer:
      "A streamlined 'Simple Checkout Process' minimizes friction, making it easy for clients to complete purchases and increasing conversion rates",
  },
  {
    category: "App Development",
    question:
      "How can a 'Time-Saving Features' section benefit clients by optimizing their daily tasks within the app?",
    options: [
      "Time-saving features are unnecessary",
      "Clients prefer spending more time on tasks",
      "Highlighting 'Time-Saving Features' helps clients efficiently accomplish tasks, emphasizing the app's value in optimizing their daily routines",
      "Time-saving features make the app too complicated",
    ],
    correctAnswer:
      "Highlighting 'Time-Saving Features' helps clients efficiently accomplish tasks, emphasizing the app's value in optimizing their daily routines",
  },
  {
    category: "App Development",
    question:
      "What benefits can a 'Personalized App Recommendations' feature bring to clients seeking new content or services?",
    options: [
      "Recommendations are irrelevant",
      "Clients prefer to discover everything on their own",
      "Offering 'Personalized App Recommendations' suggests tailored content or services, enhancing the client's app experience by providing relevant and interesting suggestions",
      "Recommendations make the app too cluttered",
    ],
    correctAnswer:
      "Offering 'Personalized App Recommendations' suggests tailored content or services, enhancing the client's app experience by providing relevant and interesting suggestions",
  },
  {
    category: "App Development",
    question:
      "How does an 'Automatic Login' feature contribute to client convenience and a seamless user experience?",
    options: [
      "Automatic login is unnecessary",
      "Clients prefer manual login every time",
      "Enabling 'Automatic Login' streamlines the user experience, allowing clients to access the app quickly without repetitive manual login steps",
      "Automatic login makes the app less secure",
    ],
    correctAnswer:
      "Enabling 'Automatic Login' streamlines the user experience, allowing clients to access the app quickly without repetitive manual login steps",
  },
  {
    category: "App Development",
    question:
      "Why is it crucial for your app to have a 'Clear App Permissions' explanation during the onboarding process?",
    options: [
      "App permissions are irrelevant",
      "Clients prefer not to understand permissions",
      "Clearly explaining 'App Permissions' during onboarding builds trust by informing clients about the necessary access the app requires, ensuring transparency",
      "App permissions make the app too complex",
    ],
    correctAnswer:
      "Clearly explaining 'App Permissions' during onboarding builds trust by informing clients about the necessary access the app requires, ensuring transparency",
  },
  {
    category: "App Development",
    question:
      "How can a 'User-Friendly Onboarding Animation' positively impact the initial experience for clients using your app?",
    options: [
      "Onboarding animations are unnecessary",
      "Clients prefer a static onboarding process",
      "A well-designed 'User-Friendly Onboarding Animation' introduces clients to key features in a visually engaging way, enhancing the onboarding experience",
      "Onboarding animations make the app too slow",
    ],
    correctAnswer:
      "A well-designed 'User-Friendly Onboarding Animation' introduces clients to key features in a visually engaging way, enhancing the onboarding experience",
  },
  {
    category: "App Development",
    question:
      "What benefits can a 'Progressive Loading' approach bring to clients when accessing content within your app?",
    options: [
      "Progressive loading is unnecessary",
      "Clients prefer to wait for all content to load at once",
      "Adopting a 'Progressive Loading' approach allows clients to access essential content quickly, improving overall app responsiveness",
      "Progressive loading makes the app too complicated",
    ],
    correctAnswer:
      "Adopting a 'Progressive Loading' approach allows clients to access essential content quickly, improving overall app responsiveness",
  },
  {
    category: "App Development",
    question:
      "How does a 'Daily Tip' feature contribute to ongoing client engagement and learning within your app?",
    options: [
      "Daily tips are irrelevant",
      "Clients prefer not to receive tips",
      "Introducing a 'Daily Tip' feature provides clients with valuable insights and best practices, keeping them engaged and informed about app functionalities",
      "Daily tips make the app too cluttered",
    ],
    correctAnswer:
      "Introducing a 'Daily Tip' feature provides clients with valuable insights and best practices, keeping them engaged and informed about app functionalities",
  },
  {
    category: "App Development",
    question:
      "Why is it important for your app to have a 'Personalized Recommendations History' section for clients to revisit suggested content?",
    options: [
      "Recommendation history is unnecessary",
      "Clients prefer not to revisit recommendations",
      "Maintaining a 'Personalized Recommendations History' allows clients to rediscover and explore suggested content, enhancing their personalized app experience",
      "Recommendation history makes the app too competitive",
    ],
    correctAnswer:
      "Maintaining a 'Personalized Recommendations History' allows clients to rediscover and explore suggested content, enhancing their personalized app experience",
  },
  {
    category: "App Development",
    question:
      "How can a 'Customizable Widget' feature benefit clients by providing quick access to specific app functions?",
    options: [
      "Widgets are unnecessary",
      "Clients prefer a fixed app layout",
      "Including a 'Customizable Widget' feature allows clients to personalize their app interface, providing quick access to the functions they use most",
      "Widgets make the app too slow",
    ],
    correctAnswer:
      "Including a 'Customizable Widget' feature allows clients to personalize their app interface, providing quick access to the functions they use most",
  },
  {
    category: "App Development",
    question:
      "What role does an 'Intelligent Search Suggestions' feature play in helping clients find relevant content within your app?",
    options: [
      "Search suggestions are overrated",
      "Clients prefer generic search results",
      "Implementing 'Intelligent Search Suggestions' offers clients more accurate and relevant results, improving their search experience within the app",
      "Search suggestions make the app too cluttered",
    ],
    correctAnswer:
      "Implementing 'Intelligent Search Suggestions' offers clients more accurate and relevant results, improving their search experience within the app",
  },
  {
    category: "App Development",
    question:
      "How can a 'Daily Reminder' feature enhance client engagement by prompting them to interact with your app regularly?",
    options: [
      "Daily reminders are unnecessary",
      "Clients prefer not to be reminded",
      "Introducing a 'Daily Reminder' feature encourages clients to revisit the app, reinforcing its value and promoting consistent engagement",
      "Daily reminders make the app too competitive",
    ],
    correctAnswer:
      "Introducing a 'Daily Reminder' feature encourages clients to revisit the app, reinforcing its value and promoting consistent engagement",
  },
  {
    category: "App Development",
    question:
      "Why is it crucial for your app to have a 'Guest Mode' option, allowing clients to explore its features without signing up?",
    options: [
      "Guest mode is irrelevant",
      "Clients prefer mandatory sign-ups",
      "Offering a 'Guest Mode' option allows clients to experience the app's functionality before committing to sign up, improving user acquisition",
      "Guest mode makes the app less secure",
    ],
    correctAnswer:
      "Offering a 'Guest Mode' option allows clients to experience the app's functionality before committing to sign up, improving user acquisition",
  },
  {
    category: "App Development",
    question:
      "How can a 'Time-of-Day Personalization' feature tailor the app's content to match the preferences and routines of individual clients?",
    options: [
      "Time-of-day personalization is unnecessary",
      "Clients prefer static content at all times",
      "Implementing 'Time-of-Day Personalization' adjusts the app's content based on the time, providing a more relevant and enjoyable experience for clients",
      "Time-of-day personalization makes the app too complicated",
    ],
    correctAnswer:
      "Implementing 'Time-of-Day Personalization' adjusts the app's content based on the time, providing a more relevant and enjoyable experience for clients",
  },
  {
    category: "App Development",
    question:
      "How does a 'Voice Search' feature contribute to client convenience by allowing hands-free navigation within your app?",
    options: [
      "Voice search is unnecessary",
      "Clients prefer manual search methods",
      "Incorporating 'Voice Search' allows clients to search and navigate the app using voice commands, enhancing accessibility and ease of use",
      "Voice search makes the app too slow",
    ],
    correctAnswer:
      "Incorporating 'Voice Search' allows clients to search and navigate the app using voice commands, enhancing accessibility and ease of use",
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
