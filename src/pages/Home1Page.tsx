import PageMeta from "@/seo/PageMeta";
import ServiceImageHoverEffect from "@/shared/effects/ServiceImageHoverEffect";
import Section1 from "@/shared/sections/index-1/Section1";
import Section2 from "@/shared/sections/index-1/Section2";
import Section3 from "@/shared/sections/index-1/Section3";
import Section4 from "@/shared/sections/index-1/Section4";
import Section5 from "@/shared/sections/index-1/Section5";
import Section6 from "@/shared/sections/index-1/Section6";
import Section7 from "@/shared/sections/index-1/Section7";
import Section8 from "@/shared/sections/index-1/Section8";
import Section9 from "@/shared/sections/index-1/Section9";
import Section10 from "@/shared/sections/index-1/Section10";
import Section11 from "@/shared/sections/index-1/Section11";
import Section12 from "@/shared/sections/index-1/Section12";
import Section13 from "@/shared/sections/index-1/Section13";
import { SectionWrapper } from "@/components/editor/SectionWrapper";
import { home1Config } from "@/data/content/home1";

const cfg = (id: string) => home1Config.find(s => s.id === id)!;

export default function Home1Page() {
  return (
    <>
      <PageMeta title="Tech Freel - Agencia Creativa Digital" />
      <SectionWrapper config={cfg('home1.s1')}><Section1 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s2')}><Section2 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s3')}><Section3 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s4')}>
        <ServiceImageHoverEffect><Section4 /></ServiceImageHoverEffect>
      </SectionWrapper>
      <SectionWrapper config={cfg('home1.s5')}><Section5 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s6')}><Section6 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s7')}><Section7 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s8')}><Section8 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s9')}><Section9 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s10')}><Section10 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s11')}><Section11 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s12')}><Section12 /></SectionWrapper>
      <SectionWrapper config={cfg('home1.s13')}><Section13 /></SectionWrapper>
    </>
  );
}
