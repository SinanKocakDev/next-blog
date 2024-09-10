import { FaEnvelope, FaGithub, FaInstagram,  FaTwitter } from 'react-icons/fa6';

export const navLinks = [
  {
    label: "Anasayfa",
    route: "/",
  },
  {
    label: "Yazılar",
    route: "/blog",
  },
  {
    label: "Hakkımda",
    route: "/about",
  },  
  {
    label: "İletişim",
    route: "/contact",
  },
  
];


export const socialMedia = [
    {
        route: "mailto:sinankocak@msn.com",
        icon: FaEnvelope,
    },
    {
      route: "https://www.instagram.com/sinan.kocakk/",
      icon: FaInstagram,
    },
    {

      route: "https://www.github.com/sinankocakdev",
      icon: FaGithub,
    },
   
    
    {
      route: "https://www.twitter.com/sinankocak",
      icon: FaTwitter,
    },
    
  ];
  

 