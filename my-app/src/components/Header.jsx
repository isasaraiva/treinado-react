export  default function Header({Header}) {

    return (
        <header className="w-full h-14 bg-black text-white flex justify-between items-center px-10">
            <h1 className="font-bold uppercase text-2xl cursor-pointer">{Header}</h1>
            <img src="" alt="" />
            <div className="flex items-center">
                <ul className="flex gap-3 mr-10 items-center">
                    <li className="cursor-pointer">Contato</li>
                    <li className="cursor-pointer">Serviços</li>
                    <li className="cursor-pointer">Sobre nós</li>
                    <li className="cursor-pointer">Blog</li>
                    <box-icon name="rocket"></box-icon>
                    <box-icon name='pear' type='solid' color='#f60b0b' ></box-icon>
                </ul>
                <ul>
                    <li>Sair</li>
                </ul>
            </div>
        </header>
    )
}