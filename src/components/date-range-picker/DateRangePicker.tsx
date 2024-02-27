import dayjs from 'dayjs'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { DateRange } from 'react-day-picker'

import { cn } from '../../utils/utils'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

type Props = {
  className?: string
  date?: DateRange
  setDate: Dispatch<SetStateAction<DateRange | undefined>>
  align?: 'center' | 'end' | 'start'
  isOpen?: boolean
}

export const DateRangePicker: FC<Props> = ({
  className,
  date,
  setDate,
  isOpen,
  align = 'end',
}) => {
  return (
    <div className={cn('grid gap-2', className)}>
      {isOpen ? (
        <div className="flex flex-col items-end">
          <Button
            id="date"
            variant={'outline'}
            className={cn('justify-end text-left font-normal mb-[5px]', {
              'text-muted-foreground': !date,
            })}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {dayjs(date.from).format('DD MMMM YYYY')} -{' '}
                  {dayjs(date.to).format('DD MMMM YYYY')}
                </>
              ) : (
                dayjs(date.from).format('DD MMMM YYYY')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
          <div className="w-auto p-0 border rounded-md bg-white">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </div>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn('justify-start text-left font-normal h-9', {
                'text-muted-foreground': !date,
              })}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {dayjs(date.from).format('DD MMMM YYYY')} -{' '}
                    {dayjs(date.to).format('DD MMMM YYYY')}
                  </>
                ) : (
                  dayjs(date.from).format('DD MMMM YYYY')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align={align}>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}
