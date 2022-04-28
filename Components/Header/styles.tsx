import tw from "tailwind-styled-components/dist/tailwind"


export const Nav = tw.nav `
flex
items-center
justify-between
flex-wrap
 bg-purple-800
p-7


`

export const Navbar = tw.nav `
flex
items-center
justify-center
flex-wrap
 bg-purple-900
p-4


`

export const ContainerLogo = tw.div `
flex
flex-shrink-0
text-white
mr-6

`

export const ContainerOptions = tw.div `

w-full
block 
flex-grow
lg:flex
lg:items-center
lg:w-auto


`
export const ContainerOptionsMenu = tw.div `
flex
justify-center
items-center
flex-row
text-sm
lg:flex-grow

`
export const Options = tw.a `
flex
flex-row
my-2
mx-2
lg:inline-block
align-center
justify-center
lg:mt-0
text-teal-200
hover:underline 
mr-4
text-base
text-white
text-center

`

