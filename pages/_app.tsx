import "styles/globals.scss";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { Layout } from "components";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 0,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      }),
  );
  if (Component.displayName === "ErrorPage" || Component.displayName === "NoLayout") {
    // Currently using `displayName` to remove Layout formatting
    return <Component {...pageProps} />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
