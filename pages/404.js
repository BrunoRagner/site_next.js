import Head from 'next/head';
import Meio from '../components/Meio';

function nao() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Cesar - Celke" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Erro</title>
            </Head>
            <Meio />
            <section className="top2">
                <div className="max-width">
                    <div className="top2-content">
                        <div className="text-2">
                            <h1> erro  404 </h1>
                        </div>
                        <div className="text-2">
                           pagina não encontrada 
                        </div>
                        
                        <a href="/">Volta a  Home</a>

                    </div>
                </div>
            </section>

           

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default nao;