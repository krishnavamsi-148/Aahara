export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
        <div className="h-6 w-full max-w-3xl bg-gray-200 rounded animate-pulse mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Search and Filters Skeleton */}
        <div className="md:w-1/4 space-y-6">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>

            <div className="mb-4">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Grid Skeleton */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-3"></div>

                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>

                  <div className="flex justify-between mb-3">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  <div className="border-t pt-3">
                    <div className="h-4 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="grid grid-cols-4 gap-1">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="text-center">
                          <div className="h-4 w-8 bg-gray-200 rounded animate-pulse mx-auto mb-1"></div>
                          <div className="h-3 w-12 bg-gray-200 rounded animate-pulse mx-auto"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
