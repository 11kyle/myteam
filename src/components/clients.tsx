import Image from "next/image";
import Heading from "./heading";

const clients = [
  {
    id: 1,
    name: '',
    imageSrc: '/logo-gadgets-now.png',
    imageAlt: '',
  },
  {
    id: 2,
    name: '',
    imageSrc: '/logo-jakarta-post.png',
    imageAlt: '',
  },
  {
    id: 3,
    name: '',
    imageSrc: '/logo-tech-radar.png',
    imageAlt: '',
  },
  {
    id: 4,
    name: '',
    imageSrc: '/logo-the-guardian.png',
    imageAlt: '',
  },
  {
    id: 5,
    name: '',
    imageSrc: '/logo-the-verge.png',
    imageAlt: '',
  }
]

export default function Clients() {
  return (
    <div className="relative bg-sacramento-state-green overflow-hidden py-20 sm:py-24 md:py-36">
      <div className="absolute left-0 top-0 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 md:translate-y-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <g fill="none" fillRule="evenodd">
            <path fill="#2C6269" d="M100 100H0V0h100z"/>
            <path fill="#014E56" d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"/>
            <path fill="#79C8C7" d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"/>
          </g>
        </svg>
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <Heading className="text-center">
        Some of our clients
        </Heading>
        <div className="mx-auto mt-14 grid grid-cols-1 sm:grid-cols-5 gap-10 justify-items-center">
          {clients.map((item) => (
            <div key={item.id} className="relative">
              <Image 
                src={item.imageSrc}
                alt={item.imageAlt}
                width={112}
                height={28}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
