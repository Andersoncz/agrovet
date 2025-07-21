"use client";
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight,Truck, Syringe, Stethoscope,Microscope,HeartPulse} from  "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
  title: "Atendimento Clínico e Cirúrgico",
  description: "Oferecemos consultas e cirurgias especializadas para equinos e bovinos, com foco em cólicas, claudicações, mastites e outras enfermidades comuns.",
  duration: "60 minutos",
  icon: <Stethoscope />,
  linkText: "Agendar Atendimento"
},
{
  title: "Exames Laboratoriais e de Imagem",
  description: "Realizamos exames como hemograma, ultrassonografia e radiografias, auxiliando no diagnóstico preciso e no acompanhamento de gestação e fraturas.",
  duration: "45 minutos",
  icon: <Microscope />,
  linkText: "Solicitar Exame"
},
{
  title: "Reprodução e Fertilidade",
  description: "Atuamos com inseminação artificial, diagnóstico precoce de gestação e manejo reprodutivo para aumentar a eficiência do seu rebanho.",
  duration: "40 minutos",
  icon: <HeartPulse />,
  linkText: "Agendar Avaliação Reprodutiva"
},
{
  title: "Vacinação e Controle Sanitário",
  description: "Aplicamos vacinas obrigatórias e planejamos protocolos sanitários completos para manter seus animais saudáveis e protegidos.",
  duration: "30 minutos",
  icon: <Syringe />,
  linkText: "Agendar Vacinação"
},
{
  title: "Atendimento a Campo",
  description: "Nossa equipe se desloca até sua fazenda ou haras para realizar atendimentos emergenciais, preventivos e de manejo direto no local.",
  duration: "Sob consulta",
  icon: <Truck />,
  linkText: "Solicitar Atendimento em Campo"
},
]



export  function Services() {

    const[emblaRef, emblaApi] = useEmblaCarousel({
  loop: false, 
  align: "start",
  slidesToScroll: 1,  
  breakpoints: {
    "(min-width: 768px)": { slidesToScroll: 3 }
  }
})
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
               
                <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) =>(
                                <div key={index}className="flex-[0_0_100%] min-w-0 md:flex :flex-[0_0_33.3333%] px-4">
                                    <article className="bg-black text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div>
                                                <span className="text-3-xl">
                                                  <h3>{item.icon}</h3> 
                                                  <p>{item.description}</p> 
                                                </span>
                                            </div>
                                            
                                        </div>
                                    </article>

                                </div>
                            ))}

                        </div>

                    </div>
               
                </div>

               </div>

            
        </section>



    )
}