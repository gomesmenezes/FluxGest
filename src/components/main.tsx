import { ButtonNavAct, ButtonRegular } from "./button"

export default function Main() {
    return (
        <main className="text-white mt-32 mx-auto max-w-7xl">
            <h1 className="font-bold text-[48px] mx-auto max-w-[48rem] text-center">Gerencie suas finanças e planilhas com um clique</h1>
            <p className="font-normal text-[20px] mx-auto max-w-[44rem] pt-4 text-center">Tenha controle total sobre suas finanças de forma simples e rápida. Acompanhe despesas, receitas e obtenha relatórios detalhados com apenas um clique.</p>
            
            <section className="flex gap-9 justify-center mt-24">
                <ButtonNavAct/>
                <ButtonRegular/>
            </section>
        </main>
    )
}