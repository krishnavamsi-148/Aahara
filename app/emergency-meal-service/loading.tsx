import { Skeleton } from "@/components/ui/skeleton"

export default function EmergencyMealServiceLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-5 w-full max-w-md" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="p-6 bg-muted/30">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
            <div className="p-6 space-y-6">
              <div>
                <Skeleton className="h-5 w-40 mb-3" />
                <div className="space-y-2">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-4 w-4 rounded-full mr-2" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-5 w-40 mb-3" />
                <div className="grid grid-cols-2 gap-2">
                  <Skeleton className="h-10 rounded-md" />
                  <Skeleton className="h-10 rounded-md" />
                </div>
              </div>

              <div>
                <Skeleton className="h-5 w-40 mb-3" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div>
                <Skeleton className="h-5 w-40 mb-3" />
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center mb-2">
                      <Skeleton className="h-4 w-4 rounded mr-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-56 mb-4" />
              <div className="space-y-3">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-64 mb-4" />
              <Skeleton className="h-10 w-full mb-6" />

              <Skeleton className="h-10 w-48 mb-6" />

              <div className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex">
                        <Skeleton className="w-16 h-16 rounded-md mr-4" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <div className="flex gap-1 mb-2">
                            {Array(3)
                              .fill(0)
                              .map((_, j) => (
                                <Skeleton key={j} className="h-4 w-16 rounded-full" />
                              ))}
                          </div>
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="p-6 border-t">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
