import { faDiscord, faGithub, faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileCode } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HomePage() {

  const links = [
    {
      href: "https://www.linkedin.com/in/joaquinsoza/",
      icon: faLinkedin,
      label: "Linkedin"
    },
    {
      href: "https://github.com/joaquinsoza/",
      icon: faGithub,
      label: "Github"
    },
    {
      href: "https://t.me/yripper",
      icon: faTelegram,
      label: "Telegram"
    },
    {
      href: "https://discordapp.com/users/361275947363729411",
      icon: faDiscord,
      label: "Discord"
    },
    {
      href: "https://api.whatsapp.com/send/?phone=56950128186&text=Hello+Joaquin!&type=phone_number&app_absent=0",
      icon: faWhatsapp,
      label: "Whatsapp"
    },
    {
      href: "/joaquin_soza_resume.pdf",
      icon: faFileCode,
      label: "Resume / CV"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf8ef] text-[#343a40]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl flex flex-col items-center font-extrabold tracking-tight sm:text-[5rem]">
          Joaquin Soza
          <span className="block text-xl font-normal tracking-normal">coderipper</span>
        </h1>
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          {links.map((link, index) => (
            <Link
              key={index}
              className="flex rounded-lg w-full flex-row items-center duration-200 border justify-center hover:bg-[#343a40] text-[#343a40] hover:text-[#faf8ef] gap-4 border-[#5E5C54] h-10"
              href={link.href}
              target="_blank"
            >
              <FontAwesomeIcon icon={link.icon} width={20}/>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-row max-w-2xl w-full items-center justify-between">
          <div>
            <h6>Made With <span>♥</span> in Santiago, Chile</h6>
            <h6>
              Proudly Hosted By
              <a href="https://joaquinsoza.dev" target="_blank"> Joaquín Soza </a>
            </h6>
          </div>
          <Link
            href="mailto:hello@joaquinsoza.dev"
          >
            <FontAwesomeIcon icon={faEnvelope} width={20}/>
          </Link>
        </div>
      </div>
    </main>
  );
}