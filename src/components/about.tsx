import Image from "next/image";
import vetImg from '../../public/veterinario-na-fazenda-andando-no-estabulo-verificando-as-vacas.jpg';
import cavpreto from "../../public/istockphoto-1383096659-612x612.jpg"
import { Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import cavalo2 from '../../public/cavalo2.png'


export function About () {
    return (

        <section className="bg-[#f7e6ce] py-16">
            
            <div className="container mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

                <div className="relative">

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">

                    <Image
                    src={vetImg}
                    alt="foto"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300 rounded-2xl"
                    priority
                    />
                </div>

                <div className="absolute w-40 h-40 left-4 -bottom-8 border-4 overflow-hidden   border-amber-200 rounded-lg">
                    <Image
                    src={cavpreto}
                    alt="foto nelore"
                    fill
                    quality={100}
                    priority
                    />
                </div>
                </div>

                <div className="space-y-6 mt-10">
                    <h2 className="text-4xl font-bold ">SOBRE</h2>
                    <p>
                        

A Agrovet é uma clínica Veterinária especializada no atendimento de grandes animais, com foco em equinos e bovinos. Nossa equipe é formada por médicos veterinários experientes, comprometidos com o bem-estar animal e a produtividade do seu rebanho. Oferecemos serviços de clínica geral, cirurgias, exames laboratoriais, ultrassonografia, vacinação, controle reprodutivo, assistência a campo e programas de manejo sanitário personalizados.

Com estrutura moderna e atendimento humanizado, garantimos diagnósticos precisos e tratamentos eficazes, sempre alinhados às necessidades do produtor rural e dos criadores de cavalos.

Seu parceiro de confiança na saúde animal!
                    </p>
                    
                    <ul className="space-y-4 ">
                        <li className="flex items-center gap-2">
                            <Check  className="text-red-500"/>
                            Aberto desde 2010.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check  className="text-red-500"/>
                            Mais de 10 veterinários.
                            </li>
                        <li className="flex items-center gap-2">
                            <Check  className="text-red-500"/>
                            Qualidade em primeiro lugar.
                        </li>
                    </ul>

                    <div className="absolute w-60 h-60 right-4 -bottom-20   lg:opacity-60  ">
                    <Image
                    src={cavalo2}
                    alt="cavalo2"
                    fill
                    quality={100}
                    priority
                    />
                </div>

                    <div className="flex gap-2">
                    <a href="#"
                            className=" bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md  hover:bg-green-700">
                            <WhatsappLogo className='w-5 h-5'/>
                                Contato via WhatsApp
                    </a>
                    <a href="#"
                            className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md ">
                            <MapPin className='w-5 h-5 bg-amber-400'/>
                                Contato via WhatsApp
                    </a>
                    </div>
                </div>

                
                </div>
                
                </div>

            
        </section>
    )
}