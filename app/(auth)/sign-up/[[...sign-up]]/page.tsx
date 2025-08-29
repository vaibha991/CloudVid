import { SignUp } from '@clerk/nextjs'
import "./signup.css";

export default function Page() {
  <div className="signup-container">
    <h2>Create Account</h2>
    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <div className="signup-footer">
      Already have an account? <a href="#">Log in</a>
    </div>
  </div>
  return <SignUp />
}