import kz from "../assets/kz.png"

const Header = () => (
  <header className="relative min-h-screen flex flex-col justify-center p-12 md:p-16">
    <div className="noise absolute top-0 left-0 right-0 bottom-0 z-0" />
    <p className="text-2xl md:text-3xl font-bold text-zinc-400 z-10">hi, my name is</p>
    <h1 className="font-bold text-6xl md:text-8xl z-10">Madiyar Bolatov</h1>
    <p className="text-2xl text-zinc-400 z-10">
      I'm a frontend developer from <img src={kz} alt="Kazakhstan" className="w-9 align-middle inline" />
    </p>
  </header>
)

export default Header
