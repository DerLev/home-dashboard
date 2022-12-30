import tw from 'twin.macro'

const Footer = () => (
  <footer css={tw`flex justify-center pt-2 text-gray-700`}>
    <p>
      &copy; DerLev { new Date().getFullYear() } &ndash;{' '}
      <a href="https://github.com/DerLev/home-dashboard" rel='noopener noreferrer' target='_blank' css={tw`text-gray-600`}>GitHub</a>
    </p>
  </footer>
)

export default Footer
