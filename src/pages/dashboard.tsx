import { Headphones, LayoutDashboard, HandCoins, ArrowDownUp, Forklift, User, Settings, DollarSign } from 'lucide-react';
import SidebarItem from '@/components/sideBarItem';
import TitleBar from '@/components/titleBar';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Download } from 'lucide-react';
import CountUp from 'react-countup';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button"


export default function DashBoard() {

    const chartData = [
        { month: "Janeiro", revenue: 10.159, customers: 80 },
        { month: "Fevereiro", revenue: 24.000, customers: 200 },
        { month: "Março", revenue: 18.000, customers: 120 },
        { month: "Abril", revenue: 19.356, customers: 190 },
        { month: "Maio", revenue: 19.984, customers: 130 },
        { month: "Junho", revenue: 21.234, customers: 140 },
    ];

    // Pega os últimos três meses
    const lastThreeMonths = chartData.slice(-3);

    // Calcula o total de revenue dos últimos três meses
    const totalRevenueLastThreeMonths = lastThreeMonths.reduce((acc, item) => acc + item.revenue, 0);

    // Calcula o total de clientes dos últimos três meses
    const totalCustomersLastThreeMonths = lastThreeMonths.reduce((acc, item) => acc + item.customers, 0);

    const chartConfig = {
        revenue: {
            label: "Receita",
            color: "#909497",
        },
        customers: {
            label: "Clientes",
            color: "var(--bg-color-main)",
        },
    } satisfies ChartConfig;



    return (
        <div className="h-screen text-white flex">

            <aside className="flex flex-col w-72 py-8 px-9 text-white">

                <nav className='nav-primary border-b border-white border-opacity-25 pb-2'>
                    <SidebarItem Icon={LayoutDashboard} label="Dashboard" href="#" />
                    <SidebarItem Icon={HandCoins} label="Precificação" href="#" />
                    <SidebarItem Icon={ArrowDownUp} label="Fluxo de caixa" href="#" />
                    <SidebarItem Icon={Forklift} label="Estoque/Cadastro" href="#" />
                    <SidebarItem Icon={Headphones} label="Suporte" href="#" />
                </nav>

                <nav className='nav-second'>
                    <SidebarItem Icon={User} label="Meu perfil" href="#" />
                    <SidebarItem Icon={Settings} label="Configurações" href="#" />
                </nav>

            </aside>

            <main className="flex-1 bg-slate-50 text-black">

                {/* Header da main */}
                <TitleBar labelNav={'DashBoard'} nameUser='Caio Souza' />

                {/* Conteudo da main */}
                <div className='w-11/12 m-auto'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-3xl font-bold m-8'>Relatorio </h2>
                        <Button variant="outline" className='gap-2'>
                            <Download /> Exportar
                        </Button>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        {/* Dashboard div */}
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <BarChart data={chartData}>
                                <CartesianGrid vertical={true} />

                                {/* Eixo X */}
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />

                                {/* Eixo Y para revenue */}
                                <YAxis yAxisId="left" orientation="left" />

                                {/* Eixo Y para customers */}
                                <YAxis yAxisId="right" orientation="right" />

                                <ChartTooltip content={<ChartTooltipContent />} />

                                {/* Barra para revenue */}
                                <Bar yAxisId="left" dataKey="revenue" fill="var(--color-revenue)" radius={4} />

                                {/* Barra para customers */}
                                <Bar yAxisId="right" dataKey="customers" fill="var(--color-customers)" radius={4} />
                            </BarChart>

                        </ChartContainer>

                        {/* Cards column */}
                        <div className="grid grid-rows-2 gap-4">
                            {/* Total em vendas */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-center">
                                        <CardTitle className='text-lg text-gray-800 select-none'>
                                            Total em vendas
                                        </CardTitle>
                                        <DollarSign className='ml-auto w-4 h-4' />
                                    </div>

                                    <CardDescription>
                                        Total vendas em 90 dias
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className='text-base font-bold'>
                                        R$<CountUp
                                            end={totalRevenueLastThreeMonths} 
                                            duration={2} 
                                            decimals={3} 
                                            separator="." 
                                            decimal=","
                                        />
                                    </p>
                                </CardContent>
                            </Card>


                            {/* Card Taxa de clientes */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-center">
                                        <CardTitle className='text-lg text-gray-800 select-none'>
                                            Total de clientes
                                        </CardTitle>
                                        <User className='ml-auto w-4 h-4' />
                                    </div>

                                    <CardDescription>
                                        Clientes nos últimos 90 dias
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className='font-bold'>
                                    <CountUp
                                        end={totalCustomersLastThreeMonths} 
                                        duration={2} 
                                        decimals={0} 
                                        separator="." 
                                        decimal="," 
                                    />
                                </CardContent>
                            </Card>
                        </div>

                    </div>


                </div>
            </main>
        </div>
    );
}
