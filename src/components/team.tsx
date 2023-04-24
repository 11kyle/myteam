import Image from "next/image"
import Heading from "./heading"

const people = [
  {
    name: 'Nikita Marks',
    role: 'Founder & CEO',
    imageUrl:
      '/avatar-nikita.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Christian Duncan',
    role: 'Co-founder & COO',
    imageUrl:
      '/avatar-christian.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Cruz Hamer',
    role: 'Co-founder & CTO',
    imageUrl:
      '/avatar-cruz.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Drake Heaton',
    role: 'Business Development Lead',
    imageUrl:
      '/avatar-drake.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Griffin Wise',
    role: 'Lead Marketing',
    imageUrl:
      '/avatar-griffin.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Aden Allan',
    role: 'Head of Taletn',
    imageUrl:
      '/avatar-aden.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Team() {
  return (
    <div className="relative bg-deep-jungle-green overflow-hidden py-20 pb-32 md:py-36">
      <div className="absolute top-0 -translate-y-1/2 md:translate-y-0 left-0 -translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <g fill="none" fillRule="evenodd">
            <path fill="#2C6269" d="M100 100h100V0H100z"/>
            <path fill="#012F34" d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"/>
            <path fill="#79C8C7" d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"/>
            <path fill="#F67E7E" d="M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"/>
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="100">
          <g fill="none" fillRule="evenodd">
            <path fill="#002529" d="M0 100h100V0H0z"/>
            <path fill="#79C8C7" d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"/>
          </g>
        </svg>
      </div>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <Heading>
          Meet the directors
          </Heading>
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid grid-cols-1 gap-x-4 gap-y-14 sm:grid-cols-2 md:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="relative bg-sacramento-state-green pt-8 pb-14">
              <Image 
                src={person.imageUrl}
                alt=""
                width={96}
                height={96}
                className="rounded-full border-2 border-rapture-blue mx-auto"
              />
              <h3 className="text-lg font-bold text-rapture-blue mt-4">{person.name}</h3>
              <p className="text-white">{person.role}</p>
              {/* <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-14 h-14 bg-light-coral rounded-full grid place-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path fill="#012F34" fillRule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}