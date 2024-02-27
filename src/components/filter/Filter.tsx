import Button from '@/components/button/Button'
import { Icon } from '@/components/icon/Icon'
import { Select, SelectItem, SelectProps } from '@/components/select/Select'

type Props = {
  onClearFilter?: () => void
}

const Filter = <T extends SelectItem>({
  onClearFilter,
  ...props
}: Props & SelectProps<T>) => {
  return (
    <div className="flex gap-2 items-center">
      {props.value && onClearFilter && (
        <Button
          variant="secondary"
          onClick={onClearFilter}
          className="rounded-full h-[18px] w-[18px] p-0"
        >
          <Icon component="Cross" />
        </Button>
      )}

      <Select {...props} />
    </div>
  )
}

export default Filter
