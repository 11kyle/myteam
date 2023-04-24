import React from "react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  children: React.ReactNode
  className?: string
}
export default function Heading({ children, className }: Props) {
  return (
    <h2 className={classNames(
      className?.length ? className : "",
      "font-bold text-[32px] lg:text-[48px] leading-[32px] lg:leading-[48px] text-white"
      )}
    >
      {children}
    </h2>
  )
}