'use client';

import { useEffect } from 'react';

const REFERENCE_SCRIPT_ID = 'alrawaf-reference-script';
const REFERENCE_STYLE_ID = 'alrawaf-reference-style';
const REFERENCE_SCRIPT_SRC = '/assets/index-DaF94y2K.js';
const REFERENCE_STYLE_HREF = '/assets/index-CCTwGwMR.css';

export default function LovableReferenceHome() {
  useEffect(() => {
    if (!document.getElementById(REFERENCE_STYLE_ID)) {
      const styleLink = document.createElement('link');
      styleLink.id = REFERENCE_STYLE_ID;
      styleLink.rel = 'stylesheet';
      styleLink.href = REFERENCE_STYLE_HREF;
      styleLink.crossOrigin = 'anonymous';
      document.head.appendChild(styleLink);
    }

    if (!document.getElementById(REFERENCE_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = REFERENCE_SCRIPT_ID;
      script.type = 'module';
      script.src = REFERENCE_SCRIPT_SRC;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }
  }, []);

  return <div id="root" className="min-h-screen" />;
}
