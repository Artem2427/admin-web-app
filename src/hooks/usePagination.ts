import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

export type PaginationOptions = {
  initialPageSize?: number
}

export function usePagination(options: PaginationOptions = {}) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: options.initialPageSize || 10,
  })

  return { pagination, setPagination }
}
