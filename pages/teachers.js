import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const TeachersPage = () => {
    return (
        <Layout pageTitle="Law Easy| Teachers">
            <NavThree />
            <PageHeader title="Teachers" />
            <Teachers />
            <CallToActionTwo />
            <Footer />
        </Layout>
    );
};

export default TeachersPage;
