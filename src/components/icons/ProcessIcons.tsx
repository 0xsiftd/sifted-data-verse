
import React from "react";

interface ProcessIconProps {
  className?: string;
}

export const DataCollectionIcon: React.FC<ProcessIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M60,50 L140,50 L160,80 L160,150 C160,155.5 155.5,160 150,160 L50,160 C44.5,160 40,155.5 40,150 L40,80 L60,50 Z" />
      <path d="M70,50 L70,30 L130,30 L130,50" strokeDasharray="2,6" />
      <path d="M70,90 L130,90" />
      <path d="M70,110 L130,110" />
      <path d="M70,130 L100,130" />
      <circle cx="70" cy="70" r="5" fill="currentColor" />
      <circle cx="90" cy="70" r="5" fill="currentColor" />
      <circle cx="110" cy="70" r="5" fill="currentColor" />
    </svg>
  );
};

export const BlockchainVerificationIcon: React.FC<ProcessIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="30" y="60" width="40" height="40" rx="4" />
      <rect x="80" y="30" width="40" height="40" rx="4" />
      <rect x="130" y="60" width="40" height="40" rx="4" />
      <rect x="80" y="90" width="40" height="40" rx="4" />
      <rect x="80" y="140" width="40" height="40" rx="4" />
      <line x1="70" y1="80" x2="80" y2="70" />
      <line x1="120" y1="70" x2="130" y2="80" />
      <line x1="100" y1="70" x2="100" y2="90" />
      <line x1="70" y1="100" x2="80" y2="110" />
      <line x1="120" y1="110" x2="130" y2="100" />
      <line x1="100" y1="130" x2="100" y2="140" />
      <circle cx="130" cy="140" r="10" fill="none" />
      <path d="M125,140 L130,145 L140,135" strokeWidth="2" />
    </svg>
  );
};

export const QualityValidationIcon: React.FC<ProcessIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M100,30 L135,50 L135,100 L100,120 L65,100 L65,50 L100,30 Z" />
      <path d="M65,50 L100,70 L135,50" />
      <path d="M100,70 L100,120" />
      <circle cx="100" cy="160" r="15" />
      <path d="M100,145 L100,130" />
      <path d="M85,140 L75,130" />
      <path d="M115,140 L125,130" />
      <path d="M85,180 L75,190" />
      <path d="M115,180 L125,190" />
      <circle cx="85" cy="90" r="5" fill="currentColor" />
      <circle cx="115" cy="90" r="5" fill="currentColor" />
    </svg>
  );
};

export const EnterpriseAccessIcon: React.FC<ProcessIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="40" y="60" width="120" height="100" rx="4" />
      <path d="M40,90 L160,90" />
      <path d="M70,60 L70,40 L130,40 L130,60" />
      <rect x="60" y="110" width="80" height="30" rx="2" />
      <path d="M80,125 L120,125" />
      <path d="M80,75 L90,75" />
      <path d="M100,75 L120,75" />
      <circle cx="140" cy="75" r="5" />
      <circle cx="100" cy="155" r="5" />
    </svg>
  );
};
