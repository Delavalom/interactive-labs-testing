import { AppRouter } from "@/server/root";
import { api } from "@/utils/trpc";
import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

beforeEach(() => {
  mockReset(api);
});

const trpcClient = mockDeep<typeof api>()

export default trpcClient

export const useAPI = () => {
    const {data, isSuccess, isError, isLoading} = api.getUsers.useQuery()
    return { data, isSuccess, isError, isLoading}
}

export const queryResponse = {
  status: "success",
  fetchStatus: "idle",
  isLoading: false,
  isSuccess: true,
  isError: false,
  isInitialLoading: false,
  data: [
    {
      id: 0,
      title: "Employees",
      body: {
        text: "hey employees",
      },
    },
    {
      id: 1,
      title: "whatever",
      body: {
        text: "hey a bunch of notes",
      },
    },
    {
      id: 2,
      title: "some notes",
      body: {
        text: "hey some important notes",
      },
    },
  ],
  dataUpdatedAt: 1679247591075,
  error: null,
  errorUpdatedAt: 0,
  failureCount: 0,
  failureReason: null,
  errorUpdateCount: 0,
  isFetched: true,
  isFetchedAfterMount: true,
  isFetching: false,
  isRefetching: false,
  isLoadingError: false,
  isPaused: false,
  isPlaceholderData: false,
  isPreviousData: false,
  isRefetchError: false,
  isStale: true,
  trpc: {
    path: "getUsers",
  },
};
