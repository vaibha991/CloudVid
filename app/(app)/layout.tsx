"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  ImageIcon,
} from "lucide-react";
import "./AppLayout.css"; // ✅ Correct


const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogoClick = () => router.push("/");

  const handleSignOut = async () => await signOut();

  return (
    <div className={`drawer ${sidebarOpen ? "drawer-open" : ""}`}>
      <input
        type="checkbox"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
        className="drawer-toggle"
      />

      {/* Main Content */}
      <div className="drawer-content">
        <header className="navbar">
          <div className="navbar-left">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="menu-button"
            >
              <MenuIcon />
            </button>
            <div className="logo" onClick={handleLogoClick}>
              <Link href="/">Cloudinary Showcase</Link>
            </div>
          </div>
          <div className="navbar-right">
            {user && (
              <>
                <div className="avatar">
                  <img
                    src={user.imageUrl}
                    alt={user.username || user.emailAddresses[0].emailAddress}
                  />
                </div>
                <span className="user-email">
                  {user.username || user.emailAddresses[0].emailAddress}
                </span>
                <button onClick={handleSignOut} className="logout-button">
                  <LogOutIcon />
                </button>
              </>
            )}
          </div>
        </header>
        <main className="main-content">{children}</main>
      </div>

      {/* Sidebar */}
      <div className={`drawer-side ${sidebarOpen ? "visible" : ""}`}>
        <div className="sidebar">
          <div className="sidebar-header">
            <ImageIcon className="logo-icon" />
          </div>
          <ul className="menu-list">
            {sidebarItems.map((item) => (
              <li
                key={item.href}
                className={`menu-item ${pathname === item.href ? "active" : ""}`}
              >
                <Link href={item.href} onClick={() => setSidebarOpen(false)}>
                  <item.icon className="icon" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <div className="signout-container">
              <button className="signout-btn" onClick={handleSignOut}>
                <LogOutIcon className="icon" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
