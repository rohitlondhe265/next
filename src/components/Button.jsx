import Link from 'next/link'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      <Link href="/">{props.children}</Link>
    </button>
  )
}

export default Button
