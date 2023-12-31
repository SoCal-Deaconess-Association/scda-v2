import { Route, Routes } from 'react-router-dom';

// Error
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';

// Components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Pages
import { HistoryPage } from '../pages/History.page';
import { GreetingsPage } from '../pages/Greetings.page';
import { GreeterPage } from '../pages/Greeter.page';
import { StoryPage } from '../pages/Story.page';
import { AnthemPage } from '../pages/Anthem.page';

export const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Header />
            <main>
                <Routes>
                    <Route path="/*" element={<HistoryPage />} />
                    <Route path="/greetings" element={<GreetingsPage />} />
                    <Route path="/greetings/:id" element={<GreeterPage />} />
                    <Route path="/greetings/:id/story" element={<StoryPage />} />
                    <Route path="/anthem" element={<AnthemPage />} />
                </Routes>
                <Footer />
            </main>
        </ErrorBoundary>
    )
}
