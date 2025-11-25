import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/ui/ThemeModeToggle";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant={"default"}>Sign in</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <Button variant={"secondary"}>Click Me</Button>
      <ThemeModeToggle />
    </div>
  );
}
