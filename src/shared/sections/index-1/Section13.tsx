import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import ArticleCard1 from "@/shared/cards/ArticleCard1";
import { useContentField } from "@/hooks/useContentField";
const C = 'home1.s13'

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const BLOG_IMGS = [
    "/assets/imgs/pages/img-23.webp",
    "/assets/imgs/pages/img-24.webp",
    "/assets/imgs/pages/img-25.webp",
    "/assets/imgs/pages/img-26.webp",
];

export default function Section13() {
    const badge  = useContentField(`${C}.badge`,  'DESDE DENTRO')
    const title  = useContentField(`${C}.title`,  'Últimas publicaciones de nuestro blog y novedades')
    const cta    = useContentField(`${C}.cta`,    'VER TODOS')
    const b1t    = useContentField(`${C}.b1title`, 'Diseñando experiencias digitales que conectan marcas y personas')
    const b1a    = useContentField(`${C}.b1author`, 'Olivia')
    const b1d    = useContentField(`${C}.b1date`,   '3 de julio, 2026')
    const b2t    = useContentField(`${C}.b2title`, 'Del concepto al lanzamiento: construyendo productos que realmente importan')
    const b2a    = useContentField(`${C}.b2author`, 'Daniel')
    const b2d    = useContentField(`${C}.b2date`,   '8 de julio, 2026')
    const b3t    = useContentField(`${C}.b3title`, 'Por qué una identidad visual sólida es la base de las marcas modernas')
    const b3a    = useContentField(`${C}.b3author`, 'Emma')
    const b3d    = useContentField(`${C}.b3date`,   '12 de julio, 2026')
    const b4t    = useContentField(`${C}.b4title`, 'Creando interfaces de impacto a través de sistemas de diseño bien pensados')
    const b4a    = useContentField(`${C}.b4author`, 'Lucas')
    const b4d    = useContentField(`${C}.b4date`,   '17 de julio, 2026')
    const BLOG_ITEMS = [
        { classList: "col-lg-3 col-md-6 col-12", linkPost: "/blog-details", linkAuthor: "/team-details", img: BLOG_IMGS[0], title: b1t, author: b1a, date: b1d },
        { classList: "col-lg-3 col-md-6 col-12", linkPost: "/blog-details", linkAuthor: "/team-details", img: BLOG_IMGS[1], title: b2t, author: b2a, date: b2d },
        { classList: "col-lg-3 col-md-6 col-12", linkPost: "/blog-details", linkAuthor: "/team-details", img: BLOG_IMGS[2], title: b3t, author: b3a, date: b3d },
        { classList: "col-lg-3 col-md-6 col-12", linkPost: "/blog-details", linkAuthor: "/team-details", img: BLOG_IMGS[3], title: b4t, author: b4a, date: b4d },
    ]
    return (
        <div className="at-sec13-thumb fix w-100 scale-up-img p-relative pt-120 pb-120">
            <div className="container">
                <div className="row align-items-end mb-50">
                    <div className="col-lg-8 col-xxl-6">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">{badge}</span>
                                <span className="text-2">{badge}</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="alt-section-title lh-1 neutral-900 fw-700 mb-30 reveal-text mb-0">
                            <RevealText>
                                {title}
                            </RevealText>
                        </h3>
                    </div>
                    <div className="col-xxl-2 col-lg-3 ms-auto text-xxl-end text-lg-end">
                        <div className="at-service-btn pt-30">
                            <Link className="at-btn" to="/archive">
                                <span>
                                    <span className="text-1">{cta}</span>
                                    <span className="text-2">{cta}</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {BLOG_ITEMS.map((item) => (
                        <ArticleCard1
                            key={item.title}
                            classList={item.classList}
                            linkPost={item.linkPost}
                            linkAuthor={item.linkAuthor}
                            img={item.img}
                            title={item.title}
                            author={item.author}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
