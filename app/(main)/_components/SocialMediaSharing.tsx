"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Copy, Share2 } from "lucide-react";
import React from "react";

interface Hotel {
  id: number;
  image: string;
  name: string;
  category: string;
  address?: string;
  costPerNight: string;
  availableRooms: string;
  description: string;
  rating: string;
}

const SocialMediaSharing = ({ details: details }: { details: Hotel }) => {
  const [copied, setCopied] = useState(false);
  const propertyURL = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      propertyURL
    )}`,
    twitter: `https://x.com/intent/post?url=${encodeURIComponent(
      propertyURL
    )}&text=${encodeURIComponent(details.name)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      propertyURL
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      details.name + " - " + propertyURL
    )}`,
  };

  console.log("propertyURL", shareLinks);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(propertyURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      {/* Social Media Sharing */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
          <Share2 className="w-4 h-4" /> Share this property:
        </h3>
        <div className="flex gap-3">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Facebook />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Twitter />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Linkedin />
          </a>
          <button onClick={handleCopyLink} className="social-btn relative">
            <Copy />
            {copied && (
              <span className="absolute -top-8 left-0 text-xs bg-black text-white px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
      {/* Styles */}
      <style jsx>{`
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f3f4f6;
          transition: transform 0.2s ease-in-out;
        }
        .social-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default SocialMediaSharing;
