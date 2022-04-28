import tw from 'tailwind-styled-components'


export const Container = tw.div `
flex
flex-col
my-20
w-full
max-w-sm

`
export const BoxContainer = tw.div`
md:flex
md:items-center
mb-6
`


export const ContainerName = tw.div`
md:w-1/3
`
export const Label = tw.label`
block
text-gray-500
font-bold
md:text-right 
mb-1
md:mb-0
pr-4 

`

export const InputContainer = tw.div`
md:w-2/3
`
export const Input = tw.input`
bg-gray-200
appearance-none
border-2
border-gray-200
rounded
w-full
py-2
px-4
text-gray-700
leading-tight
focus:outline-none
focus:bg-white
focus:border-purple-500
`

export const ContainerButton = tw.div`


w-100
flex
items-center
justify-end
`

