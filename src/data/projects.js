import allCleanImg from '../assets/images/All Clean Laundry.png'
import sistemDeteksiImg from '../assets/images/Sistem Deteksi Kantuk.png'

const projects = [
  {
    id: 1,
    title: 'ALL CLEAN LAUNDRY Website',
    category: 'College Project',
    image: allCleanImg,
    imageAlt: 'ALL CLEAN LAUNDRY Website screenshot',
    description:
      'Developed a laundry management website as part of a university web development project in collaboration with a local laundry business. The project aimed to digitalize the laundry service by providing customers with real-time updates on the status of their laundry orders while simplifying the management process for the business.',
    techStack: 'Laravel, HTML5, JavaScript, MySql',
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
  },
]

export default projects
