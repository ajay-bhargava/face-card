import { create } from "zustand";

interface VoteStore {
  upVotes: number;
  downVotes: number;
  aggregateVotes: number;
  incrementUpVotes: () => void;
  incrementDownVotes: () => void;
}

export const useVoteStore = create<VoteStore>((set) => ({
  upVotes: 0,
  downVotes: 0,
  aggregateVotes: 0,
  incrementUpVotes: () => set((state) => ({ 
    upVotes: state.upVotes + 1,
    aggregateVotes: Math.max(0, state.upVotes + 1 - state.downVotes)
  })),
  incrementDownVotes: () => set((state) => ({ 
    downVotes: state.downVotes + 1,
    aggregateVotes: Math.max(0, state.upVotes - (state.downVotes + 1))
  })),
}));

