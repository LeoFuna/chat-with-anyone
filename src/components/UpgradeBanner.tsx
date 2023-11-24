'use client'

import { useRouter } from "next/navigation";
import { useSubscriptionStore } from "../../store/store"
import { Button } from "./ui/button";



export default function UpgradeBanner() {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.role === 'pro';
  const router = useRouter();

  if (subscription === undefined || isPro) return null;

  return (
    <Button
      onClick={() => router.push('/register')}
      className="w-full rounded-none bg-gradient-to-r from-[#7775D6] to-[#E935C1]
      text-center text-white px-5 py-2 first-letter:hover:shadow-md hover:opacity-75 transition-all"
    >
      Upgrade to Pro to unlock all features!
    </Button>
  )
}