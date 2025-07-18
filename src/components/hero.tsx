import { WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import cavaloImg from "../../public/11428878.png"
import Image from 'next/image';


export function Hero(){
    return (
        <section className="bg-[#e9ab4d] text-white relative overflow-hidden">

            <div>
                <Image
                src={cavaloImg}
                alt='Cavalo'
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 lg:hidden'

                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className='container mx-auto px-4 pt-16 md:pb-0 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    <div className='space-y-6'>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-14">

                            <div className='flex items-center gap-2'>
                                <span className='text-black bg-amber-300 rounded-md '>AGRO</span><span className='text-green-500'>vet</span> 
                            </div>
                            
                        
                            Cuidando dos Gigantes do Campo!
                        </h1>
                        <p className="lg:text-lg ">
                            Veterinária especializada em grandes animais, com foco em prevenção, diagnóstico e performance no campo.go.
                        </p>
                        <div>
                            <a href="#"
                            className=" bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-green-700">
                            <WhatsappLogo className='w-5 h-5'/>
                                Contato via WhatsApp
                    </a>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
                        </div>
                    </div>

                    <div className='hidden lg:block h-full relative'>
                        <Image
                            src={cavaloImg}
                            alt="Cavalo" 
                            className='object-contain '
                            fill
                            sizes='(max-width: 768px) 0vw, 50vw'
                            />
                        </div>

                        

                        
    
                    </article>
                </div>
    
    
            </section>
    
        )
    }
                            

