// src/TransitionRoutes.tsx
import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import useTransitionStyles from './hooks/useTransitionStyles';

const TransitionRoutes: React.FC = () => {
    const location = useLocation();
    const { nodeRef, style, onEnter, onEntering, onExit, onExiting } = useTransitionStyles(300);

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                nodeRef={nodeRef}
                timeout={{ enter: 300, exit: 50 }}
                classNames=""
                onExit={onExit}
                onEnter={onEnter}
                onExiting={onExiting}
                onEntering={onEntering}
                appear
                style={style}
            >
                <div ref={nodeRef}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionRoutes;
