import classnames from "classnames"
import React from "react"

interface IRouteContainerProps {
  children: React.ReactNode
  className?: string | null
}

const RouteContainer: React.FC<IRouteContainerProps> = ({
  children,
  className,
}) => (
  <div className={classnames("route-container", className)}>
    <div className="container-fluid">{children}</div>
  </div>
)

export default RouteContainer
