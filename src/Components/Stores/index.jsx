import React from 'react';
import Button from '@material-ui/core/Button';

//Custom imports
import './stores.scss';

const sampleStoreUrl = 'https://sualoja.griel.dev.br';

const list = [
    {
        title:'Venda 24 horas por dia, 7 dias por semana',
        description: `<p>Sua loja virtual funciona 24 horas, incluindo os feriados, e de forma automatizada, verifica seus pagamentos, dá baixa no estoque de produtos vendidos e com uma boa descrição em seus produtos, responde a todas as dúvidas de seus clientes.</p>`
    },
    {
        title:'Gerencie o seu estoque',
        description: `<p>Cadastre o produto em sua loja virtual apenas uma vez, e tenha acesso em tempo real e de qualquer lugar como está seu estoque. Cada venda realizada online atualiza a quantidade disponível de forma automática.</p>
        <p>Use a sua própria loja virtual para gerenciar também suas vendas em loja física, mantendo seu estoque organizado e atualizado.</p>`
    },
    {
        title:'Sua loja nos principais buscadores',
        description: `<p>A sua loja já vai estar preparada para que os buscadores possam indexar seus produtos, e exibi-los nas melhores posições.</p>
        <p>Também é gerado de forma automática um mapa da loja, contendo as categorias, marcas e produtos, que é integrado aos buscadores.</p>`
    },
    {
        title:'Saiba como estão suas visitas',
        description: `<p>Sua loja estará integrada ao Google Analytics, uma poderosa e gratuita ferramenta, que mostra de onde seus visitantes estão vindo, e também oferece em tempo real um relatório de acesso, mostrando a página, origem e duração da visita.</p>`
    },
    {
        title:'Fretes mais baratos e com rastreamento',
        description: `<p>A sua loja é integrada com o sistema MelhorEnvios, que oferece diversas opções de envios além dos Correios, e com valor de frete muito mais barato do que na agência.</p>
        <p>Além disso, todo o processo de rastreio é feito de forma automática, da sua loja para seu cliente, informando o ato da postagem, transporte e quaisquer ocorrências.</p>`
    },
    {
        title:'Receba por Cartão de Crédito e Boleto Bancário',
        description: `<p>Com a integração com o sistema Wirecard/MOIP, do PagSeguro, seu comprador pode pagar com segurança e comodidade dentro de sua própria loja. Além de contar com a menor taxa do mercado.</p>
        <p>Todas as atualizações referênte ao pagamento são atualizadas de forma automática, seja por cartão de crédito ou boleto bancário.</p>
        <p>Você ainda pode oferecer parcelamento sem juros e/ou desconto para quem pagar no boleto bancário.</p>`
    },
    {
        title:'Carrinho abandonado',
        description: `<p>Seu cliente abandonou a compra momentos antes de finalizar? Com o recurso de carrinho abandonado a sua loja irá lembrar seu comprador para finalizar a compra, podendo inclusive oferecer cupons de descontos para aumentar a chance de conversão.</p>`
    },
    {
        title:'Grupos de Clientes',
        description: `<p>Anuncie o mesmo produto com preços diferentes para cada grupo de cliente, podendo limitar a compra a uma quantidade de itens no carrinho por exemplo.</p>
        <p>Com esse recurso, você pode criar grupos para atacado e varejo, oferecendo preços e condições específicas para cada grupo.</p>`
    },
    {
        title:'Filtros avançados',
        description: `<p>Com um poderoso filtro, seus compradores poderão escolher exatamente o que estão procurando, por exemplo, cores, tamanhos, tipos, marcas e preços.</p>`
    },
    {
        title:'Variações dos produtos',
        description: `<p>Com este importante recurso, você pode exibir na página do produto todas as variações daquele modelo, por exemplo suas cores.</p>`
    },
    {
        title:'Lembretes e cancelamento automáticos',
        description: `<p>Se houver compras não paga, a loja irá, de forma automática, enviar lembretes de pagamento e/ou até cancelar o pedido após um prazo definido por você.</p>
        <p>E quando o pedido é cancelado, o produto retorna ao estoque para ficar disponível para outros compradores.</p>`
    },
    {
        title:'Suas próprias formas de envio',
        description: `<p>Crie formas de envio distintas e com valores personalizados. Você pode criar formas de envio baseado na cidade, forma de pagamento, produto escolhido, dentre muito mais opções.</p>`
    },
    {
        title:'Formas de pagamento personalizadas',
        description: `<p>Você pode informar suas contas bancárias para depósito ou transferência, aceitar pagamento na retirada, dentre outras formas de pagamento, também baseando-se na cidade, produto ou outras opções.</p>`
    },
    {
        title:'Cancelamento do pedido pelo próprio cliente',
        description: `<p>Se seu cliente, por algum motivo, desejar cancelar uma compra que ainda não tenha sido paga, você pode habilitar esta opção em sua loja, definindo um período máximo para que o pedido seja cancelado.</p>
        <p>Ao cancelar o pedido, o produto irá retornar ao estoque para ficar disponível para outros compradores.</p>`
    },
    {
        title:'Avise-me quando disponível',
        description: `<p>Deixe que seu cliente seja lembrado quando um produto desejado for reposto em sua loja.</p>
        <p>Se um produto ou opção de um produto esgotar-se, o seu comprador poderá solicitar o aviso, informando o e-mail.</p>`
    },
    {
        title:'Receba pagamentos pelo PicPay',
        description: `<p>O PicPay é atualmente a maior plataforma de pagamentos do Brasil, ultrapassando a marca de 50 milhões de usuários.</p>
        <p>Com este recurso seu comprador poderá pagar o pedido pelo aplicativo PicPay ou através de um QRCode ou notificação.</p>
        <p>Este recurso utiliza a plataforma PicPay Ecommerce para o processo de pagamentos.</p>`
    },
    
]

console.log(list)

const Stores = ()=>{
    return (
        <>
        <main id="ecommerce">
            <section id="resume">
                <header>
                    <h1>loja virtual</h1>
                    <h2>Tenha sua própria loja virtual e venda muito mais!</h2>
                    <p>Adquirindo sua loja virtual, você terá controle total de seu estoque, gerenciamento de clientes, gerenciamento de vendas, e muito mais! Tudo isso sem taxa de comissão, sem limites de produtos e sem pagar nada a mais por venda.</p>
                </header>
            </section>

            <section id="resources">
                <article>

                    
                    {list.map((item, index)=>(
                        <div className="item" key={index}>
                        <h3>{item.title}</h3>
                        <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
                        </div>
                    ))}

                    
                </article>
                <footer>
                    <p>Veja uma demonstração da loja virtual completa!</p>
                    <a href={sampleStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained"  color="primary">
                        Ver demonstração
                    </Button>
                    </a>
                </footer>
            </section>

        </main>
        


        
        </>
    );
}

export default Stores;