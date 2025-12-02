import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} AutoTrust. All Rights Reserved</div>
        <div className="flex gap-4">
          <a className="hover:underline">About Us</a>
          <a className="hover:underline">Contact</a>
          <a className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
