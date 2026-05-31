import Marquee from "react-fast-marquee";
import { useContentField } from "@/hooks/useContentField";
const C = 'home1.s10'

const TICKER_SVG = (
    <svg className="scroll-rotate" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
            d="M20 0C20.3015 10.9184 29.0816 19.6985 40 20C29.0816 20.3015 20.3015 29.0816 20 40C19.6985 29.0816 10.9184 20.3015 0 20C10.9184 19.6985 19.6985 10.9184 20 0Z"
            fill="#B7B7B7"
        />
    </svg>
);

export default function Section10() {
    const i1  = useContentField(`${C}.item1`,  'Web3')
    const i2  = useContentField(`${C}.item2`,  'B2B & B2C')
    const i3  = useContentField(`${C}.item3`,  'Plataformas SaaS')
    const i4  = useContentField(`${C}.item4`,  'Dirección de Arte')
    const i5  = useContentField(`${C}.item5`,  'Apps Web & Móvil')
    const i6  = useContentField(`${C}.item6`,  'Motion Design')
    const i7  = useContentField(`${C}.item7`,  'UX/UI')
    const i8  = useContentField(`${C}.item8`,  'Branding')
    const i9  = useContentField(`${C}.item9`,  'Diseño Conceptual')
    const i10 = useContentField(`${C}.item10`, 'Presentaciones')
    const i11 = useContentField(`${C}.item11`, 'Redes Sociales & Ads')
    const TICKER_ITEMS = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11]
    return (
        <section className="at-brand-area border-top-0">
            <div className="carouselTicker carouselTicker-left">
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul className="d-flex align-items-center justify-content-center gap-4 carouselTicker__list scroll-move-left fix">
                        {TICKER_ITEMS.map((label) => (
                            <li key={label} className="d-flex align-items-center gap-4 carouselTicker__item mx-0">
                                <h5 className="mb-0 text-nowrap">{label}</h5>
                                {TICKER_SVG}
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
