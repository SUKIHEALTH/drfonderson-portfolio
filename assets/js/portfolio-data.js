// Structured Portfolio Data for Dr. Sabine Fonderson
// Synchronized with LinkedIn exports, drfonderson.com, and published articles

const PORTFOLIO_DATA = {
  "name": "Dr. Sabine Fonderson",
  "degrees": "MD, MSc Paediatric Emergency Medicine, PhD Candidate",
  "tagline": "The doctor who says what healthcare won't.",
  "subheadline": "Practising GP, Health AI Founder & International Keynote Speaker",
  "location": "Rotterdam, Netherlands",
  "email": "sabine@drfonderson.com",
  "websites": {
    "speaker": "https://drfonderson.com",
    "ai": "https://ai.drfonderson.com",
    "practice": "https://huisartspraktijkmsf.nl",
    "expatClinic": "https://expathealthclinic.com",
    "linkedin": "https://www.linkedin.com/in/sabinefonderson/",
    "twitter": "https://twitter.com/sabinefonderson"
  },
  "bioSummary": "I work the front line of medicine, so I know exactly where it breaks. I take that reality to the stage, along with the AI, the smart snippets, and the hard ideas that can actually fix it.",
  "story": "I practice medicine in a second language. That alone changes everything \u2014 how I document, how I communicate, and how I stay safe. After years of navigating high-pressure clinics, long days, and clinical systems not built for multilingual doctors, I realized something had to change: I didn't need to work harder, I needed to work smarter. So I started building AI patient simulators, smart snippets, and Chrome extensions designed to help doctors document faster, safer, and with more confidence. I run my own general practice (Huisartspraktijk MSF) in Rotterdam, sit on the board of Zorggroep Rijnmond Dokters, advise on digital care pathways for Ksyos, and research child respiratory health at Erasmus MC. I speak from the exam room, not a slide deck.",
  "languages": [
    {
      "name": "English",
      "level": "Native / Bilingual"
    },
    {
      "name": "Dutch",
      "level": "Full Professional Proficiency (C2)"
    },
    {
      "name": "French",
      "level": "Professional Working Proficiency"
    }
  ],
  "highlights": [
    {
      "icon": "stethoscope",
      "title": "Practising GP",
      "desc": "Owner, Huisartspraktijk MSF \u2014 Rotterdam"
    },
    {
      "icon": "sparkles",
      "title": "Health AI Builder",
      "desc": "AI Simulators, Smart Snippets & Clinical Tools"
    },
    {
      "icon": "graduation-cap",
      "title": "PhD Candidate",
      "desc": "Erasmus MC \u2014 Child Health & Air Pollution"
    },
    {
      "icon": "award",
      "title": "MSc Paediatric Emergency",
      "desc": "The University of Edinburgh"
    },
    {
      "icon": "users",
      "title": "Board Member",
      "desc": "Zorggroep Rijnmond Dokters & Ksyos Advisor"
    },
    {
      "icon": "mic",
      "title": "TEDx & Keynote Speaker",
      "desc": "TEDxHotelschool The Hague & Global Events"
    }
  ],
  "aiProjects": [
    {
      "id": "ai-patient-sim",
      "title": "AI Patient Simulator for Clinical Training",
      "tag": "AI Simulation & EdTech",
      "badge": "Active Deployment",
      "description": "Interactive, voice-and-text enabled AI patient personas designed to train internationally qualified medical doctors (BIG registration) in Dutch clinical culture, communication, and consultation structure.",
      "impact": "Reduces exam prep anxiety, speeds up foreign doctor integration into the Dutch healthcare system, and simulates hundreds of acute & chronic scenarios.",
      "tech": [
        "Python",
        "OpenAI / LLMs",
        "FastAPI",
        "Prompt Engineering",
        "Voice AI"
      ],
      "link": "https://ai.drfonderson.com",
      "github": "https://github.com/sabinefonderson"
    },
    {
      "id": "gp-smart-snippets",
      "title": "GP Smart Snippets & Chrome Extension",
      "tag": "Clinical Workflow & Efficiency",
      "badge": "Daily Doctor Tool",
      "description": "Browser extension and automated snippet engine built directly for clinicians to streamline electronic health record (EHR) note taking, multilingual consultation templates, and safe prescribing.",
      "impact": "Saves 30+ minutes per clinic shift, prevents documentation fatigue, and minimizes medical clerical errors.",
      "tech": [
        "JavaScript",
        "Chrome Extension API",
        "HTML/CSS",
        "TextExpander / Promedico"
      ],
      "link": "https://ai.drfonderson.com",
      "github": "https://github.com/sabinefonderson"
    },
    {
      "id": "medical-transcription-ai",
      "title": "AI Medical Consultation Transcriber",
      "tag": "Speech-to-Clinical-Note",
      "badge": "Proprietary Prototype",
      "description": "Automated medical speech-to-SOAP note generator tailored for multilingual consultations (Dutch/English/French) that captures clinical nuances and formats them into structured EHR records.",
      "impact": "Allows doctors to maintain 100% eye contact and human connection with patients without staring at keyboard screens.",
      "tech": [
        "Whisper AI",
        "NLP",
        "Python",
        "Medical Ontologies",
        "SOAP Structuring"
      ],
      "link": "https://ai.drfonderson.com",
      "github": "https://github.com/sabinefonderson"
    },
    {
      "id": "phdplanr",
      "title": "PhDPlanR & Air Pollution Health Analytics",
      "tag": "Data Science & Epidemiological Research",
      "badge": "Academic Research",
      "description": "Data analysis pipeline linking general practice pediatric respiratory consultations with geospatial environmental sensor air quality data (O3, NO2, PM2.5) across Rotterdam.",
      "impact": "Unveils the real-world impact of socioeconomic factors and urban pollution on pediatric acute emergency and GP presentations.",
      "tech": [
        "Python",
        "R",
        "Pandas",
        "Geospatial Analysis",
        "Time-Series Regression"
      ],
      "link": "https://erasmusmc.nl",
      "github": "https://github.com/sabinefonderson"
    }
  ],
  "speakingTopics": [
    {
      "title": "AI Won't Replace Doctors. Doctors Who Ignore It Will Be Replaced.",
      "category": "Healthcare Innovation & AI",
      "summary": "A clear-eyed look at where AI actually belongs in medicine, where it's already failing patients, and what every clinical leader needs to decide before the technology decides for them.",
      "audience": "Healthcare Executives, Hospital Boards, Tech Summits, Medical Associations",
      "tags": [
        "Healthcare Innovation",
        "AI in Medicine",
        "Future of Care"
      ]
    },
    {
      "title": "The Power of Humour in the Art of Medicine",
      "category": "TEDx Keynote",
      "summary": "AI should take the data and the admin off our plates, so doctors can hand empathy, humour, and the human moment back to the patient in front of them.",
      "audience": "Conferences, Universities, Leadership Retreats",
      "tags": [
        "Empathy",
        "Doctor-Patient Bond",
        "TEDx"
      ]
    },
    {
      "title": "Your Patients Don't Trust You. Here's Why.",
      "category": "Patient Safety & Leadership",
      "summary": "The hard truth about why patients quietly walk away from healthcare systems, and what it takes to rebuild clinical trust in a system optimized for everything except the human in the room.",
      "audience": "Clinical Directors, Patient Experience Officers, Health Policy Panels",
      "tags": [
        "Patient Trust",
        "Systemic Reform",
        "Safety"
      ]
    },
    {
      "title": "Stop Waiting for Permission: Breaking the Healthcare Ceiling",
      "category": "Women in Leadership & Tech",
      "summary": "How women and international professionals in medicine and business get sidelined, and the unglamorous, tactical moves that actually break through barriers.",
      "audience": "Women in STEM/Medicine, Entrepreneurship Networks, Keynotes",
      "tags": [
        "Leadership",
        "Diversity",
        "Career Reinvention"
      ]
    },
    {
      "title": "Digital Health Is Burning Out the People It Promised to Help",
      "category": "Digital Health & Burnout",
      "summary": "Why more screens, portals, and alerts are driving clinicians out of the workforce, and how to design humane digital health tools that restore the joy of medicine.",
      "audience": "HealthTech Founders, UX/Product Teams, Hospital CIOs",
      "tags": [
        "Burnout Prevention",
        "Health Tech UX",
        "EHR Optimization"
      ]
    }
  ],
  "experience": [
    {
      "role": "General Practitioner & Practice Owner",
      "organization": "Huisartspraktijk MSF / Huisartspraktijk Fonderson",
      "period": "2024 - Present",
      "location": "Rotterdam / Hoogvliet, Netherlands",
      "description": "Leading an independent general medical practice serving a diverse urban population with modernized digital workflows, patient-centric consultations, and AI-assisted clinical administration."
    },
    {
      "role": "PhD Researcher (Child Respiratory Health & Air Pollution)",
      "organization": "Erasmus MC (University Medical Center Rotterdam)",
      "period": "2019 - Present",
      "location": "Rotterdam, Netherlands",
      "description": "Conducting epidemiological research investigating how air pollution, environmental triggers, and socioeconomic disparities affect childhood illness and GP consultation rates."
    },
    {
      "role": "Board Member & Advisory Board Member",
      "organization": "Zorggroep Rijnmond Dokters & Ksyos Digital Care",
      "period": "2023 - Present",
      "location": "Netherlands",
      "description": "Shaping regional healthcare governance, digital transformation, primary care policies, and digital care pathway integration."
    },
    {
      "role": "President",
      "organization": "VBGA (Vereniging Buitenlands Gediplomeerde Artsen)",
      "period": "2023 - 2024",
      "location": "Delft, Netherlands",
      "description": "Led the national association for foreign medical doctors in the Netherlands, championing BIG registration streamlining, peer mentorship, and system integration."
    },
    {
      "role": "Founder & Chief Medical Officer",
      "organization": "Expat Health Clinic / HelloDoc",
      "period": "2018 - 2024",
      "location": "The Hague / Rotterdam",
      "description": "Founded dedicated multilingual telehealth and clinic services serving thousands of international expats and university students across the Netherlands."
    },
    {
      "role": "Emergency Medicine Physician (A&E)",
      "organization": "UK National Health Service (NHS)",
      "period": "UK",
      "location": "United Kingdom",
      "description": "Front-line acute clinical care in high-volume NHS accident and emergency departments, handling pediatric and adult acute emergencies."
    }
  ],
  "education": [
    {
      "institution": "The University of Edinburgh",
      "degree": "MSc in Paediatric Emergency Medicine",
      "years": "2014 - 2018",
      "notes": "Specialized in acute clinical decision making, pediatric trauma, resuscitation, and evidence-based pediatric healthcare."
    },
    {
      "institution": "Leiden University",
      "degree": "Medical Doctor (MD) / Geneeskunde",
      "years": "1998 - 2006",
      "notes": "Comprehensive clinical medicine, surgical rotations, and primary care training in the Dutch medical system."
    },
    {
      "institution": "Erasmus University Rotterdam",
      "degree": "GP Specialty & Clinical Research (AIOTHO)",
      "years": "2019 - 2023",
      "notes": "Dual track combining General Practice residency with doctoral epidemiological research."
    }
  ]
};

const ARTICLES_DATA = [
  {
    "title": "Tired? Good. Now let AI handle the noise",
    "filename": "2026-06-06 17_32_17.0-Tired_ Good. Now let AI handle the noise.html",
    "date": "2026-06-06",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Closing a year with value",
    "filename": "2026-01-08 07_11_54.0-Closing a year with value.html",
    "date": "2026-01-08",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Suki Health Academy (Beta Launch)",
    "filename": "2025-11-16 21_37_00.0-Suki Health Academy (Beta Launch).html",
    "date": "2025-11-16",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Why I built an AI patient simulator for doctors relocating to the Netherlands",
    "filename": "2025-11-02 19_31_57.0-Why I built an AI patient simulator for doctors relocating to the Netherlands.html",
    "date": "2025-11-02",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Leading a clinic in a second-language.",
    "filename": "2025-05-11 13_51_05.0-Leading a clinic in a second-language. .html",
    "date": "2025-05-11",
    "category": "Multilingual Medicine",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "3 things immigrant doctors can do while the system delays their registration process.",
    "filename": "2025-03-30 20_29_05.0-3 things immigrant doctors can do while the system delays their registration process..html",
    "date": "2025-03-30",
    "category": "Multilingual Medicine",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The 25-Month Wait: Why We Can't Let Immigrant Doctors' Talent Go to Waste",
    "filename": "25-month-wait-why-we-cant-let-immigrant-doctors-talent-fonderson-w4oye.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "4 ways to shape your healthcare career",
    "filename": "4-ways-shape-your-healthcare-career-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "6 steps doctors should consider when making a career switch",
    "filename": "6-steps-doctors-should-consider-when-making-career-switch-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "All I want for Scotland is more Sun",
    "filename": "all-i-want-scotland-more-sun-sabine-fonderson.html",
    "date": "2025",
    "category": "Multilingual Medicine",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Built in 45 minutes: Now my chaos has a calendar. Why I built this voice todo app.",
    "filename": "built-45-minutes-now-my-chaos-has-calendar-why-i-voice-fonderson-b4p7e.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The Call That Changed My Career",
    "filename": "call-changed-my-career-sabine-fonderson-fylze.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The case of a lost eyelash",
    "filename": "case-lost-eyelash-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Challenges and Dilemmas in E-health",
    "filename": "challenges-dilemmas-e-health-sabine-fonderson.html",
    "date": "2025",
    "category": "Digital Health",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Why I built an AI patient simulator for doctors relocating to the Netherlands",
    "filename": "copy-why-i-built-ai-patient-simulator-doctors-sabine-fonderson-k98xe.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Then Corona Happened",
    "filename": "corona-happened-sabine-fonderson-md-msc-pem.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Digital transformation in healthcare: Trending diabetes apps",
    "filename": "digital-transformation-healthcare-trending-diabetes-sabine.html",
    "date": "2025",
    "category": "Digital Health",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Doctors feel many things, burnout just happens to be one of them",
    "filename": "doctors-feel-many-things-burnout-just-happens-one-them-fonderson.html",
    "date": "2025",
    "category": "Physician Wellbeing",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Does fear make you a better doctor?",
    "filename": "does-fear-make-you-better-doctor-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The economics of being a doctor",
    "filename": "economics-being-doctor-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The evolution of ehealth",
    "filename": "evolution-ehealth-sabine-fonderson-md-msc-pem.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Financial planning for rainy days. The role of Umbrella services for freelance doctors",
    "filename": "financial-planning-rainy-days-role-umbrella-services-sabine-fonderson.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Five lessons I learned in my startup",
    "filename": "five-lessons-i-learned-my-startup-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Goodbye pills, welcome e-health",
    "filename": "goodbye-pills-welcome-e-health-sabine-fonderson-md-msc-pem.html",
    "date": "2025",
    "category": "Digital Health",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The Heineken manoeuvre",
    "filename": "heineken-manoeuvre-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The Hidden Skill That Transforms Your Medical Career",
    "filename": "hidden-skill-transforms-your-medical-career-sabine-fonderson-yijxe.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How changes in healthcare can affect your employability: 3 lessons learned",
    "filename": "how-changes-healthcare-can-affect-your-employability-3-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Automated My Inbox to Gain Back Time & Money.",
    "filename": "how-i-automated-my-inbox-gain-back-time-money-sabine-fonderson-bcipe.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I build a Situgram-helper app and saved 60 minutes on a learning assessment.",
    "filename": "how-i-build-situgram-helper-app-saved-60-minutes-sabine-fonderson-dkyqe.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I built an AI tool to transform doctors into content creators",
    "filename": "how-i-built-ai-tool-transform-doctors-content-sabine-fonderson-cyc5e.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Created a Podcast Series to Empower Virtual Assistants (VAs) in Healthcare in under 2 hours.",
    "filename": "how-i-created-podcast-series-empower-virtual-vas-under-fonderson-pd36e.html",
    "date": "2025",
    "category": "Digital Health",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Fixed A Huge Problem As A Doctor - And It Was Not Helping Patients.",
    "filename": "how-i-fixed-huge-problem-doctor-helping-patients-sabine-fonderson-neaue.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Generated Anatomy Art for deeper Patient Conversations",
    "filename": "how-i-generated-anatomy-art-deeper-patient-sabine-fonderson-x4ode.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Took Back 10 Hours This Year\u2014and Unlocked the Potential to Save 5 Days",
    "filename": "how-i-took-back-10-hours-yearand-unlocked-potential-save-fonderson-zngwe.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Turned a Clinical Pain Point Into a Working Product in a Weekend.",
    "filename": "how-i-turned-clinical-pain-point-working-product-sabine-fonderson-hqjee.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I turned my LinkedIn profile into a career storytelling tool.",
    "filename": "how-i-turned-my-linkedin-profile-career-storytelling-tool-fonderson-u0aue.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I used an AI tool to prescribe safely in a new healthcare system",
    "filename": "how-i-used-ai-tool-prescribe-safely-new-healthcare-system-fonderson-scjfe.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I Went From Building Websites in Dreamweaver to Coding a Tool for GPs Like Me.",
    "filename": "how-i-went-from-building-websites-dreamweaver-coding-tool-fonderson-p9une.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How I'm building an on-boarding tool to save time and retain talent in primary care",
    "filename": "how-im-building-on-boarding-tool-save-time-retain-talent-fonderson-gduse.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "How to see the bigger picture like a dog",
    "filename": "how-see-bigger-picture-like-dog-sabine-fonderson-md-msc-pem.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "I Was Drowning in Double-Bookings Until I Built This Simple Automation Tool And Gained Back 5 Hours Of Time.",
    "filename": "i-drowning-double-bookings-until-built-simple-tool-gained-fonderson-luoee.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "I turn down clients...here's why.",
    "filename": "i-turn-down-clientsheres-why-sabine-fonderson-692ze.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Junior Doctors in UK leaving NHS",
    "filename": "junior-doctors-uk-leaving-nhs-sabine-fonderson.html",
    "date": "2025",
    "category": "Multilingual Medicine",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "My first telemedicine experience",
    "filename": "my-first-telemedicine-experience-sabine-fonderson.html",
    "date": "2025",
    "category": "Digital Health",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "My gp-snippet: built to protect flow, not just save time",
    "filename": "my-gp-snippet-built-protect-flow-just-save-time-sabine-fonderson-m5xqe.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Old habits never die",
    "filename": "old-habits-never-die-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Passion For business",
    "filename": "passion-business-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Permission to Pause: How I Stopped Stressing About My Accent in Consultations",
    "filename": "permission-pause-how-i-stopped-stressing-my-accent-sabine-fonderson-xqaye.html",
    "date": "2025",
    "category": "Physician Wellbeing",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "A pill for every orifice",
    "filename": "pill-every-orifice-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Is this the season to end the A&E crisis?",
    "filename": "season-end-ae-crisis-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Shortcut to Clarity: How to protect your time and registration using snippets Part 2.",
    "filename": "shortcut-clarity-how-protect-your-time-registration-using-fonderson-gtdxc.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The Skill of Coaching Emotional Workflow in a New Medical System",
    "filename": "skill-coaching-emotional-workflow-new-medical-system-sabine-fonderson-4mfge.html",
    "date": "2025",
    "category": "Physician Wellbeing",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Sorry to deceive you, but I am not blonde.",
    "filename": "sorry-deceive-you-i-am-blonde-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "What will my doctor be like in 50 years?",
    "filename": "what-my-doctor-like-50-years-sabine-fonderson-md-msc-pem.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "What would Hippocrates think of online video consultations?",
    "filename": "what-would-hippocrates-think-online-video-sabine-fonderson-md-msc-pem.html",
    "date": "2025",
    "category": "Digital Health",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "What Would You Do?Two  Real Cases That Show Why Communication Can Make or Break a Doctor\u2019s Career",
    "filename": "what-would-you-dotwo-real-cases-show-why-can-make-break-fonderson-tzgpe.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "What Would You Do?Two Real Cases That Show Why Communication Can Make or Break a Doctor\u2019s Career body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-hei..."
  },
  {
    "title": "When you become a doctor you have a job for life",
    "filename": "when-you-become-doctor-have-job-life-sabine-fonderson.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Why I built a Chrome Extension for a GP like me and my team and what happened next.",
    "filename": "why-i-built-chrome-extension-gp-like-me-my-team-what-next-fonderson-sdbpe.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Why I Built my Own AI Medical Transcription tool.",
    "filename": "why-i-built-my-own-ai-medical-transcription-tool-sabine-fonderson-1pd4e.html",
    "date": "2025",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Are you considering locum work this winter? Here are what you need to get booked.",
    "filename": "you-considering-locum-work-winter-here-what-need-get-booked-sabine.html",
    "date": "2025",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Wait and See",
    "filename": "2021-04-09 19_15_02.0-Wait and See.html",
    "date": "2021-04-09",
    "category": "AI & Clinical Tech",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The secret wonders of pets",
    "filename": "2019-11-13 21_39_29.0-The secret wonders of pets .html",
    "date": "2019-11-13",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Doctors in Business: From scrubs to suit",
    "filename": "2016-03-03 09_53_48.0-Doctors in Business_ From scrubs to suit.html",
    "date": "2016-03-03",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "More shift works causes tensions amongst doctors",
    "filename": "2015-12-16 10_41_27.0-More shift works causes tensions amongst doctors.html",
    "date": "2015-12-16",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Hospital life does not prepare doctors to work in a corporate milieu",
    "filename": "2015-12-16 10_46_37.0-Hospital life does not prepare doctors to work in a corporate milieu .html",
    "date": "2015-12-16",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "Are you frustrated enough to quit your clinical job?",
    "filename": "2015-12-16 10_47_20.0-Are you frustrated enough to quit your clinical job_.html",
    "date": "2015-12-16",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  },
  {
    "title": "The 'self-sacrifice' badge doctors wear makes them superheroes",
    "filename": "2015-10-06 20_29_37.0-The _self-sacrifice_ badge doctors wear makes them superheroes.html",
    "date": "2015-10-06",
    "category": "Healthcare & Leadership",
    "excerpt": "body { margin: 0 auto; width: 744px; font-family: Source Serif Pro, serif; line-height: 32px; font-weight: 400; color: rgba(0, 0, 0, 0.7); font-size: 21px; } h1, h2, h3 { font-fami..."
  }
];

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
  window.ARTICLES_DATA = ARTICLES_DATA;
}
