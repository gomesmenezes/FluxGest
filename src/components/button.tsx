export default function Button() {
  return (
    <button className="btn-header px-12 border-2 border-white w-140 h-12 hover:bg-[#4452FE] hover:border-transparent">
      Login
    </button>
  );
}


export function ButtonNavAct() {
  return (
    <button className="font-semibold px-12 bg-[#4452FE] w-44 h-16">
      Use agora!
    </button>
  )
}

export function ButtonRegular() {
  return (
    <button className="font-semibold px-2 border-2 border-white w-44 h-16">
      Saiba Mais
    </button>
  )
}