import { UniversalPagination } from "@/components/Pagination/Pagination";
import useGetData from "@/hooks/useGetData";
import useUrlSearchParams from "@/hooks/useUrlSearchParams";

const Dashboard = () => {
  const { value } = useUrlSearchParams({ page: 1, limit: 18 });

  const skip = (value.page - 1) * value.limit;

  const { data, isLoading } = useGetData({
    queryKey: ["users", value.page, value.limit],
    url: `/users?limit=${value.limit}&skip=${skip}`,
  });

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Foydalanuvchilar</h1>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50"></div>
        </div>
      ) : (
        <>
          {/* Ro'yxat / kartalar */}
          {data?.users?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
              {data.users.map((user: any) => (
                <div
                  key={user.id}
                  className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="font-semibold text-lg text-gray-800 truncate">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 truncate">{user.email}</p>
                  {user.phone && (
                    <p className="text-gray-500 text-xs mt-2">Tel: {user.phone}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              Hech qanday foydalanuvchi topilmadi
            </div>
          )}

          {/* Pagination */}
          <UniversalPagination total={data?.total || 0} currentPage={value.page} perPage={value.limit}/>
        </>
      )}
    </div>
  );
};

export default Dashboard;