import board1 from "../assets/ss/Screenshot 2026-01-11 012422.png";
import board2 from "../assets/ss/Dashboard.png";

// استيراد الصور لكل كارد
import board11 from "../assets/ss/إضافة موظف.png";
import board3 from "../assets/ss/الامتحانات علامات الاطباء.png";
import board4 from "../assets/ss/البريد الخارجي صادر.png";
import board5 from "../assets/ss/الأرشيف.png";
import board6 from "../assets/ss/البريد داخلي صادر.png";
import board7 from "../assets/ss/photo_2026-01-09_03-45-17.jpg";

import a1 from "../assets/salati/photo_2026-01-09_04-06-47.jpg";
import a2 from "../assets/salati/photo_2026-01-09_04-06-28.jpg";
import a3 from "../assets/salati/photo_2026-01-09_04-07-01.jpg";
import a4 from "../assets/salati/photo_2026-01-09_04-06-56.jpg";
import a5 from "../assets/salati/photo_2026-01-09_04-06-52.jpg";
import a6 from "../assets/salati/photo_2026-01-09_04-06-41.jpg";
import a7 from "../assets/salati/photo_2026-01-09_04-06-37.jpg";
import a8 from "../assets/salati/photo_2026-01-09_04-06-32.jpg";
import a9 from "../assets/salati/photo_2026-01-09_04-06-28.jpg";


import b1 from "../assets/compain/2222.jpg";
import b2 from "../assets/compain/photo_2026-01-09_03-38-37.jpg";
import b3 from "../assets/compain/photo_2026-01-09_03-38-37.jpg";
import b4 from "../assets/compain/photo_2026-01-09_03-38-47.jpg";
import b5 from "../assets/compain/photo_2026-01-12_01-33-45.jpg";
import b6 from "../assets/compain/ل.jpg";
import b7 from "../assets/compain/ب.jpg";
import b61 from "../assets/compain/ض.jpg";
import b62 from "../assets/compain/س.jpg";
import b63 from "../assets/compain/ء.jpg";
import b64 from "../assets/compain/photo_2026-01-12_01-34-08.jpg";
import b65 from "../assets/compain/photo_2026-01-12_01-34-04.jpg";
import b66 from "../assets/compain/photo_2026-01-12_01-33-50.jpg";
import b67 from "../assets/compain/photo_2026-01-12_01-33-59.jpg";
import b68 from "../assets/compain/photo_2026-01-12_01-33-54.jpg";




import b11 from "../assets/glow/photo_2026-01-09_03-31-27.jpg";
import b12 from "../assets/glow/photo_2026-01-09_03-31-45.jpg";
import b13 from "../assets/glow/photo_2026-01-09_03-31-49.jpg";
import b14 from "../assets/glow/photo_2026-01-09_03-32-03.jpg";
import b15 from "../assets/glow/photo_2026-01-09_03-31-53.jpg";
import b16 from "../assets/glow/image.png";
import b17 from "../assets/glow/photo_2026-01-09_03-31-58.jpg";
import b18 from "../assets/glow/photo_2026-01-09_03-32-12.jpg";




import salati1 from "../assets/salati/photo_2026-01-09_04-06-47.jpg";
import complaints1 from "../assets/compain/image.png";
import todo1 from "../assets/todo/photo_2026-01-09_03-59-19.jpg";
import todo2 from "../assets/todo/photo_2026-01-09_03-59-23.jpg";
import todo3 from "../assets/todo/photo_2026-01-09_03-59-55.jpg";


import weather1 from "../assets/halab/photo_2026-01-09_03-50-43.jpg";
import weather2 from "../assets/halab/photo_2026-01-09_03-50-43.jpg";

export const projectsData = [
  {
    id: "syrian-board",
    title: "The Syrian Board",
    images: [board1,board11, board2,board1,board3,board4,board5,board6,board7],
    features: [
      "Comprehensive digital transformation from paper-based workflows to a fully integrated system",
      "Advanced role-based access control with 17 hierarchical roles and fine-grained permissions",
      "Administrative dashboard for announcements, statistics monitoring, and sensitive operation approvals",
      "Configurable working days and system access hours to control employee platform usage",
      "Employee account management including creation, department assignment, role designation, and account suspension",
      "Dynamic transaction management with customizable workflows, fees, and approval processes",
      "Support for creating transaction templates manually or by importing Word documents",
      "Examination and specialization management with configurable exam cycles, difficulty distribution, and approvals",
      "Centralized question bank with manual entry and Excel import capabilities",
      "Financial verification system for validating payment receipts attached to transactions",
      "Internal mail and communication system connecting all departments",
      "Approval-based internal correspondence workflow with executive-level bypass permissions",
      "Real-time statistics and performance insights for operational monitoring",
      "Modern, responsive dashboard UI optimized for performance and scalability",
    ],
  },

  {
    id: "salati",
    title: "Salati",
    images: [a1, a2, a3, a4, a5,a6,a7,a8],
    features: [
      "Secure authentication with email/password and Google sign-in",
      "Accurate prayer time display based on the user's current location",
      "Flexible prayer time calculation methods based on madhhab or user preference",
      "Integrated Adhan notifications with selectable audio from Makkah or Madinah",
      "Hijri calendar with seamless switching to the Gregorian calendar",
      "Comprehensive Athkar library including morning, evening, and sleep remembrances",
      "Favorite Athkar management for quick access",
      "Spiritual progress tracking with daily indicators and weekly statistics",
      "Digital Tasbeeh and Tahleel counter with intention setting",
      "Audio Duas with selectable reciters and in-app playback",
      "Light and dark theme support for enhanced user comfort",
      "Accurate Qibla direction based on the user's location",
      "Morning and evening Athkar reminder notifications",
    ],
  },

  {
    id: "complaints",
    title: "Complaints Management System",
    images: [b1, b2, b3, b4, b5, b6,b61,b62,b63,b64,b65,b67,b66,b68,b7 ],
    features: [
      "Role-based access with distinct Admin and Employee permissions",
      "Government entities management with full create, update, and delete capabilities",
      "Employee account management including creation, editing, and removal",
      "Centralized complaints dashboard with full complaint lifecycle management",
      "Complaint booking and assignment system",
      "Real-time complaint status updates",
      "Advanced search and filtering functionality",
      "Statistical reports and analytics for performance monitoring",
      "In-app notifications for complaint updates and workflow changes",
    ],
  },

  {
    id: "glowpink",
    title: "GlowPink Delivery App",
    images: [b18,b11, b12, b13, b14, b15, b16,b17,b18 ],
    features: [
      "Dual-role system with User and Admin access levels",
      "Complete delivery management system for orders and shipments",
      "Real-time location tracking using geographic positioning",
      "Integrated Stripe payment gateway for secure online payments",
      "Order placement and tracking with live status updates",
      "Push notification system for order updates and delivery status",
      "Admin dashboard for managing products, orders, and users",
      "Delivery workflow management from order confirmation to completion",
      "Optimized user experience with modern, responsive UI",
    ],
  },

  {
    id: "todo",
    title: "Todo List App",
    images: [todo1, todo2, todo3],
    features: [
      "Create, edit, and delete tasks with ease",
      "Mark tasks as completed or pending",
      "Organize tasks into categories for better management",
      "Set priorities for each task to optimize workflow",
      "Receive notifications and reminders for upcoming tasks",
      "Track daily and weekly task completion",
      "Modern, responsive interface optimized for productivity",
    ],
  },

  {
    id: "aleppo-weather",
    title: "Aleppo Weather App",
    images: [weather1, weather2],
    features: [
      "Real-time weather data for Aleppo with current, min, and max temperatures",
      "Displays weather description with corresponding icon for clarity",
      "Multilingual support for English and Arabic with instant switching",
      "Localized date and time using moment.locale() and i18n.changeLanguage()",
      "Clean and responsive UI using Material UI for optimal UX",
      "Live API integration via Axios with OpenWeatherMap",
      "Formatted local time and date per selected language",
      "Weather icons using Material UI Icons (e.g., WbCloudyIcon) for intuitive representation",
    ],
  },
];
