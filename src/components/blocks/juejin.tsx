import { Block } from '@/components/blocks/block'
import { ExternalLink } from '@/components/external-link'

export const Juejin = () => (
  <Block
    className='group flex items-center justify-center bg-gradient-to-b from-blue-200 to-white text-black dark:from-blue-300/80 dark:to-white/70'
    data-type='about'
  >
    <svg
      className='size-24 dark:grayscale-[20%] xl:size-32'
      height='1em'
      viewBox='0 0 38 38'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z'
        fill='#1296DB'
        fillRule='evenodd'
      />
    </svg>
    <ExternalLink href='https://t.me/kemiaofx_me' title='电报频道' />
  </Block>
)