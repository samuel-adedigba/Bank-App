// src/components/UI/BankImage.tsx
import React from "react";
import { useBanks, Bank } from "../../hooks/useBanks";

interface BankImageProps {
  bankSlug: string;
  className?: string;
}

const BankImage: React.FC<BankImageProps> = ({ bankSlug, className = "w-10 h-10" }) => {
  const { banks, isLoading } = useBanks();

  if (isLoading) return <div className={className}>Loading...</div>;

  const bank: Bank | undefined = banks?.find((b) => b.slug === bankSlug);
  if (!bank) return <div className={className}>No logo</div>;

  return <img src={bank.logo} alt={bank.name} className={className} />;
};

export default BankImage;
