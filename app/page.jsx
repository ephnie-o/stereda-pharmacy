import { Hero } from '@components/home/Hero';
import HomePage from '@components/home/HomePage';
import { LatestUpdates } from '@components/home/LatestUpdate';
import { ProductTabs } from '@components/home/ProductTabs';
import { PromoBanner } from '@components/home/PromoBanner';

export default function Home() {
    return (
        <>
        <Hero />
        <ProductTabs />
        <PromoBanner />
        <LatestUpdates />
        </>
    )
}