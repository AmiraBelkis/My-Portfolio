import { UpWorkAccount, GithubAccount, LinkedInAccount, MailAccount } from '../ui/Icon'

export const menuItems = [
    { title: 'Home', link: '/#home' },
    { title: 'About me', link: '/#about' },
    { title: 'Technologies', link: '/#technologies' },
    { title: 'Projects', link: '/#projects' },
    { title: 'Contact', link: '/#footer' }
];

export const profiles = [
    // { icon: "mail", link: "mailto:fe.amirabelkis@gmail.com" },
    { icon: "github", link: "https://github.com/AmiraBelkis" },
    { icon: "linkedin", link: "https://www.linkedin.com/in/amirabelkis/" },
    { icon: "upwork", link: "https://www.upwork.com/freelancers/~012dd94f449054402d" }
]

export const profileIcons = {
    // "mail": <MailAccount />,
    "github": <GithubAccount />,
    "linkedin": <LinkedInAccount />,
    "upwork": <UpWorkAccount />,
}