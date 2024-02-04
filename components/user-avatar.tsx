import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { FC } from 'react'
import LiveBadge from './live-badge'
import { Skeleton } from './ui/skeleton'


const avatarSizes = cva(
  "",
  {
    variants: {
      size: {
        default: 'h-8 w-8',
        lg: 'h-14 w-14'
      },
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface UserAvatarProps
  extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  username: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  username, imageUrl, isLive, showBadge, size
}) => {
  const canShowBadge = showBadge && isLive;
  return <div className='relative'>
    <Avatar
    className={cn(
      isLive && "ring-2 ring-rose-500 border border-background",
      avatarSizes({size})
    )}>
     <AvatarImage src={imageUrl} className='object-cover'/>
     <AvatarFallback>
      {username[0]}
      {username[username.length - 1]}
     </AvatarFallback>
    </Avatar>
    {canShowBadge && (
      <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
        <LiveBadge/>
      </div>
    )}
  </div>
}

interface UserAvatarSkeletonProps
  extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton: FC<UserAvatarSkeletonProps> = ({
  size
}) => {
  return <>
    <Skeleton className={cn(
      'rounded-full',
      avatarSizes({size}),
    )}/>
  </>
}
