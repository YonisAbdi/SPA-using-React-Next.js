Tolk Direct

Tolk Direct is an innovative digital platform designed to bridge communication gaps between non-Swedish speakers, public agencies, and professional interpreters. This comprehensive service aims to enhance the accessibility and efficiency of public services by facilitating easy and rapid booking of interpreters through a user-friendly online interface. Addressing the needs of a diverse society, Tolk Direct ensures that all individuals, regardless of their linguistic background, can access vital services seamlessly. The platform supports public agencies in delivering equitable services, empowers interpreters with flexible work management tools, and offers non-Swedish natives crucial linguistic assistance, fostering a more inclusive community.

Features

User Authentication: Allows users to log in as either a customer or a worker.
Session Booking: Customers can book sessions with available translators.
Session Management: Workers can view their scheduled sessions.
Responsive Design: The application is designed to work on both desktop and mobile devices.

Requirements
* Node.js (v14 or later)
* npm (v6 or later) or yarn (v1 or later)

Installation
1. Clone the repository to your local machine: https://github.com/YonisAbdi/SPA-using-React-Next.js.git
2. Navigate to the project directory: cd tolk-direct
3. Install the dependencies: npm install

Running the Application
1. Start the development server: npm run dev
2. Open your browser and navigate to http://localhost:3000

Project Structure
SPA-using-React-Next/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── booking/
│   │   │   └── page.js
│   │   ├── bookinginfo/
│   │   │   └── page.js
│   │   ├── contactinfo/
│   │   │   └── page.js
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── reviews/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   ├── layout.module.css
│   │   ├── page.js
│   │   └── page.module.css
│   ├── Components/
│   │   ├── AuthContext.js
│   │   ├── BookingInfo.js
│   │   ├── Reviews.js
│   │   ├── Navigation/
│   │   │   ├── Navigations.js
│   │   │   └── Navigation.module.css
│   └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── ...

Usage
Home Page: Displays the Tolk Direct logo and a welcoming text.
About Page: Provides information about the product.
Contact Page: Displays contact details.
Login Page: Allows users to log in.
Booking Page: Customers can book sessions, and workers can view their scheduled sessions.


APIs
Mock API Translators API: Fetches the list of available translators.
URL: https://6648dd804032b1331beca45e.mockapi.io/endpoint/translators/translator


Responsive Design
The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices. This is achieved using CSS Grid, Flexbox, and media queries.
