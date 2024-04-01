import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutWrapperElement } from "./Layout.style";
import React from 'react';
import ClickTrackingButton from '../ClickTrackingButton/ClickTrackingButton';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <LayoutWrapperElement>{children}</LayoutWrapperElement>
            <Footer />
            {/* Esse componente foi utilizado para coleta de dados para a 
            disciplina de AI e ChatBot :) */}
            {/* <ClickTrackingButton /> */}
        </>
    );
};