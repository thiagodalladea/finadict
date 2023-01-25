import './global.css';
import { FirstSection } from './components/WelcomePage/FirstSection/FirstSection.js';
import { SecondSection } from './components/WelcomePage/SecondSection/SecondSection.js';
import { ThirdSection } from './components/WelcomePage/ThirdSection/ThirdSection.js';

export function WelcomePage() {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </>
    )
}