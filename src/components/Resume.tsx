import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  const [downloaded, setDownloaded] = useState(false);

  // Google Drive link (for viewing the resume)
  const resumeViewLink = "https://drive.google.com/file/d/1BbkcVI-pb3c-7hcL4p4IRVRp_jtWJkru/view?usp=sharing"; // View link

  // GitHub raw URL (for downloading the resume)
  const resumeDownloadLink = "https://raw.githubusercontent.com/sudheertanukonda/resume/main/Sudheer_resume.pdf"; // Download link

  // Handle the download button click
  const handleDownloadClick = () => {
    setDownloaded(true);

    // Trigger the file download by creating a temporary link
    const link = document.createElement('a');
    link.href = resumeDownloadLink;  // GitHub link for downloading
    link.download = 'Sudheer_Resume.pdf';  // File name for download
    document.body.appendChild(link);
    link.click(); // This triggers the download
    document.body.removeChild(link);

    // Wait a short time before resetting the success message (Optional)
    setTimeout(() => {
      setDownloaded(false);
    }, 3000); // Success message will disappear after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-800 flex justify-center items-center py-16">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">
        {/* Heading and Description */}
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          My Resume
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Click below to either view or download my professional resume. Explore my experience and skills.
        </p>

        {/* Button Container */}
        <div className="flex justify-center flex-col gap-6">
          {/* View Resume Button (Google Drive link) */}
          <a
            href={resumeViewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
          >
            <Eye size={24} />
            View Resume
          </a>

          {/* Download Resume Button (GitHub link) */}
          <button
            onClick={handleDownloadClick}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
          >
            <Download size={24} />
            Download Resume
          </button>
        </div>

        {/* Success Message */}
        {downloaded && (
          <p className="mt-6 text-green-600 font-medium text-xl">
            The resume was downloaded successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default Resume;
