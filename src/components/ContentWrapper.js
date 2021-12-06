import React from "react";
import TopBar from "../components/TopBar";
import ContentRowTop from "../components/ContentRowTop";
import Footer from "../components/Footer";

function ContentWrapper (){
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <TopBar />
            <ContentRowTop />
            <Footer />
        </div>
    );
};

export default ContentWrapper;