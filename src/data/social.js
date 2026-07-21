/**
 * Social links data — sourced from design/Hero.png and design/Footer.png
 * icon: filename of the PNG asset inside src/assets/icons/
 */
import linkedinIcon  from '../assets/icons/LinkedIn.png'
import githubIcon    from '../assets/icons/GitHub.png'
import instagramIcon from '../assets/icons/Instagram.png'

const social = [
  {
    id: 1,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thariqakbarr',
    ariaLabel: 'Visit Muhammad Thariq Akbar on LinkedIn',
    icon: linkedinIcon,
  },
  {
    id: 2,
    label: 'GitHub',
    url: 'https://github.com/thariq122',
    ariaLabel: 'Visit Muhammad Thariq Akbar on GitHub',
    icon: githubIcon,
  },
  {
    id: 3,
    label: 'Instagram',
    url: 'https://www.instagram.com/thariqakbarr_/',
    ariaLabel: 'Visit Muhammad Thariq Akbar on Instagram',
    icon: instagramIcon,
  },
]

export default social
