import { UserEntity } from '@/generated/graphql'
import { create } from 'zustand'

type UserStore = {
  user: UserEntity | null
  setUser: (user: UserEntity | null) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => {
    set({
      user,
    })
  },
}))
