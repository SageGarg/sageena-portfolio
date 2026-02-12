export const Projects = [
  {
    sectionTitle: "AI & ML Projects",
    data: [
      {
        category: "AI",
        title: "SIGNAL VERSE",
        hoverTitle: "Flask based LLM",
        subTitle:
          "A Flask-based RAG application: traffic-engineering PDFs are indexed into a MySQL-backed vector store, embeddings retrieve relevant passages, and LangChain uses the OpenAI API to generate answers.",
        image: "/images/signalverse.png",
        link: "https://github.com/SageGarg/signalVerse",
        demo: "http://trafficsignalverse.com/",
        stack: ["Python", "Langchain", "MySQL", "RAG"],
      },
      {
        category: "AI Research",
        title: "Traffic Sensor Clearinghouse",
        hoverTitle: "LLM-Based Sensor Analytics",
        subTitle:
          "An AI-enabled clearinghouse that standardizes and centralizes traffic signal sensor test results across states. Verified testing facilities submit schema-compliant reports, which are validated, indexed, and stored in a shared repository. An LLM-powered query interface enables natural-language and structured exploration of sensor performance data to support evidence-based deployment decisions.",
        image: "/images/traffic-sensor-clearinghouse.png",
        link: "http://trafficsignalverse.com/nchrp_bp/",
        demo: "http://trafficsignalverse.com/",
        stack: [
          "Python",
          "Flask",
          "LLMs",
          "RAG",
          "Structured Data Validation",
          "MySQL",
          "Access Control",
        ],
      },

      {
        category: "AI",
        title: "Sim2Video",
        hoverTitle: "LLM → CARLA → Diffusion",
        subTitle:
          "A proof-of-concept AI pipeline that converts natural-language crash descriptions into physics-consistent CARLA simulations and photorealistic synthetic crash videos. The system uses LLMs to structure crash scenarios, executes them with realistic vehicle and pedestrian dynamics, and enhances raw simulation outputs using diffusion-based video realism models.",
        // image: "/images/synthetic-crash-video.png",
        link: "https://github.com/SageGarg/sim2video",
        demo: "",
        stack: [
          "Python",
          "CARLA Simulator",
          "LLMs",
          "Diffusion Models",
          "Computer Vision",
          "JSON Schemas",
        ],
      },

      {
        category: "ML + Traffic Engineering",
        title: "CCI Phase 2",
        hoverTitle: "Automated CV & Analytics Yellow-Light Insight Engine",
        subTitle:
          "OpenCV-driven yellow-light detection, multi-camera clip stitching, and polynomial regression on vehicle trajectories to optimize signal timing and improve intersection safety.",

        // image: "/images/yellowlight.png",
        link: "https://github.com/SageGarg/cciPhase2",
        demo: "",
        stack: ["Python", "OpenCV", "TensorFlow"],
      },
    ],
  },
  {
    sectionTitle: "Other Projects",
    data: [
      {
        category: "Web & Full-Stack",
        title: "MOVIE MAZE",
        hoverTitle: "Movie Listing Website",
        subTitle:
          "A frontend movie directory with search, category filtering (Thriller, Romantic Comedy, Horror), and feedback interface. Built with HTML, CSS, and JavaScript.",
        link: "https://github.com/SageGarg/MovieMaze", // Replace with your actual GitHub repo link
        // demo: "https://your-deployed-site-link.com", // Replace with your live demo link if deployed
        image: "/images/moviemaze.png", // Replace with actual image path you’re using
        stack: ["HTML", "CSS", "Javascript"],
      },
      {
        category: "Mobile",
        title: "TRAVELMATE APP",
        hoverTitle: "Android Trip Planner",
        subTitle:
          "A Java-based Android app using Firebase Authentication, a weather API, and the Geofencing API to plan and manage trips. Features include a dashboard, trip tracking, in-app chat, expense logging, and a secure travel vault.",
        image: "/images/travelmate-android.png",
        link: "https://github.com/SageGarg/TravelMateApp",
        demo: "https://youtu.be/yBcNq37_ZDU?si=3br8Pv1m8-LNQzIl",
        stack: ["Java", "Android SDK", "Firebase Authentication"],
      },
      {
        category: "Web & Full-Stack",
        title: "TRIP ATLAS WEB",
        hoverTitle: "Full-Stack Travel Website",
        subTitle:
          "Full-stack travel-planning platform built with React, Tailwind CSS frontend and Express/MongoDB backend.",
        image: "/images/travelmate-web.png",
        link: "https://github.com/SageGarg/TripAtlas",
        demo: "",
        stack: ["React", "Tailwind", "MongoDB", "Node.js"],
      },

      {
        category: "Web & Full-Stack",
        title: "EDU MART",
        hoverTitle: "Course Catalog Web App",
        subTitle:
          "A React-based course shopping platform with search, filtering, cart, and payment flow (frontend only, no backend).",
        notBlank: true,
        link: "https://github.com/SageGarg/EduMart",
        image: "/images/edumart.png", // Replace with your actual image path
        // demo: "https://edumart-demo.vercel.app/", // Replace with your actual deployed demo link
        stack: ["React", "Node.js"],
      },
    ],
  },
];
