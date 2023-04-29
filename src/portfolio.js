/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Archit Gosain",
  title: "Hi all, I'm Archit",
  subTitle:
    "Hi I am Archit Gosain, currently studying at IIT Roorkee. I am interested in Graphics Programming, Computer Architecture and Abstract Maths and its applications.",
  resumeLink:
    "https://drive.google.com/file/d/1D6xOS8FqSaRlF12a-fm8IJHOkGfUSc9Y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aviii06",
  linkedin: "https://www.linkedin.com/in/archit-gosain-69b14021a/",
  gmail: "architgosain0601@gmail.com",
  gitlab: "https://gitlab.com/aviii06",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I like to do",
  subTitle: "Low-level programming",
  skills: [
    emoji(
      "⚡ Graphics Programming using OpenGL, Vulkan and DirectX"
    ),
    emoji("⚡ Cryptography and its applications"),
    emoji(
      "⚡ Low-level programming using C++"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT Roorkee",
      logo: require("./assets/images/IITR.jpg"),
      subHeader: "BTech",
      duration: "September 2020 - April 2024",
      desc: "",
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++", //Insert stack or technology you have experience in
    },
    {
      Stack: "OpenGL",
    },
    {
      Stack: "Python",
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "CSAW CTF 2022",
      subtitle:
        "Finished 3rd in CSAW CTF 2022 Quals with the team SDSLabs",
      image: require("./assets/images/csaw.png"),
      imageAlt: "CSAW CTF logo",
      footerLink: [
        {
          name: "CSAW Site",
          url: "https://www.csaw.io/ctf"
        }
      ]
    },
    {
      title: "D3Code 2022 Hackathon",
      subtitle:
        "Won d3code hackathon 2022 with team Orsted Corp.",
      image: require("./assets/images/d3code.png"),
      imageAlt: "d3code",
      footerLink: [
        {
          name: "Article Link",
          url: "https://www.thehindubusinessline.com/info-tech/team-orsted-corp-from-iit-roorkee-wins-usts-d3code-hackathon/article66262268.ece"
        },
        {
          name: "hackathon site",
          url: "https://www.hackerearth.com/challenges/hackathon/ust-d3code-campus-hackathon22/"
        }
      ]
    },

    {
      title: "CSAW ESC 2022",
      subtitle: "Finished 2nd in CSAW ESC 2022 with the team Volga",
      image: require("./assets/images/csaw-esc.png"),
      imageAlt: "CSAW ESC logo",
      footerLink: [
        {
          name: "CSAW ESC Site",
          url: "https://www.csaw.io/esc"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  email_address: "architgosain0601@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};