import allCleanImg from '../assets/images/All Clean Laundry Website.png'
import sistemDeteksiImg from '../assets/images/Sistem Deteksi.png'
import PRDgeneratorImg from '../assets/images/PRDgenerator.png'
import KRlImg from '../assets/images/KRL.png'

const projects = [
  {
    id: 1,
    title: 'ALL CLEAN LAUNDRY Website',
    category: 'College Project',
    image: allCleanImg,
    imageAlt: 'ALL CLEAN LAUNDRY Website screenshot',
    description:
      'Developed a laundry management website as part of a university web development project in collaboration with a local laundry business. The project aimed to digitalize the laundry service by providing customers with real-time updates on the status of their laundry orders while simplifying the management process for the business.',
    techStack: 'Laravel, HTML5, JavaScript, MySql, PHP, CSS',
    demo: 'https://allcleanlaundry-website-production.up.railway.app',
    repo: '#',
  },
  {
    id: 2,
    title: 'Sistem Deteksi Kantuk Pengemudi Real-Time',
    category: 'College Project',
    image: sistemDeteksiImg,
    imageAlt: 'Sistem Deteksi Kantuk Pengemudi Real-Time screenshot',
    description:
      'Developed a real-time driver drowsiness detection system using MediaPipe Face Landmarker and Machine Learning to monitor facial landmarks and detect signs of fatigue. The system features user-specific calibration, multi-level alert notifications, and a desktop interface to enhance driving safety and reduce the risk of accidents caused by drowsiness.',
    techStack: 'Python, MediaPipe',
    demo: '#',
    repo: 'https://github.com/thariq122/SistemDeteksi-SC',
  },
  {
    id: 3,
    title: 'PRD Generator',
    category: 'Dump Project',
    image: PRDgeneratorImg,
    imageAlt: 'PRD Generator screenshot',
    description:
      'A web application designed to generate Product Requirement Documents (PRDs) for software development projects, streamlining the documentation process and ensuring clarity in project scope and objectives.',
    techStack: 'Next.Js, React, Tailwind CSS, JavaScript',
    demo: '#',
    repo: 'https://prd-studio-generator.vercel.app/',
  },
  {
    id: 4,
    title: 'KRL Jabodetabek Railway',
    category: 'Dump Project',
    image: KRlImg,
    imageAlt: 'KRL screenshot',
    description:
      'Aplikasi web interaktif untuk memvisualisasikan jaringan KRL Jabodetabek, dengan fokus utama pada Lin Bogor (Depok ↔ Jakarta). Proyek ini menampilkan peta dasar gelap, polyline jalur, marker stasiun, dan informasi singkat setiap stasiun.',
    techStack: 'JavaScript, HTML5, CSS',
    demo: '#',
    repo: 'https://krl-jabodetabek.netlify.app/',
  }
]

export default projects
