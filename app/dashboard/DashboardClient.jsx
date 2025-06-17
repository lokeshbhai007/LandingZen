// app/dashboard/DashboardClient.jsx
'use client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";
import LandingZenPage from '@/components/LandingZenPage';

export default function DashboardClient({ session }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      await signOut({ callbackUrl: '/' });
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <LandingZenPage 
      onLogout={handleLogout} 
      userSession={session} 
    />
  );
}