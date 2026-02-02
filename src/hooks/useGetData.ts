import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { CLIENT_API } from "../services/client.service";

type UseGetDataProps<TData, TError> = {
  queryKey: readonly unknown[];
  url: string;
  params?: Record<string, any>;
  options?: Omit<
    UseQueryOptions<TData, TError, TData, readonly unknown[]>,
    "queryKey" | "queryFn"
  >;
};
const useGetData = <TData = any, TError = Error>({ queryKey, url, params, options }: UseGetDataProps<TData, TError>) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      return await CLIENT_API.getData<TData>({ url, params });
    },
    ...options,
  });
};

export default useGetData;