import { type SVGProps } from "react"

const navigation = {
  main: [
    { name: 'home', href: '#' },
    { name: 'about', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-green text-sm" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="grid grid-rows-1 sm:grid-rows-2 gap-y-6">
            <div className="mx-auto sm:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40">
                <path fill="#FFF" d="M6.214 29.531V18.237c0-1.488.334-2.582 1.003-3.282.668-.699 1.511-1.049 2.529-1.049 1.017 0 1.846.365 2.485 1.094.625.73.967 1.734 1.025 3.013v11.518h6.213V18.237c0-1.459.32-2.545.96-3.26.64-.714 1.49-1.07 2.55-1.07 1.062 0 1.92.379 2.573 1.138.625.759.938 1.793.938 3.102v11.384h6.148v-12.12c0-3.096-.69-5.484-2.071-7.165-1.381-1.682-3.38-2.523-5.996-2.523-2.616 0-4.687 1.265-6.213 3.795-1.163-2.5-3.394-3.75-6.694-3.75a6.251 6.251 0 00-3.27.915c-.945.64-1.672 1.51-2.18 2.612V8.192H0v21.34h6.214zM44.634 40L57.499 8.192h-6.606L46.248 20.29l-4.6-12.098h-6.606l8.045 19.152L38.072 40h6.563zm23.683-10.469V13.214H72.7V8.192h-4.383V0h-6.17v8.192h-3.793v5.022h3.793v16.317h6.17zm17.448.447c4.418.015 7.594-1.429 9.527-4.33L90.78 22.5c-1.046 1.34-2.565 2.009-4.557 2.009-1.279 0-2.427-.313-3.444-.938-1.018-.625-1.585-1.503-1.7-2.634H96.36c.058-1.28.087-1.934.087-1.964-.015-3.333-1.04-6.041-3.074-8.125-2.035-2.083-4.586-3.125-7.653-3.125-3.067-.015-5.64 1.005-7.718 3.058-2.078 2.054-3.118 4.725-3.118 8.014 0 3.288 1.04 5.982 3.118 8.08 2.108 2.068 4.695 3.103 7.762 3.103zm4.426-13.014h-9.027c.233-1.16.814-2.068 1.745-2.723.9-.655 1.875-.967 2.921-.937a4.987 4.987 0 012.856.982c.858.625 1.36 1.518 1.505 2.678zm19.518 12.969c1.076.03 2.202-.208 3.38-.714 1.177-.506 2.078-1.213 2.703-2.12v2.432h6.148V8.192h-6.148v2.366c-.625-.908-1.52-1.607-2.682-2.098-1.163-.491-2.296-.737-3.401-.737-2.718.015-5.167 1.05-7.347 3.103-2.18 2.053-3.27 4.725-3.27 8.013 0 3.289 1.053 5.96 3.16 8.014 2.108 2.053 4.594 3.08 7.457 3.08zm1.003-6.027c-1.41 0-2.624-.476-3.641-1.428-1.047-.953-1.57-2.158-1.57-3.616 0-1.444.523-2.657 1.57-3.639 1.134-.967 2.376-1.45 3.728-1.45 1.352 0 2.522.476 3.51 1.428.989.952 1.483 2.173 1.483 3.66 0 1.489-.494 2.701-1.483 3.639-.988.938-2.187 1.406-3.597 1.406zm22.81 5.625V18.237c0-1.488.335-2.582 1.003-3.282.669-.699 1.512-1.049 2.53-1.049 1.017 0 1.845.365 2.485 1.094.625.73.966 1.734 1.025 3.013v11.518h6.213V18.237c0-1.459.32-2.545.96-3.26.64-.714 1.49-1.07 2.55-1.07 1.062 0 1.92.379 2.573 1.138.625.759.938 1.793.938 3.102v11.384h6.148v-12.12c0-3.096-.69-5.484-2.071-7.165-1.381-1.682-3.38-2.523-5.996-2.523-2.616 0-4.687 1.265-6.214 3.795-1.162-2.5-3.394-3.75-6.693-3.75a6.251 6.251 0 00-3.27.915c-.945.64-1.672 1.51-2.18 2.612V8.192h-6.214v21.34h6.213z"/>
              </svg>
            </div>
            <div className="flex justify-center sm:justify-start gap-x-10 text-white">
              {navigation.main.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-white opacity-60 text-center sm:text-right md:text-left mt-6 mb-10 sm:my-0">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us: 949-833-7432</p>
          </div>
          <div className="md:col-start-4">
            <div className="flex justify-center sm:justify-start md:justify-end gap-4">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            {/* <div>
              <p className="text-white opacity-60">&copy; 2020. All rights reserved.</p>
            </div> */}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-white opacity-60">&copy; 2020. All rights reserved.</p>
        </div> 
      </div>
    </footer>
  )
}
