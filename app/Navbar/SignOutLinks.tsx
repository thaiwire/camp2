// rafce
'use client'
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner"

const SignOutLinks = () => {

  const handleLogout = () => {
    toast.success("You have successfully logged out.");
  };

  return (
  
    <SignOutButton redirectUrl="/">
      <button
       className="w-full text-left"
      onClick={handleLogout}
      >Logout</button>
    </SignOutButton>
  )
};

export default SignOutLinks;
