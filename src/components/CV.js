import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import cv from '../data/cv';

export const CV = () => {
  const downloadCV = () => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
    pdfMake.createPdf(cv).download('Madiyar Bolatov CV.pdf');
  };

  return (
    <button onClick={downloadCV}>
      <span>Download</span>
    </button>
  );
};
