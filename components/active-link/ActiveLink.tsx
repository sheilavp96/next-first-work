"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}
const linkStyle = "hover:underline hover:text-blue-400 mr-2 transition-all";
const activeLink = "text-blue-500";

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link className={`${linkStyle} ${pathName === path && activeLink}`} href={path}>
      {text}
    </Link>
  );
};
