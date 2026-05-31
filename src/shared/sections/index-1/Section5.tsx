import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import PortfolioCard1 from "@/shared/cards/PortfolioCard1";
import { useContentField } from "@/hooks/useContentField";
const C = 'home1.s5'

const CUBE_SVG = (
    <svg className="fill-primary mb-10" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M17 18L30 5H43V18L30 31V18H17Z" fill="#F0460E" />
        <path d="M30 31H43V44H30V31Z" fill="#F0460E" />
        <path d="M17 18L4 31V44H17L30 31H17V18Z" fill="#F0460E" />
        <path d="M17 18H4V5H17V18Z" fill="#F0460E" />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const PORTFOLIO_IMGS = [
    { img: "/assets/imgs/pages/img-11.webp", link: "/portfolio-details-1" },
    { img: "/assets/imgs/pages/img-12.webp", link: "/portfolio-details-1" },
    { img: "/assets/imgs/pages/img-13.webp", link: "/portfolio-details-1" },
    { img: "/assets/imgs/pages/img-14.webp", link: "/portfolio-details-1" },
]
const PORTFOLIO_TAGS = [
    [{ label: "Branding", href: "#" }, { label: "Diseño Web", href: "#" }, { label: "Desarrollo Web", href: "#" }],
    [{ label: "Branding", href: "#" }, { label: "Diseño Web", href: "#" }, { label: "UI/UX", href: "#" }],
    [{ label: "Branding", href: "#" }, { label: "Motion", href: "#" }, { label: "Identidad Visual", href: "#" }],
    [{ label: "Estrategia de marca", href: "#" }, { label: "Identidad visual", href: "#" }, { label: "Sistema de diseño", href: "#" }],
]
const PORTFOLIO_ITEMS_STATIC = [
    {
        classList: "mb-55",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-11.webp",
        title: "Noirform",
        description: "Dirección de arte & identidad visual de marca",
        tags: [
            { label: "Branding", href: "#" },
            { label: "Diseño Web", href: "#" },
            { label: "Desarrollo Web", href: "#" },
        ],
    },
    {
        classList: "mb-55",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-12.webp",
        title: "Nebula",
        description: "UI/UX & diseño de producto para plataformas digitales",
        tags: [
            { label: "Branding", href: "#" },
            { label: "Diseño Web", href: "#" },
            { label: "UI/UX", href: "#" },
        ],
    },
    {
        classList: "mb-55",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-13.webp",
        title: "Voidline",
        description: "Animación 3D & branding con motion graphics",
        tags: [
            { label: "Branding", href: "#" },
            { label: "Motion", href: "#" },
            { label: "Identidad Visual", href: "#" },
        ],
    },
    {
        classList: "mb-55",
        link: "/portfolio-details-1",
        img: "/assets/imgs/pages/img-14.webp",
        title: "Lumen",
        description: "Sistema de branding para startups modernas",
        tags: [
            { label: "Estrategia de marca", href: "#" },
            { label: "Identidad visual", href: "#" },
            { label: "Branding startup", href: "#" },
            { label: "Sistema de diseño", href: "#" },
        ],
    },
];

export default function Section5({ classList = "" }: { classList?: string }) {
    const title   = useContentField(`${C}.title`,   'Trabajos seleccionados de los que estamos orgullosos')
    const desc    = useContentField(`${C}.desc`,    'Una selección cuidada de proyectos donde estrategia, creatividad y oficio se unen para construir experiencias de marca significativas y duraderas.')
    const cta     = useContentField(`${C}.cta`,     'Ver proyectos recientes')
    const p1title = useContentField(`${C}.p1title`, 'Noirform')
    const p1desc  = useContentField(`${C}.p1desc`,  'Dirección de arte & identidad visual de marca')
    const p2title = useContentField(`${C}.p2title`, 'Nebula')
    const p2desc  = useContentField(`${C}.p2desc`,  'UI/UX & diseño de producto para plataformas digitales')
    const p3title = useContentField(`${C}.p3title`, 'Voidline')
    const p3desc  = useContentField(`${C}.p3desc`,  'Animación 3D & branding con motion graphics')
    const p4title = useContentField(`${C}.p4title`, 'Lumen')
    const p4desc  = useContentField(`${C}.p4desc`,  'Sistema de branding para startups modernas')
    const PORTFOLIO_ITEMS = [
        { ...PORTFOLIO_IMGS[0], classList: "mb-55", title: p1title, description: p1desc, tags: PORTFOLIO_TAGS[0] },
        { ...PORTFOLIO_IMGS[1], classList: "mb-55", title: p2title, description: p2desc, tags: PORTFOLIO_TAGS[1] },
        { ...PORTFOLIO_IMGS[2], classList: "mb-55", title: p3title, description: p3desc, tags: PORTFOLIO_TAGS[2] },
        { ...PORTFOLIO_IMGS[3], classList: "mb-55", title: p4title, description: p4desc, tags: PORTFOLIO_TAGS[3] },
    ]
    void PORTFOLIO_ITEMS_STATIC
    return (
        <div className={`mg-portfolio-area pt-145 pb-65 ${classList}`.trim()}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-lg-4">
                        <div className="mg-portfolio-title-wrap mg-portfolio-pin mb-30">
                            {CUBE_SVG}
                            <h2 className="alt-section-title lh-1 mb-30 reveal-text">
                                <RevealText>{title}</RevealText>
                            </h2>
                            <div className="at_fade_anim" data-delay=".3">
                                <p className="mg-portfolio-dec mb-50">
                                    {desc}
                                </p>
                            </div>
                            <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <Link className="at-btn-circle" to="/portfolio-1">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/portfolio-1">{cta}</Link>
                                <Link className="at-btn-circle" to="/portfolio-1">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ms-auto">
                        <div className="mg-portfolio-item-wrap ml-130 mb-40">
                            {PORTFOLIO_ITEMS.map((item, idx) => (
                                <PortfolioCard1
                                    key={idx}
                                    link={item.link}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags}
                                    classList={item.classList}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
