import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credit_icon.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "This tool saved me hours of editing. I use it daily for my e-commerce product photos and the results are clean and professional every single time.",
        author: "Richard Nelson",
        image: profile_img_1,
        jobTitle: 'E-commerce Seller'
    },
    {
        id: 2,
        text: "Incredibly fast and accurate. I tried many background remover tools but this one stands out. The AI handles complex edges like hair perfectly.",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle: 'UI Designer'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Perfect for individuals and casual use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Great for freelancers and growing teams.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Built for agencies and high-volume workflows.'
    },
  ]