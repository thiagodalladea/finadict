import './global.css';
import { Header } from './components/WelcomePage/Header.js';
import { FirstSection } from './components/WelcomePage/FirstSection.js';

export function WelcomePage() {
    return (
        <>
            <Header />
            <FirstSection />
        </>
    )
}