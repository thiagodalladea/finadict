import '../../global.css';
import { FirstSection } from './FirstSection/FirstSection.js';
import { SecondSection } from './SecondSection/SecondSection.js';
import { ThirdSection } from './ThirdSection/ThirdSection.js';

export function WelcomePage() {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </>
    )
}