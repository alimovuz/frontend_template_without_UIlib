import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { CLIENT_API } from "../services/client.service";

const useGetAllData = <TData = any, TError = Error>({ queryKey, url, params, ...options }: {
  queryKey: readonly unknown[]; url: string; params?: Record<string, any> } & Omit<UseQueryOptions<TData, TError, TData, readonly unknown[]>, "queryKey" | "queryFn">
) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      return await CLIENT_API.getData<TData>({ url, params });
    },
    ...options,
  });
};

export default useGetAllData;