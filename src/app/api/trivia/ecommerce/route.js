import { NextResponse } from "next/server";
const qns = [
  {
    category: "E-commerce Development",
    question:
      "How can a 'User-Friendly Product Page' enhance the shopping experience for clients on your e-commerce site?",
    options: [
      "Product pages don't matter",
      "Clients prefer complex product pages",
      "A well-designed 'User-Friendly Product Page' makes it easy for clients to view details, make decisions, and complete purchases seamlessly",
      "User-friendly product pages make the site too cluttered",
    ],
    correctAnswer:
      "A well-designed 'User-Friendly Product Page' makes it easy for clients to view details, make decisions, and complete purchases seamlessly",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'Secure Checkout Process' to protect client information during transactions?",
    options: [
      "Checkout security is overrated",
      "Clients prefer insecure transactions",
      "Ensuring a 'Secure Checkout Process' builds trust by safeguarding client data, encouraging confident and worry-free online shopping",
      "Secure checkout processes make the site too complicated",
    ],
    correctAnswer:
      "Ensuring a 'Secure Checkout Process' builds trust by safeguarding client data, encouraging confident and worry-free online shopping",
  },
  {
    category: "E-commerce Development",
    question:
      "How does an 'Easy-to-Navigate Category Menu' contribute to clients quickly finding the products they're looking for on your e-commerce site?",
    options: [
      "Category menus don't matter",
      "Clients enjoy complex navigation",
      "A clear 'Easy-to-Navigate Category Menu' simplifies product discovery, helping clients find what they need efficiently and enhancing overall site usability",
      "Easy-to-navigate menus make the site too crowded",
    ],
    correctAnswer:
      "A clear 'Easy-to-Navigate Category Menu' simplifies product discovery, helping clients find what they need efficiently and enhancing overall site usability",
  },
  {
    category: "E-commerce Development",
    question:
      "What benefits can a 'Wishlist' feature bring to clients by allowing them to save and track desired items on your e-commerce site?",
    options: [
      "Wishlists are unnecessary",
      "Clients prefer not to save items for later",
      "Incorporating a 'Wishlist' feature enables clients to save and track items, making it easy for them to revisit and purchase at a later time",
      "Wishlists make the site too slow",
    ],
    correctAnswer:
      "Incorporating a 'Wishlist' feature enables clients to save and track items, making it easy for them to revisit and purchase at a later time",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Discount Code' field during the checkout process benefit clients by providing cost-saving opportunities on your e-commerce site?",
    options: [
      "Discount codes are irrelevant",
      "Clients prefer not to use discounts",
      "Including a 'Discount Code' field allows clients to enjoy cost savings, encouraging them to make purchases and increasing overall satisfaction",
      "Discount codes make the site too cluttered",
    ],
    correctAnswer:
      "Including a 'Discount Code' field allows clients to enjoy cost savings, encouraging them to make purchases and increasing overall satisfaction",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have a 'Mobile-Optimized Design' to ensure a seamless shopping experience for clients on various devices?",
    options: [
      "Mobile optimization is unnecessary",
      "Clients prefer desktop-only experiences",
      "A 'Mobile-Optimized Design' ensures clients can easily browse and make purchases on smartphones or tablets, accommodating diverse user preferences",
      "Mobile optimization makes the site too complicated",
    ],
    correctAnswer:
      "A 'Mobile-Optimized Design' ensures clients can easily browse and make purchases on smartphones or tablets, accommodating diverse user preferences",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Customer Reviews' section contribute to building trust and confidence in your e-commerce site for potential clients?",
    options: [
      "Customer reviews don't matter",
      "Clients prefer not to read reviews",
      "A well-curated 'Customer Reviews' section showcases positive experiences, helping clients make informed decisions and trust the quality of products or services",
      "Customer reviews make the site too crowded",
    ],
    correctAnswer:
      "A well-curated 'Customer Reviews' section showcases positive experiences, helping clients make informed decisions and trust the quality of products or services",
  },
  {
    category: "E-commerce Development",
    question:
      "What role does an 'Intuitive Search Bar' play in helping clients quickly find specific products on your e-commerce site?",
    options: [
      "Search bars are overrated",
      "Clients prefer scrolling through products",
      "An 'Intuitive Search Bar' allows clients to search for specific items effortlessly, streamlining the shopping process and improving overall user satisfaction",
      "Intuitive search bars make the site too slow",
    ],
    correctAnswer:
      "An 'Intuitive Search Bar' allows clients to search for specific items effortlessly, streamlining the shopping process and improving overall user satisfaction",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Live Chat Support' feature assist clients in real-time, addressing concerns and inquiries on your e-commerce site?",
    options: [
      "Live chat support is unnecessary",
      "Clients prefer waiting for email responses",
      "Incorporating 'Live Chat Support' provides clients with immediate assistance, resolving issues promptly and improving overall customer satisfaction",
      "Live chat support makes the site too complicated",
    ],
    correctAnswer:
      "Incorporating 'Live Chat Support' provides clients with immediate assistance, resolving issues promptly and improving overall customer satisfaction",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'Simple Return Process' to ensure clients feel confident about making purchases?",
    options: [
      "Return processes are overrated",
      "Clients don't mind complex return procedures",
      "A 'Simple Return Process' builds trust by making it easy for clients to return products if needed, enhancing their confidence in the online shopping experience",
      "Simple return processes make the site too cluttered",
    ],
    correctAnswer:
      "A 'Simple Return Process' builds trust by making it easy for clients to return products if needed, enhancing their confidence in the online shopping experience",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Personalized Product Recommendations' feature enhance the shopping experience for clients on your e-commerce site?",
    options: [
      "Personalized recommendations are irrelevant",
      "Clients prefer generic suggestions",
      "Integrating 'Personalized Product Recommendations' offers clients tailored suggestions, making their shopping experience more enjoyable and increasing the likelihood of additional purchases",
      "Personalized recommendations make the site too cluttered",
    ],
    correctAnswer:
      "Integrating 'Personalized Product Recommendations' offers clients tailored suggestions, making their shopping experience more enjoyable and increasing the likelihood of additional purchases",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have an 'Order Tracking' feature, allowing clients to monitor the status of their purchases in real-time?",
    options: [
      "Order tracking is unnecessary",
      "Clients prefer surprises in shipping",
      "Providing an 'Order Tracking' feature empowers clients to monitor their purchases, enhancing transparency and satisfaction throughout the shipping process",
      "Order tracking features make the site too complicated",
    ],
    correctAnswer:
      "Providing an 'Order Tracking' feature empowers clients to monitor their purchases, enhancing transparency and satisfaction throughout the shipping process",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Limited-Time Offers' section contribute to creating a sense of urgency and excitement for clients on your e-commerce site?",
    options: [
      "Limited-time offers are irrelevant",
      "Clients prefer long-lasting deals",
      "Showcasing 'Limited-Time Offers' creates a sense of urgency, encouraging clients to make quicker purchase decisions and take advantage of exclusive deals",
      "Limited-time offers make the site too crowded",
    ],
    correctAnswer:
      "Showcasing 'Limited-Time Offers' creates a sense of urgency, encouraging clients to make quicker purchase decisions and take advantage of exclusive deals",
  },
  {
    category: "E-commerce Development",
    question:
      "What benefits can a 'Saved Payment Methods' feature bring to clients by streamlining the checkout process on your e-commerce site?",
    options: [
      "Saved payment methods are unnecessary",
      "Clients prefer entering payment details each time",
      "Allowing 'Saved Payment Methods' simplifies the checkout process, making it convenient for clients to complete transactions quickly and efficiently",
      "Saved payment methods make the site too slow",
    ],
    correctAnswer:
      "Allowing 'Saved Payment Methods' simplifies the checkout process, making it convenient for clients to complete transactions quickly and efficiently",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Social Media Integration' feature benefit clients in sharing their favorite products and experiences on your e-commerce site?",
    options: [
      "Social media integration is irrelevant",
      "Clients prefer not to share their purchases",
      "Incorporating 'Social Media Integration' allows clients to easily share their favorite products, promoting word-of-mouth marketing and expanding the reach of your e-commerce site",
      "Social media integration makes the site too complicated",
    ],
    correctAnswer:
      "Incorporating 'Social Media Integration' allows clients to easily share their favorite products, promoting word-of-mouth marketing and expanding the reach of your e-commerce site",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'Guest Checkout' option, allowing clients to make purchases without creating an account?",
    options: [
      "Guest checkout is irrelevant",
      "Clients prefer mandatory account creation",
      "Offering a 'Guest Checkout' option provides a seamless and quick experience for clients who want to make purchases without the commitment of creating an account",
      "Guest checkout makes the site less secure",
    ],
    correctAnswer:
      "Offering a 'Guest Checkout' option provides a seamless and quick experience for clients who want to make purchases without the commitment of creating an account",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Product Comparison' feature assist clients in making informed decisions about their purchases on your e-commerce site?",
    options: [
      "Product comparison is unnecessary",
      "Clients prefer making impulsive purchases",
      "Introducing a 'Product Comparison' feature enables clients to evaluate product specifications side by side, helping them make informed and confident purchase decisions",
      "Product comparison features make the site too crowded",
    ],
    correctAnswer:
      "Introducing a 'Product Comparison' feature enables clients to evaluate product specifications side by side, helping them make informed and confident purchase decisions",
  },
  {
    category: "E-commerce Development",
    question:
      "What role does a 'Frequently Asked Questions (FAQ)' section play in providing clients with quick answers and guidance on your e-commerce site?",
    options: [
      "FAQ sections are overrated",
      "Clients prefer contacting customer support for every question",
      "A well-organized 'Frequently Asked Questions (FAQ)' section offers clients instant answers, reducing the need for additional support and enhancing overall user experience",
      "FAQ sections make the site too complicated",
    ],
    correctAnswer:
      "A well-organized 'Frequently Asked Questions (FAQ)' section offers clients instant answers, reducing the need for additional support and enhancing overall user experience",
  },
  {
    category: "E-commerce Development",
    question:
      "How can an 'Email Subscription' feature benefit clients by providing exclusive updates and promotions from your e-commerce site?",
    options: [
      "Email subscriptions are irrelevant",
      "Clients prefer not to receive updates",
      "Implementing an 'Email Subscription' feature allows clients to stay informed about new products and promotions, fostering a loyal customer base",
      "Email subscriptions make the site too cluttered",
    ],
    correctAnswer:
      "Implementing an 'Email Subscription' feature allows clients to stay informed about new products and promotions, fostering a loyal customer base",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have a 'Product Availability Status' to inform clients about stock levels and avoid disappointments?",
    options: [
      "Product availability status is irrelevant",
      "Clients don't mind unexpected stock shortages",
      "Providing 'Product Availability Status' keeps clients informed, minimizing disappointments and ensuring a positive shopping experience on your e-commerce site",
      "Product availability status makes the site too complicated",
    ],
    correctAnswer:
      "Providing 'Product Availability Status' keeps clients informed, minimizing disappointments and ensuring a positive shopping experience on your e-commerce site",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Product Video Showcase' feature enhance the client's understanding and appreciation of products on your e-commerce site?",
    options: [
      "Product videos are unnecessary",
      "Clients prefer static images",
      "Incorporating a 'Product Video Showcase' allows clients to see products in action, providing a more immersive and informative shopping experience",
      "Product video showcases make the site too cluttered",
    ],
    correctAnswer:
      "Incorporating a 'Product Video Showcase' allows clients to see products in action, providing a more immersive and informative shopping experience",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have an 'Automatic Currency Conversion' feature for international clients, ensuring transparent pricing?",
    options: [
      "Currency conversion is unnecessary",
      "Clients prefer dealing with currency conversions manually",
      "Implementing 'Automatic Currency Conversion' simplifies the shopping experience for international clients, displaying prices in their local currency and avoiding confusion",
      "Currency conversion features make the site too complicated",
    ],
    correctAnswer:
      "Implementing 'Automatic Currency Conversion' simplifies the shopping experience for international clients, displaying prices in their local currency and avoiding confusion",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Qwik View' option contribute to a streamlined shopping process by allowing clients to preview product details without leaving the main page on your e-commerce site?",
    options: [
      "Qwik view options are overrated",
      "Clients prefer navigating to separate product pages",
      "Introducing a 'Qwik View' option enables clients to preview essential product details instantly, saving time and improving overall user experience",
      "Qwik view options make the site too crowded",
    ],
    correctAnswer:
      "Introducing a 'Qwik View' option enables clients to preview essential product details instantly, saving time and improving overall user experience",
  },
  {
    category: "E-commerce Development",
    question:
      "What benefits can a 'Buy Now, Pay Later' payment option bring to clients by providing flexible payment plans on your e-commerce site?",
    options: [
      "Buy now, pay later options are irrelevant",
      "Clients prefer traditional payment methods",
      "Offering a 'Buy Now, Pay Later' option gives clients flexibility in managing their finances, making high-quality products more accessible",
      "Buy now, pay later options make the site too slow",
    ],
    correctAnswer:
      "Offering a 'Buy Now, Pay Later' option gives clients flexibility in managing their finances, making high-quality products more accessible",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Virtual Try-On' feature benefit clients by allowing them to visualize products, such as clothing or accessories, before making a purchase on your e-commerce site?",
    options: [
      "Virtual try-on features are unnecessary",
      "Clients prefer making blind purchases",
      "Incorporating a 'Virtual Try-On' feature enhances the online shopping experience, allowing clients to visualize products and make confident purchase decisions",
      "Virtual try-on features make the site too complicated",
    ],
    correctAnswer:
      "Incorporating a 'Virtual Try-On' feature enhances the online shopping experience, allowing clients to visualize products and make confident purchase decisions",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have an 'Instant Purchase Confirmation' message to reassure clients that their order was successfully placed?",
    options: [
      "Purchase confirmations are overrated",
      "Clients prefer uncertainty after making a purchase",
      "Providing an 'Instant Purchase Confirmation' reassures clients and enhances their confidence by confirming that their order was successfully placed",
      "Purchase confirmations make the site too crowded",
    ],
    correctAnswer:
      "Providing an 'Instant Purchase Confirmation' reassures clients and enhances their confidence by confirming that their order was successfully placed",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Loyalty Program' benefit clients by rewarding them for repeat purchases and brand loyalty on your e-commerce site?",
    options: [
      "Loyalty programs are irrelevant",
      "Clients prefer not to be rewarded for loyalty",
      "Implementing a 'Loyalty Program' encourages repeat business and brand loyalty by offering clients exclusive rewards and discounts",
      "Loyalty programs make the site too slow",
    ],
    correctAnswer:
      "Implementing a 'Loyalty Program' encourages repeat business and brand loyalty by offering clients exclusive rewards and discounts",
  },
  {
    category: "E-commerce Development",
    question:
      "What role does an 'Automatic Recommendations at Checkout' feature play in suggesting complementary products, increasing average order value on your e-commerce site?",
    options: [
      "Automatic recommendations are unnecessary",
      "Clients prefer navigating through the entire catalog",
      "Integrating 'Automatic Recommendations at Checkout' suggests complementary items, encouraging clients to explore additional products and enhance their shopping experience",
      "Automatic recommendations make the site too complicated",
    ],
    correctAnswer:
      "Integrating 'Automatic Recommendations at Checkout' suggests complementary items, encouraging clients to explore additional products and enhance their shopping experience",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Flash Sale' event create excitement and encourage clients to make quicker purchasing decisions on your e-commerce site?",
    options: [
      "Flash sales are irrelevant",
      "Clients prefer regular pricing",
      "Promoting a 'Flash Sale' event generates excitement and urgency, motivating clients to make quicker purchasing decisions to secure exclusive discounts",
      "Flash sales make the site too crowded",
    ],
    correctAnswer:
      "Promoting a 'Flash Sale' event generates excitement and urgency, motivating clients to make quicker purchasing decisions to secure exclusive discounts",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'One-Click Reorder' option, allowing clients to easily repurchase their favorite items with a single click?",
    options: [
      "One-click reorder options are unnecessary",
      "Clients prefer a lengthy reordering process",
      "Offering a 'One-Click Reorder' option simplifies the repurchase process, making it convenient for clients to quickly restock their favorite products",
      "One-click reorder options make the site too slow",
    ],
    correctAnswer:
      "Offering a 'One-Click Reorder' option simplifies the repurchase process, making it convenient for clients to quickly restock their favorite products",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Gift Wrapping Option' enhance the overall shopping experience for clients by providing a personalized touch to their purchases on your e-commerce site?",
    options: [
      "Gift wrapping options are unnecessary",
      "Clients prefer plain packaging",
      "Including a 'Gift Wrapping Option' adds a personalized touch, making the unboxing experience special and creating a positive impression for clients",
      "Gift wrapping options make the site too cluttered",
    ],
    correctAnswer:
      "Including a 'Gift Wrapping Option' adds a personalized touch, making the unboxing experience special and creating a positive impression for clients",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have a 'Product Availability Notification' feature, allowing clients to receive alerts when out-of-stock items are back in stock?",
    options: [
      "Product availability notifications are irrelevant",
      "Clients prefer not to be notified about restocks",
      "Implementing 'Product Availability Notification' keeps clients informed and allows them to purchase desired items as soon as they become available again",
      "Product availability notifications make the site too complicated",
    ],
    correctAnswer:
      "Implementing 'Product Availability Notification' keeps clients informed and allows them to purchase desired items as soon as they become available again",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Product Size Guide' feature assist clients in making informed decisions about clothing and apparel purchases on your e-commerce site?",
    options: [
      "Size guides are overrated",
      "Clients prefer guessing their sizes",
      "Incorporating a 'Product Size Guide' provides clients with accurate sizing information, reducing the likelihood of returns and improving overall satisfaction",
      "Size guides make the site too crowded",
    ],
    correctAnswer:
      "Incorporating a 'Product Size Guide' provides clients with accurate sizing information, reducing the likelihood of returns and improving overall satisfaction",
  },
  {
    category: "E-commerce Development",
    question:
      "What benefits can a 'Live Product Demos' feature bring to clients by showcasing the functionality and usage of specific products on your e-commerce site?",
    options: [
      "Live product demos are unnecessary",
      "Clients prefer static product images",
      "Integrating 'Live Product Demos' allows clients to see products in action, providing a more engaging and informative shopping experience",
      "Live product demos make the site too slow",
    ],
    correctAnswer:
      "Integrating 'Live Product Demos' allows clients to see products in action, providing a more engaging and informative shopping experience",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Product Bundling' option benefit clients by offering cost-effective packages on your e-commerce site?",
    options: [
      "Product bundling is irrelevant",
      "Clients prefer buying individual items",
      "Providing 'Product Bundling' options offers clients cost savings, encouraging them to purchase complementary items together at a discounted rate",
      "Product bundling makes the site too complicated",
    ],
    correctAnswer:
      "Providing 'Product Bundling' options offers clients cost savings, encouraging them to purchase complementary items together at a discounted rate",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'Product Ratings and Reviews' section to assist clients in making informed decisions based on others' experiences?",
    options: [
      "Ratings and reviews are overrated",
      "Clients prefer making blind purchases",
      "A well-curated 'Product Ratings and Reviews' section provides valuable insights, helping clients make informed decisions and trust the quality of products",
      "Ratings and reviews make the site too cluttered",
    ],
    correctAnswer:
      "A well-curated 'Product Ratings and Reviews' section provides valuable insights, helping clients make informed decisions and trust the quality of products",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Savings Calculator' feature benefit clients by showing them potential cost savings when purchasing in bulk on your e-commerce site?",
    options: [
      "Savings calculators are unnecessary",
      "Clients prefer not to calculate savings",
      "Incorporating a 'Savings Calculator' allows clients to visualize potential cost savings, encouraging them to make bulk purchases and save money",
      "Savings calculators make the site too complicated",
    ],
    correctAnswer:
      "Incorporating a 'Savings Calculator' allows clients to visualize potential cost savings, encouraging them to make bulk purchases and save money",
  },
  {
    category: "E-commerce Development",
    question:
      "What role does a 'Real-Time Inventory Tracking' feature play in ensuring that clients have accurate information about product availability on your e-commerce site?",
    options: [
      "Inventory tracking is unnecessary",
      "Clients prefer not knowing real-time stock levels",
      "Implementing 'Real-Time Inventory Tracking' provides clients with accurate and up-to-date information, preventing disappointments due to out-of-stock items",
      "Real-time inventory tracking makes the site too crowded",
    ],
    correctAnswer:
      "Implementing 'Real-Time Inventory Tracking' provides clients with accurate and up-to-date information, preventing disappointments due to out-of-stock items",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Special Occasion Reminders' feature enhance client engagement by sending personalized notifications for events like birthdays or anniversaries on your e-commerce site?",
    options: [
      "Special occasion reminders are irrelevant",
      "Clients prefer not to receive personalized notifications",
      "Introducing 'Special Occasion Reminders' fosters a personal connection, prompting clients to explore special offers and make purchases for important occasions",
      "Special occasion reminders make the site too complicated",
    ],
    correctAnswer:
      "Introducing 'Special Occasion Reminders' fosters a personal connection, prompting clients to explore special offers and make purchases for important occasions",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have an 'Easy Return Label Generator' to simplify the return process for clients, ensuring a hassle-free experience?",
    options: [
      "Return label generators are unnecessary",
      "Clients prefer complicated return procedures",
      "Providing an 'Easy Return Label Generator' simplifies the return process, making it convenient for clients to generate return labels and ship items back effortlessly",
      "Return label generators make the site too slow",
    ],
    correctAnswer:
      "Providing an 'Easy Return Label Generator' simplifies the return process, making it convenient for clients to generate return labels and ship items back effortlessly",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Virtual Shopping Assistant' enhance the client's shopping experience by providing personalized product recommendations and assistance on your e-commerce site?",
    options: [
      "Virtual shopping assistants are unnecessary",
      "Clients prefer browsing without assistance",
      "Integrating a 'Virtual Shopping Assistant' offers clients personalized guidance, making their shopping journey more enjoyable and increasing the likelihood of finding the perfect products",
      "Virtual shopping assistants make the site too cluttered",
    ],
    correctAnswer:
      "Integrating a 'Virtual Shopping Assistant' offers clients personalized guidance, making their shopping journey more enjoyable and increasing the likelihood of finding the perfect products",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'Customizable Wishlist' feature, allowing clients to organize and prioritize items based on their preferences?",
    options: [
      "Customizable wishlists are overrated",
      "Clients prefer static wishlists",
      "Implementing a 'Customizable Wishlist' feature empowers clients to organize and prioritize items, creating a more personalized and user-friendly shopping experience",
      "Customizable wishlists make the site too complicated",
    ],
    correctAnswer:
      "Implementing a 'Customizable Wishlist' feature empowers clients to organize and prioritize items, creating a more personalized and user-friendly shopping experience",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Surprise Deal of the Day' section create excitement for clients by offering exclusive and time-limited discounts on your e-commerce site?",
    options: [
      "Deal of the day sections are irrelevant",
      "Clients prefer regular pricing",
      "Showcasing a 'Surprise Deal of the Day' generates excitement, encouraging clients to visit your site regularly and discover exclusive discounts",
      "Deal of the day sections make the site too crowded",
    ],
    correctAnswer:
      "Showcasing a 'Surprise Deal of the Day' generates excitement, encouraging clients to visit your site regularly and discover exclusive discounts",
  },
  {
    category: "E-commerce Development",
    question:
      "What benefits can a '360-Degree Product View' feature bring to clients by allowing them to explore products from different angles on your e-commerce site?",
    options: [
      "360-degree product views are unnecessary",
      "Clients prefer static images",
      "Incorporating a '360-Degree Product View' offers clients a more detailed look at products, enhancing their online shopping experience and reducing uncertainty",
      "360-degree product views make the site too slow",
    ],
    correctAnswer:
      "Incorporating a '360-Degree Product View' offers clients a more detailed look at products, enhancing their online shopping experience and reducing uncertainty",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Secure Payment Badge' prominently displayed on your e-commerce site reassure clients about the safety of their financial transactions?",
    options: [
      "Secure payment badges are overrated",
      "Clients don't pay attention to security indicators",
      "Displaying a 'Secure Payment Badge' builds trust by assuring clients that their financial information is protected, enhancing overall confidence in making online purchases",
      "Secure payment badges make the site too cluttered",
    ],
    correctAnswer:
      "Displaying a 'Secure Payment Badge' builds trust by assuring clients that their financial information is protected, enhancing overall confidence in making online purchases",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it crucial for your e-commerce site to have an 'Express Checkout' option, allowing clients to complete purchases quickly without going through lengthy processes?",
    options: [
      "Express checkout options are unnecessary",
      "Clients prefer spending extra time during checkout",
      "Offering an 'Express Checkout' option provides a streamlined and quick experience for clients who want to complete purchases efficiently",
      "Express checkout options make the site less secure",
    ],
    correctAnswer:
      "Offering an 'Express Checkout' option provides a streamlined and quick experience for clients who want to complete purchases efficiently",
  },
  {
    category: "E-commerce Development",
    question:
      "How does a 'Product Highlight of the Week' section draw attention to specific products and create engagement with clients on your e-commerce site?",
    options: [
      "Product highlights are irrelevant",
      "Clients prefer discovering products on their own",
      "Showcasing a 'Product Highlight of the Week' generates excitement and engagement, encouraging clients to explore featured products and make informed purchase decisions",
      "Product highlights make the site too complicated",
    ],
    correctAnswer:
      "Showcasing a 'Product Highlight of the Week' generates excitement and engagement, encouraging clients to explore featured products and make informed purchase decisions",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'User-Friendly Returns Policy' reassure clients by providing clear guidelines and making the return process hassle-free on your e-commerce site?",
    options: [
      "User-friendly returns policies are overrated",
      "Clients prefer complicated return procedures",
      "Implementing a 'User-Friendly Returns Policy' builds trust and confidence, ensuring clients feel secure knowing they can easily return products if needed",
      "User-friendly returns policies make the site too crowded",
    ],
    correctAnswer:
      "Implementing a 'User-Friendly Returns Policy' builds trust and confidence, ensuring clients feel secure knowing they can easily return products if needed",
  },
  {
    category: "E-commerce Development",
    question:
      "Why is it important for your e-commerce site to have a 'Gift Card' option, allowing clients to purchase and send digital gift cards to friends and family?",
    options: [
      "Gift card options are irrelevant",
      "Clients prefer physical gifts",
      "Introducing a 'Gift Card' option provides clients with a convenient and thoughtful gifting solution, expanding the reach of your e-commerce site through word-of-mouth recommendations",
      "Gift card options make the site too complicated",
    ],
    correctAnswer:
      "Introducing a 'Gift Card' option provides clients with a convenient and thoughtful gifting solution, expanding the reach of your e-commerce site through word-of-mouth recommendations",
  },
  {
    category: "E-commerce Development",
    question:
      "How can a 'Live Customer Support Chat' feature assist clients in real-time, addressing concerns and inquiries promptly on your e-commerce site?",
    options: [
      "Live customer support chats are overrated",
      "Clients prefer waiting for email responses",
      "Incorporating 'Live Customer Support Chat' provides clients with immediate assistance, resolving issues promptly and improving overall customer satisfaction",
      "Live customer support chats make the site too slow",
    ],
    correctAnswer:
      "Incorporating 'Live Customer Support Chat' provides clients with immediate assistance, resolving issues promptly and improving overall customer satisfaction",
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
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
