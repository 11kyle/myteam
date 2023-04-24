import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { id: '01', name: 'home', href: '/' },
  { id: '02', name: 'about', href: 'about' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={classNames(
        mobileMenuOpen ? '' : '',
        'bg-midnight-green'
      )}
    >
      <nav className="flex justify-between items-center px-6 py-10 mx-auto">
        <div>
          <Link 
            href="/"
            className={classNames(
              "font-bold text-2xl md:text-3xl font-exo-2 text-white"
            )}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40">
                <path fill="#FFF" d="M6.214 29.531V18.237c0-1.488.334-2.582 1.003-3.282.668-.699 1.511-1.049 2.529-1.049 1.017 0 1.846.365 2.485 1.094.625.73.967 1.734 1.025 3.013v11.518h6.213V18.237c0-1.459.32-2.545.96-3.26.64-.714 1.49-1.07 2.55-1.07 1.062 0 1.92.379 2.573 1.138.625.759.938 1.793.938 3.102v11.384h6.148v-12.12c0-3.096-.69-5.484-2.071-7.165-1.381-1.682-3.38-2.523-5.996-2.523-2.616 0-4.687 1.265-6.213 3.795-1.163-2.5-3.394-3.75-6.694-3.75a6.251 6.251 0 00-3.27.915c-.945.64-1.672 1.51-2.18 2.612V8.192H0v21.34h6.214zM44.634 40L57.499 8.192h-6.606L46.248 20.29l-4.6-12.098h-6.606l8.045 19.152L38.072 40h6.563zm23.683-10.469V13.214H72.7V8.192h-4.383V0h-6.17v8.192h-3.793v5.022h3.793v16.317h6.17zm17.448.447c4.418.015 7.594-1.429 9.527-4.33L90.78 22.5c-1.046 1.34-2.565 2.009-4.557 2.009-1.279 0-2.427-.313-3.444-.938-1.018-.625-1.585-1.503-1.7-2.634H96.36c.058-1.28.087-1.934.087-1.964-.015-3.333-1.04-6.041-3.074-8.125-2.035-2.083-4.586-3.125-7.653-3.125-3.067-.015-5.64 1.005-7.718 3.058-2.078 2.054-3.118 4.725-3.118 8.014 0 3.288 1.04 5.982 3.118 8.08 2.108 2.068 4.695 3.103 7.762 3.103zm4.426-13.014h-9.027c.233-1.16.814-2.068 1.745-2.723.9-.655 1.875-.967 2.921-.937a4.987 4.987 0 012.856.982c.858.625 1.36 1.518 1.505 2.678zm19.518 12.969c1.076.03 2.202-.208 3.38-.714 1.177-.506 2.078-1.213 2.703-2.12v2.432h6.148V8.192h-6.148v2.366c-.625-.908-1.52-1.607-2.682-2.098-1.163-.491-2.296-.737-3.401-.737-2.718.015-5.167 1.05-7.347 3.103-2.18 2.053-3.27 4.725-3.27 8.013 0 3.289 1.053 5.96 3.16 8.014 2.108 2.053 4.594 3.08 7.457 3.08zm1.003-6.027c-1.41 0-2.624-.476-3.641-1.428-1.047-.953-1.57-2.158-1.57-3.616 0-1.444.523-2.657 1.57-3.639 1.134-.967 2.376-1.45 3.728-1.45 1.352 0 2.522.476 3.51 1.428.989.952 1.483 2.173 1.483 3.66 0 1.489-.494 2.701-1.483 3.639-.988.938-2.187 1.406-3.597 1.406zm22.81 5.625V18.237c0-1.488.335-2.582 1.003-3.282.669-.699 1.512-1.049 2.53-1.049 1.017 0 1.845.365 2.485 1.094.625.73.966 1.734 1.025 3.013v11.518h6.213V18.237c0-1.459.32-2.545.96-3.26.64-.714 1.49-1.07 2.55-1.07 1.062 0 1.92.379 2.573 1.138.625.759.938 1.793.938 3.102v11.384h6.148v-12.12c0-3.096-.69-5.484-2.071-7.165-1.381-1.682-3.38-2.523-5.996-2.523-2.616 0-4.687 1.265-6.214 3.795-1.162-2.5-3.394-3.75-6.693-3.75a6.251 6.251 0 00-3.27.915c-.945.64-1.672 1.51-2.18 2.612V8.192h-6.214v21.34h6.213z"/>
              </svg>
            </span>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu for non-mobile */}
        <div className="hidden md:flex md:gap-x-8 md:ml-20 md:mr-auto">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={classNames(
                "font-semibold text-lg text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            href=""
            className="rounded-full border-2 border-white font-semibold text-lg text-white h-12 px-8 pt-[9px]"
          >
            contact us
          </Link>
        </div>
      </nav>
      {/* Mobile Menu Sidebar */}
      <Transition show={mobileMenuOpen}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* <div className="fixed inset-0 z-50" /> */}
            <div className="fixed z-40 inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-midnight-green px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 text-center py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="w-full flex flex-col items-center rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-[#0D2D4E]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}