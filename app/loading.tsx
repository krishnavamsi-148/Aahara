import { RangoliLoading } from "@/components/rangoli-loading"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sweetlime-50">
      <RangoliLoading size="lg" color="#F4C430" />
      <p className="mt-4 text-jaggery-600 animate-pulse">Loading your wellness journey...</p>
    </div>
  )
}
