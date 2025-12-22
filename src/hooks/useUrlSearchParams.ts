import * as React from "react";
import { useSearchParams } from "react-router-dom";

type Filter = Record<string, number>;
type FilterLike = Record<string, string>;

export interface SearchState {
  page: number;
  limit: number;
  filter: Filter;
  filter_like: FilterLike;
}

type TypeWriteToUrl = (
  name: string,
  value: number | string | null | undefined
) => void;

type TypeUrlSearchParams = (defaults: { page?: number; limit?: number }) => {
  value: SearchState;
  writeToUrl: TypeWriteToUrl;
  clearParams: (params?: string[], clearAll?: boolean) => void;
};

const useUrlSearchParams: TypeUrlSearchParams = ({ page = 1, limit = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defRef = React.useRef({ page, limit });

  React.useEffect(() => {
    defRef.current = { page, limit };
  }, [page, limit]);

  const value = React.useMemo<SearchState>(() => {
    const filter: Filter = {};
    const filter_like: FilterLike = {};
    let page = defRef.current.page;
    let limit = defRef.current.limit;

    searchParams.forEach((val, key) => {
      if (key === "page") {
        const n = Number(val);
        if (Number.isFinite(n) && n > 0) page = n;
        return;
      }
      if (key === "limit") {
        const n = Number(val);
        if (Number.isFinite(n) && n > 0) limit = n;
        return;
      }
      if (key.endsWith("_id")) {
        const n = Number(val);
        if (Number.isFinite(n)) filter[key] = n;
        return;
      }
      if (key) filter_like[key] = val;
    });

    return { page, limit, filter, filter_like };
  }, [searchParams]);

  const writeToUrl: TypeWriteToUrl = React.useCallback(
    (name, value) => {
      const sp = new URLSearchParams(searchParams);

      if (value === null || value === undefined) {
        sp.delete(name); // ❌ do not write, just remove
      } else {
        sp.set(name, String(value));
      }

      setSearchParams(sp, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const clearParams = React.useCallback(
    (params?: string[], clearAll?: boolean) => {
      if (clearAll) {
        setSearchParams({}, { replace: true });
        return;
      }
      if (!params || params.length === 0) return;

      const sp = new URLSearchParams(searchParams);
      params.forEach((k) => sp.delete(k));
      setSearchParams(sp, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return { value, writeToUrl, clearParams };
};

export default useUrlSearchParams;
