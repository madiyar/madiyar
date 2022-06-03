import dayjs from 'dayjs';

// icons
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import telegram from '../images/telegram.svg';

export const basics = {
  name: "Madiyar Bolatov",
  label: "Frontend Developer",
  email: "hi@madiyar.dev",
  website: "https://madiyar.dev",
  birthday: "1998-05-24", //
  get age() {
    return dayjs().diff(this.birthday, 'year')
  },
  get summary() {
    return `I'm a ${this.age} y.o. software engineer based in ${this.location.city}, ${this.location.countryCode} specializing in frontend development.`
  },
  picture: "",
  phone: "",
  location: {
    city: "Almaty",
    countryCode: "KZ",
    postalCode: "",
    address: "",
    region: ""
  },
  profiles: [
    {
      network: "Telegram",
      username: "kawaii_neko",
      url: "https://t.me/kawaii_neko",
      icon: telegram
    },
    {
      network: "LinkedIn",
      username: "madiyarkz",
      url: "https://linkedin.com/in/madiyarkz",
      icon: linkedin
    },
    {
      network: "GitHub",
      username: "madiyar",
      url: "https://github.com/madiyar",
      icon: github
    }
  ]
};
