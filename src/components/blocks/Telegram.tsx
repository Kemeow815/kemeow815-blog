import { Block } from '@/components/blocks/block'
import { ExternalLink } from '@/components/external-link'

export const Telegram = () => (
  <Block
    className='group flex items-center justify-center bg-gradient-to-b from-blue-200 to-white text-black dark:from-blue-300/80 dark:to-white/70'
    data-type='about'
  >
    <svg
      className='size-24 dark:grayscale-[20%] xl:size-32'
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394a.759.759 0 0 1-.6.3h-.006l.213-3.054 5.56-5.022c.24-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
        fill="#0088CC"
        fillRule="evenodd"
      />
    </svg>
    <ExternalLink href='https://t.me/kemiaofx_me' title='Telegram' />
  </Block>
)
