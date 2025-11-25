import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton>
          <button>Sign Up</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
