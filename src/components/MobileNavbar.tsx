"use client";

import { Button } from "./ui/button";
import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  useAuth,
  SignInButton,
  SignOutButton,
  useUser,
  UserAvatar,
} from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ThemeModeToggle } from "./ThemeModeToggle";

export default function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex md:hidden items-center space-x-2">
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] p-0 flex flex-col">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          {/* Profile Section - Top */}
          {isSignedIn && user && (
            <div className="border-b border-dashed p-4 flex items-center gap-3">
              <UserAvatar />
              <div className="flex-1">
                <p className="text-sm">{user.firstName || user.username}</p>
                <p className="text-xs text-muted-foreground">
                  @{user.username || "user"}
                </p>
              </div>
            </div>
          )}

          <nav className="flex-1 flex flex-col space-y-1 p-2">
            <Button
              variant="ghost"
              className="flex items-center gap-4 justify-start text-base h-auto py-3"
              asChild
            >
              <Link href="/">
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </Link>
            </Button>

            {isSignedIn ? (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-4 justify-start text-base h-auto py-3"
                  asChild
                >
                  <Link href="/notifications">
                    <BellIcon className="w-5 h-5" />
                    <span>Notifications</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-4 justify-start text-base h-auto py-3"
                  asChild
                >
                  <Link href="/profile">
                    <UserIcon className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                </Button>
              </>
            ) : null}
          </nav>

          <div className="border-t border-dashed p-4 space-y-3">
            {isSignedIn ? (
              <SignOutButton>
                <Button
                  variant="default"
                  className="w-full flex items-center gap-2"
                >
                  <LogOutIcon className="w-4 h-4" />
                  Logout
                </Button>
              </SignOutButton>
            ) : (
              <SignInButton mode="modal">
                <Button variant="default" className="w-full">
                  Sign In
                </Button>
              </SignInButton>
            )}

            <ThemeModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
