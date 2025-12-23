import { useEffect, useState, type FC } from "react";

interface BuildMeta {
  build_date: string;
  latest_version: string;
}

function withClearCache<T extends Record<string, unknown>>(Component: FC<T>): FC<T> {
  const ClearCacheComponent: FC<T> = (props: T) => {
    const [isLatestBuild, setIsLatestBuild] = useState(true);

    useEffect(() => {
      const checkForUpdate = () => {
        const currentVersion = localStorage.getItem("current_version") || "1.0.0";
        const currentBuildDate = parseInt(
          localStorage.getItem("current_build_date") || "0",
          10
        );

        fetch("/meta.json", { cache: "no-store" })
          .then((res) => res.json())
          .then((meta: BuildMeta) => {
            const latestBuildDate = parseInt(meta.build_date, 10);
            const latestVersion = meta.latest_version;

            const isOutdated =
              latestBuildDate > currentBuildDate ||
              latestVersion !== currentVersion;

            if (isOutdated) {
              localStorage.setItem("current_version", latestVersion);
              localStorage.setItem("current_build_date", latestBuildDate.toString());
              clearCacheAndReload();
            } else {
              setIsLatestBuild(true);
            }
          })
          .catch((err) => {
            console.error("Error fetching meta.json:", err);
            setIsLatestBuild(true); // fetch xato bo'lsa ham render qilish
          });
      };

      const clearCacheAndReload = () => {
        if ("caches" in window) {
          caches.keys().then((names) => {
            Promise.all(names.map((name) => caches.delete(name))).then(() => {
              window.location.reload();
            });
          });
        } else {
          (window as Window).location.reload();
        }
      };

      // Sahifa yuklanganda tekshirish
      checkForUpdate();

      // Tab ko'rinadigan bo'lganda tekshirish
      const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          checkForUpdate();
        }
      };

      // Oyna focusga kelganda tekshirish
      const onFocus = () => {
        checkForUpdate();
      };

      document.addEventListener("visibilitychange", onVisibilityChange);
      window.addEventListener("focus", onFocus);

      return () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
        window.removeEventListener("focus", onFocus);
      };
    }, []);

    return isLatestBuild ? <Component {...props} /> : null;
  };

  // HOC nomi uchun displayName (debug uchun qulay)
  ClearCacheComponent.displayName = `withClearCache(${
    Component.displayName || Component.name || "Component"
  })`;

  return ClearCacheComponent;
}

export default withClearCache;