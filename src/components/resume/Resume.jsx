import "./resume.scss";
import React from 'react';
import { Document, Page,  pdfjs} from 'react-pdf';
import resumePDF from "./resumeFile.pdf";
import { CloudDownload } from "@material-ui/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    return (
        
        <div className="resume" id="resume">
            <div><h1>Resume:</h1>
            <CloudDownload className="icon"/>
            <a href={resumePDF} download="Resume_Sarala.pdf"> <span>Download Here</span> </a>
            </div>
            <Document   
            file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}