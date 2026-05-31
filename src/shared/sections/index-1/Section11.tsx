import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const BTN_CIRCLE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const FAQ_ITEMS = [
    {
        id: "collapseOne",
        num: "1",
        question: "¿Cómo funciona su proceso de diseño?",
        answer: "Nuestro proceso incluye descubrimiento, estrategia, diseño, retroalimentación y entrega — asegurando claridad, colaboración y resultados en cada etapa.",
        open: true,
    },
    {
        id: "collapseTwo",
        num: "2",
        question: "¿Cuánto tiempo tarda un proyecto típico?",
        answer: "Los plazos varían según el alcance, pero la mayoría de los proyectos toman entre 2 y 6 semanas — con hitos claros para mantener todo en orden.",
        open: false,
    },
    {
        id: "collapseThree",
        num: "3",
        question: "¿Trabajan con startups o solo con marcas establecidas?",
        answer: "Trabajamos tanto con startups como con marcas establecidas — adaptando nuestro enfoque a cada etapa de crecimiento.",
        open: false,
    },
    {
        id: "collapseFour",
        num: "4",
        question: "¿Pueden manejar solicitudes personalizadas o complejas?",
        answer: "Sí — nos especializamos en proyectos personalizados y complejos, creando soluciones flexibles para necesidades únicas.",
        open: false,
    },
];

export default function Section11({ classList = "" }: { classList?: string }) {
    return (
        <div className={`alt-faq-area pt-145 pb-80 ${classList || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="alt-faq-title-wrap mb-40">
                            <div className="rounded-4 overflow-hidden anim-zoomin">
                                <img
                                    src="/assets/imgs/pages/img-21.webp"
                                    width={600}
                                    height={700}
                                    className="w-100"
                                    alt="orisa" loading="lazy" />
                            </div>
                            <h6 className="mb-15 pt-50">¿Aún tienes dudas? ¡Te ayudamos!</h6>
                            <p className="at-faq-dec mb-35">Cuéntanos cómo podemos ayudarte</p>
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/faqs">
                                    {BTN_CIRCLE_ARROW_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/faqs">
                                    Centro de ayuda
                                </Link>
                                <Link className="at-btn-circle" to="/faqs">
                                    {BTN_CIRCLE_ARROW_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="at-faq ml-115">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">FAQ</span>
                                    <span className="text-2">FAQ</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="at-section-title reveal-text">
                                <RevealText>
                                    Preguntas respondidas. Todo lo que necesitas saber, de frente.
                                </RevealText>
                            </h3>
                            <div className="accordion pt-80" id="accordionExample">
                                {FAQ_ITEMS.map((item) => (
                                    <div key={item.id} className="at-faq-item scroll-move-up rounded-4">
                                        <div className="at-faq-header d-flex gap-2">
                                            <div className="box-number">
                                                <span className="at-faq-number">{item.num}</span>
                                            </div>
                                            <button
                                                className={`at-faq-button${item.open ? "" : " collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.id}`}
                                                aria-expanded={item.open}
                                                aria-controls={item.id}
                                            >
                                                {item.question}
                                            </button>
                                        </div>
                                        <div
                                            id={item.id}
                                            className={`at-faq-collapse collapse${item.open ? " show" : ""}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="at-faq-body">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
