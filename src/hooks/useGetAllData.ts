import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { CLIENT_API } from "../services/client.service";
import type { AxiosResponse } from "axios";

const useGetAllData = <TData = unknown, TError = Error>({ queryKey, url, params, ...options }: {
  queryKey: readonly unknown[]; url: string; params?: Record<string, any> } & Omit<UseQueryOptions<TData, TError, TData, readonly unknown[]>, "queryKey" | "queryFn">
) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      const response = await CLIENT_API.getAll<AxiosResponse<TData>>({ url, params });
      return response.data;
    },
    ...options,
  });
};

export default useGetAllData;