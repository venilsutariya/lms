"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  icon: Icon,
  label,
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return <button onClick={onClick} type="button" className={cn(
    "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", 
    isActive && " text-violet-900 bg-violet-200/20 hover:bg-violet-200/20 hover:text-violet-700"
  )}>
    <div className=" flex items-center gap-x-2 py-4">
        <Icon size={22} className={cn(
            "text-slate-500", isActive && "text-violet-700"
        )}/>
        {label}
    </div>
    <div className={cn(
        "ml-auto opacity-0 border-2 border-violet-700 h-full transition-all",
        isActive && " opacity-100"
    )} />
  </button>;
};

export default SidebarItem;
