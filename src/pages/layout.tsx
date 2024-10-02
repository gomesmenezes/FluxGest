import Header from '@/components/header';
import '../styles/globals.css';

export const metadata = {
    title: 'FluxGest',
    description: 'Organize sua vida financeira.'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR"> { }
            <head>
                <link rel="icon" href="/public/favicon.jpg" type="image/jpeg" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
