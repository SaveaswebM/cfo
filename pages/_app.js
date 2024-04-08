import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/globals.css";
import formbricks from "@formbricks/js";
import { useEffect } from "react";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: "clu8i4r110mm45ghdp8xk36m6",
    apiHost: "https://app.formbricks.com",
    
    
  });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Connect next.js router to Formbricks
    const handleRouteChange = formbricks?.registerRouteChange;
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
    router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (<Layout> <Component {...pageProps} /></Layout>);
 
}