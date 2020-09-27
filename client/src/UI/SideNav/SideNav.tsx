import classnames from "classnames"
import React from "react"

interface ISideNavProps {
  className?: string | null
  children: React.ReactNode
}

const SideNav: React.FC<ISideNavProps> = ({ className, children }) => (
  <ul className={classnames("nav nav-side flex-column", className)}>
    {children}
  </ul>
)

export default SideNav
