import { FC, PropsWithChildren } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils'

interface HintProps {
  label: string;
  asChild?: boolean;
  side?: 'top'| 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

const Hint: FC<PropsWithChildren<HintProps>> = ({
  label, children, asChild, side = 'top', align
}) => {

  return <>
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>
          {children}
        </TooltipTrigger>
        <TooltipContent
         className={cn('text-black bg-white p-2 rounded-sm transition',
         `m-2`
         )}
         side={side}
         align={align}
        >
          <p className='font-medium text-xs'>
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </>
}

export default Hint