import { Skeleton } from "@/components/ui/skeleton"

export default function ThaliBuilderLoading() {
  return (
    <div className="container py-8">
      <Skeleton className="h-10 w-64 mb-2" />
      <Skeleton className="h-5 w-full max-w-md mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Food Items Panel Skeleton */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64 mb-6" />

            <div className="flex gap-2 mb-6">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 flex-1" />
            </div>

            <div className="space-y-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="h-16 w-16 rounded-md mr-3" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-3 w-full mb-1" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Thali Preview Skeleton */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <Skeleton className="h-8 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-6 w-32" />
            </div>

            <div className="border-2 border-dashed rounded-lg p-4 min-h-[300px] mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border rounded-lg p-3">
                      <div className="flex items-center">
                        <Skeleton className="h-12 w-12 rounded-md mr-3" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-24 mb-2" />
                          <div className="flex items-center">
                            <Skeleton className="h-6 w-6 mr-2" />
                            <Skeleton className="h-4 w-4 mx-2" />
                            <Skeleton className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <Skeleton className="h-1 w-full" />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-6 w-40 mb-2" />
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                        <Skeleton className="h-2 w-full" />
                      </div>
                    ))}
                </div>
                <div className="flex-1">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Skeleton className="h-8 w-8 rounded-full mr-3" />
                      <div>
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-3 w-48" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex items-center">
                            <Skeleton className="h-2 w-2 rounded-full mr-2" />
                            <Skeleton className="h-3 w-40" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-8 w-20" />
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Skeleton className="h-10 w-32 flex-1 sm:flex-initial" />
                <Skeleton className="h-10 w-32 flex-1 sm:flex-initial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
