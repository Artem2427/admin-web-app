import { Icon } from '@/components/icon/Icon'
import { EMPTY_VALUE } from '@/utils/constants'
import { FC } from 'react'

type Props = {
  permission: {
    view?: boolean
    edit?: boolean
    delete?: boolean
  }
}

const AccessCell: FC<Props> = ({ permission }) => {
  return (
    <div className="flex flex-col py-[5px]">
      {!permission.edit &&
        !permission.view &&
        !permission.delete &&
        EMPTY_VALUE}
      {permission.edit && (
        <span className="flex items-center gap-2">
          <Icon component="Settings" /> Edit
        </span>
      )}
      {permission.view && (
        <span className="flex items-center gap-2">
          <Icon component="Eye" />
          Viewing
        </span>
      )}
      {permission.delete && (
        <span className="flex items-center gap-2">
          <Icon component="Trash" />
          Delete
        </span>
      )}
    </div>
  )
}

export default AccessCell
