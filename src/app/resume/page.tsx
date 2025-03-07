import { IconX } from '@tabler/icons-react'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'
import { formatDateTime } from '@/utils'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { color: '#282935', media: '(prefers-color-scheme: light)' },
    { color: '#282935', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function Page() {
  const lastBuildTime = formatDateTime(
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      weekday: 'short',
    },
    new Date(),
  )

  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-prose flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            kemiao@kmblog.icu:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>Last login: {lastBuildTime} on vscode</p>
          <Typed>
            <TypedText>who am i</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>Ke Miao</strong>, in Chinese my name is{' '}
                <strong>克喵爱吃卤面</strong>.
              </p>
              <p>
                I am a college student, started studying in Nanjing in <strong>2023</strong>, majoring in Automation Technology and Application, 
                I started sharing resources because of the TG channel: Resource Sharing: "<a href="https://t.me/txwl666">"Software | Website | Open Source"</a>.
                I found many useful projects from there, and over time, I started sharing resources.
              </p>
              <p>
                My sharing project is on {' '}
                <code><a href="https://github.com/Kemeow815/kemiaofx">Github</a></code>.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>source</span>
                <span>projects</span>
                <span>blog-info</span>
                <span>experience</span>
                <span>skills</span>
                <span>contact</span>
              </div>
            </TypedContent>
            <TypedText afterDelay={700}>source</TypedText>
            <TypedContent>
              <p>
                I share most of the non-reverse resources that are open source, and those that are not open source try to find safe ones. 
                I mainly share various <code>Github projects</code>, <code>use websites</code>, <code>plugins</code>, <code>Android phone reverse application</code> and so on.
              </p>
              <p>
                The author who does not want to be shared can contact me to delete, 
                does not share porn, gambling, drugs and other types of software, be a lawful youth..
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>projects</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/kemiaofx'>
                      克喵分享的项目页
                    </a>
                  </strong>
                </li>
                <li>分享的链接和说明在里头，善用<code>ctrl + f</code>。</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/blog-v3'>
                      克喵的一个博客项目，非自制。
                    </a>
                  </strong>
                </li>
                <li>感觉挺好的。</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/Markdown'>
                      克喵的Maekdown语法学习项目，建设中~
                    </a>
                  </strong>
                </li>
                <li>
                  致力于学习Markdown语法
                </li>
              </ul>
              {/* <ul>
                <li>
                  <strong>
                    <a href='https://github.com/zhangyu1818/tw-styled'>
                      tw-styled
                    </a>
                  </strong>
                </li>
                <li>
                  Create Tailwind CSS-styled React components with ease using
                  tw-styled.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/zhangyu1818/use-flip'>
                      use-flip
                    </a>
                  </strong>
                </li>
                <li>
                  Effortless FLIP animations with a React Hook for smoother
                  transitions.
                </li>
              </ul> */}
            </TypedContent>
            <TypedText>blog-info</TypedText>
            <TypedContent>
              <p>
                I currently have no plans to use a server, these blogs were only maintained during my university days, 
                after graduation, I'll see how things go, if I don't find a good job, I might put blog creation on hold or just keep one blog, 
                the server will depend on the situation. I basically write blogs in Chinese, 
                but use various languages to code, covering <code>JavaScript</code>,
                <code>TypeScript</code>, <code>React</code> source-code,{' '}
                <code>CSS</code>, and so on.
              </p>
              {/* <p>
                My articles have been read over <i>150,000</i> times.
                Previously, I primarily wrote in Chinese, but currently, my goal
                is to write articles in English.
              </p> */}
            </TypedContent>
            <TypedText>experience</TypedText>
            <TypedContent>
              <p>Until now, I have worked as a temporary worker once time.</p>
              <p>
                I once worked as an express courier sorter for a period of time.
              </p>
              {/* <p>
                The second company specialized in creating visually appealing
                and high-performance e-commerce platforms and Apps for
                cross-border trade.
              </p> */}
            </TypedContent>
            <TypedText>skills</TypedText>
            <TypedContent>
              <p>
                I'm not a computer major, and my relevant skills are relatively poor. 
                I'm still learning and working hard in the ocean of automation.
              </p>
              {/* <p>
                I have a deep understanding of <code>React</code> and have
                explored other popular frameworks as well. Currently, my work
                primarily involves using <code>Next.js</code>, and I have
                extensive experience with <code>App Router</code>.
              </p>
              <p>
                In addition to front-end development, I am also familiar with
                backend development using tools such as <code>Prisma</code>,{' '}
                <code>NestJS</code>, and <code>GraphQL</code>.
              </p>
              <p>
                Furthermore, I have experience in mobile App development using
                <code>React Native</code> and <code>SwiftUI</code>.
              </p> */}
            </TypedContent>
            <TypedText>Contact</TypedText>
            <TypedContent>
              <div className='my-4 flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Social</p>
                <div className='grid flex-1 grid-cols-2 justify-items-start gap-2'>
                  <a href='https://github.com/Kemeow815'>Github</a>
                  <a href='https://twitter.com/KemiaoJun'>Telegram</a>
                  {/* <a href='https://juejin.cn/user/4089838986339927'>掘金</a> */}
                  <a href='https://blog.kemeow.cn'>Blog</a>
                  {/* <a href='mailto:kemiao@kmblog.icu'>Mail</a> */}
                </div>
              </div>
              <div className='flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Email</p>
                <a href='mailto:kemiao@kmblog.icu'>kemiao@kmblog.icu</a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
