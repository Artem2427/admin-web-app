import { ITEMS_PER_PAGE } from '@/utils/constants'
import { cn } from '@/utils/utils'
import {
  ColumnDef,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'

import { Icon } from '../icon/Icon'
import { Select } from '../select/Select'
import { Button } from '../ui/button'
import {
  TableBody,
  TableCell,
  Table as TableComponent,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export interface TableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLTableElement> {
  columns: ColumnDef<TData, TValue>[]
  defaultData: TData[]
  ref?: React.Ref<HTMLTableElement>
  canPrev?: boolean
  canNext?: boolean
  rowCount?: number
  pageIndex?: number
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
  manualSorting?: boolean
  manualPagination?: boolean
}

const Table = <TData, TValue>({
  defaultData,
  columns,
  ref,
  sorting,
  canPrev,
  canNext,
  setSorting,
  pagination,
  setPagination,
  manualSorting,
  manualPagination,
  ...props
}: TableProps<TData, TValue>) => {
  const table = useReactTable({
    data: defaultData,
    columns,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      pagination,
    },
    manualSorting,
    manualPagination,
  })

  return (
    <>
      <div className="rounded-md border">
        <TableComponent ref={ref} {...props}>
          <TableHeader className="sticky m-0 top-0 bg-white z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        'h-10 py-0 text-slate-500 whitespace-nowrap',
                        {
                          'cursor-pointer select-none flex justify-between items-center gap-2':
                            header.column.getCanSort(),
                        },
                      )}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}

                      {header.column.getCanSort() &&
                        (header.column.getIsSorted() ? (
                          <Icon component="CaretSortActive" />
                        ) : (
                          <Icon component="CaretSort" />
                        ))}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="h-12 py-0">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableComponent>
      </div>

      {pagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex gap-[8px] items-center mr-[24px]">
            <span className="text-sm">Rows per page</span>
            <Select
              value={String(table.getState().pagination.pageSize)}
              items={ITEMS_PER_PAGE.map((item) => ({
                value: item,
                label: item,
                id: item,
              }))}
              onValueChange={(item) => table.setPageSize(Number(item))}
            />
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!canPrev}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!canNext}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

Table.displayName = 'Table'

export { Table }
