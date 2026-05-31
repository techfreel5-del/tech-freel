import OdometerCounter from "@/shared/elements/OdometerCounter";
import { useContentField } from "@/hooks/useContentField";
const C = 'home1.s8'

export default function Section8() {
    const s1l = useContentField(`${C}.stat1label`, 'Años de práctica creativa')
    const s2l = useContentField(`${C}.stat2label`, 'Proyectos cuidadosamente elaborados')
    const s3l = useContentField(`${C}.stat3label`, 'Marcas con las que colaboramos')
    const s4l = useContentField(`${C}.stat4label`, 'Inversión total apoyada')
    const s5l = useContentField(`${C}.stat5label`, 'Índice de satisfacción del cliente')
    const STATS = [
        { count: 10, suffix: "K+", label: s1l },
        { count: 50, suffix: "K+", label: s2l },
        { count: 16, suffix: "K+", label: s3l },
        { count: 20, suffix: "M+", label: s4l },
        { count: 98, suffix: "%",  label: s5l },
    ]
    return (
        <div className="container-2200">
            <section className="at-sec8-area pt-90 pb-90 bg-neutral-50 rounded-5 mx-lg-3 mx-2 mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-lg-between justify-content-around align-items-center gap-4">
                                {STATS.map((stat) => (
                                    <div key={stat.label}>
                                        <h1>
                                            <OdometerCounter count={stat.count} suffix={stat.suffix} className="text-nowrap" />
                                        </h1>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
