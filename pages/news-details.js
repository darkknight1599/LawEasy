import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsDetails from "../components/NewsDetails";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Law Easy | News Details">
            <NavThree />
            <PageHeader title="News Details" />
            <NewsDetails />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
