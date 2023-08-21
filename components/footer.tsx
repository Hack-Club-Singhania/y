import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with ♥ at Smt. Sulochanadevi Singhania IB World School
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://tally.so/r/mVQ9oE?"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Submit an article
            </a>
            <a
              href={`https://github.com/Hack-Club-Singhania/y`}
              className="mx-3 font-bold hover:underline"
            >
              View source code
            </a>
          </div>
        </div>
        <img src="/badge.png" alt="Badge" className="mt-4" />
        <br />
        <br />
      </Container>
    </footer>
  )
}

export default Footer
