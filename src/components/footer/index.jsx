// libraries:
import Link from "next/link";
import { v4 as uuid } from "uuid";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// interfaces:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
// ============================================================================

const listOfLinks = [
  {
    name: "Contact us",
    href: "/contact",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Cookies policy",
    href: "/contact",
  },
  {
    name: "Legal terms",
    href: "/contact",
  },
  {
    name: "Privacy policy",
    href: "/contact",
  },
];

function Footer() {
  return (
    <div
      className={`
                flex 
                w-full
                flex-row     
                text-sm
                md:text-xl 
                justify-center
                items-center
                gap-4
            `}
    >
      {listOfLinks.map((element) => (
        <div
          className={`
                                font-crimson 
                                hover:underline
                                text-center
                            `}
          key={uuid()}
        >
          <Link href={element.href}>
            <button type={`button`}>{element.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Footer;
