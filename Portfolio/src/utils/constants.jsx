import { UpWorkAccount, GithubAccount, LinkedInAccount } from '../ui/Icon'

export const menuItems = [
    { id: 1, title: 'Home', link: '/#home' },
    { id: 2, title: 'About me', link: '/#about' },
    { id: 3, title: 'Technologies', link: '/#technologies' },
    { id: 4, title: 'Projects', link: '/#projects' },
    { id: 5, title: 'Contact', link: '/#footer' }
];


export const profileIcons = {
    "github": <GithubAccount />,
    "linkedin": <LinkedInAccount />,
    "upwork": <UpWorkAccount />,
}