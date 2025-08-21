import React from 'react'
export default function Button({ as:Comp='button', className='', children, ...props }){
  return <Comp className={`btn ${className}`} {...props}>{children}</Comp>
}
export const PrimaryButton = ({className='',...props}) => (<Button className={`btn-primary ${className}`} {...props} />)
export const OutlineButton = ({className='',...props}) => (<Button className={`btn-outline ${className}`} {...props} />)