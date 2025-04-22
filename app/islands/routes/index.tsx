import { useSignal } from "@preact/signals";

export default function IslandRoutesHome() {
  const moved = useSignal(false);

  // Función para alternar el estado de moved al hacer clic
  const handleClick = () => {
    moved.value = !moved.value; // Alterna entre true y false
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Fondo */}
      <div className="fixed top-0 left-0 w-full -z-50 h-screen bg-[url('/img/bg_logo.jpg')] bg-repeat bg-[length:100%_100%] bg-center" />

      <h1 className="fixed z-10 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white transition-all duration-500 ease-in ease-in-out filter blur-none hover:blur-3xl drop-shadow-xl">
        TrashOps
      </h1>

      <div className="w-full flex justify-center">
        <img
          onClick={handleClick} // Cambiado de onMouseEnter a onClick
          className={`relative z-10 w-full max-w-96 transform transition-transform ease-in-out duration-500 ${
            moved.value ? "translate-y-[160%]" : ""
          }`}
          src="/img/trash_logo.png"
          alt=""
        />
      </div>

      <div className="w-full h-[40rem]"></div>
      <div className="w-full flex justify-center">
        <img
          onClick={handleClick} // Cambiado de onMouseEnter a onClick
          className={`relative z-10 w-[80%] max-w-96 transform transition-transform ease-in-out duration-500`}
          src="/img/conatiner_trash.png"
          alt=""
        />
      </div>
        <div className="w-full  bg-white z-50  py-5">
            <span className={"md:text-7xl lg:text-7xl text-6xl font-black"}>¿Quién dijo que tirar la basura no podía molar?</span>
            
            <div className="flex w-full justify-end items-center p-8">
                <button
                className={`
                    py-4 px-10 md:w-[60%] lg:w-[40%]
                    text-3xl font-extrabold tracking-wide uppercase
                    text-white
                    bg-gradient-to-r from-black via-green-800 to-[#12c2e9]
                    border-4 border-black 
                    shadow-[0_10px_20px_rgba(0,0,0,0.3)]
                    transition-all duration-500
                    hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]
                    hover:rotate-[-1.5deg]
                    hover:from-[#76e6ff] hover:via-green-900 hover:to-black
                    backdrop-blur-md
                    drop-shadow-2xl
                `}
                >
                    <a href="/available">Comprar!</a>
                
                </button>
            </div>
            

        </div>
      
    </div>
  );
}