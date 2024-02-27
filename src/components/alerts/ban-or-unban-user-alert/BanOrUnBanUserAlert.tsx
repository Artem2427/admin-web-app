import AlertDialog from '@/components/alert-dialog/AlertDialog'
import { FC, RefObject } from 'react'

type Props = {
  isBlocked: boolean
  username: string
  triggerRef: RefObject<HTMLButtonElement>
  onBanOrUnBan: () => void
}

const BanOrUnBanUserAlert: FC<Props> = ({
  isBlocked,
  username,
  triggerRef,
  onBanOrUnBan,
}) => {
  return (
    <AlertDialog
      title="Confirmation"
      triggerRef={triggerRef}
      description={
        <div>
          {`Do you really want to ${
            isBlocked ? 'unban' : 'ban'
          } a user account`}
          <span className="font-bold text-slate-900 ml-1">{username}</span>?
        </div>
      }
      confirmButtonProps={{
        label: isBlocked ? 'Unban' : 'Ban',
        variant: 'destructive',
        onClick: onBanOrUnBan,
      }}
    />
  )
}

export default BanOrUnBanUserAlert
