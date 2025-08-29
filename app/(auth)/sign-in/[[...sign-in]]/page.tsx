// app/sign-in/[[...sign-in]]/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";
import "./signin.css";

export default function SignInPage() {
  return (
    <div className="clerk-signin-wrapper">
      <div className="clerk-signin-container">
        <h1 className="custom-heading">🔐 Sign in to CloudVid</h1>
        <p className="custom-subtext">Welcome back! Log in to access your dashboard</p>

        <SignIn
          appearance={{
            elements: {
              card: "custom-signin-card",
              formButtonPrimary: "custom-primary-btn",
              socialButtonsBlockButton: "custom-social-btn",
              headerTitle: "hidden",
            },
          }}
        />
      </div>
    </div>
  );
}
