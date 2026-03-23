"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
// useQuery(...) starts fetching data.
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/ui/loading-state";

export const AgentsView = () => {
  // useTRPC() gives you access to your tRPC routes from the frontend.
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};
