import { AlignLeft } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/link";
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Add more items here */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((item, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={item.href}> {item.label} </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuItem>
            <SignOutLinks />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
