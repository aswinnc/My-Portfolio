import React from "react";
import { useSelector } from "react-redux";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FooterSocial = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);
  const socials = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "9342739740",
      url: "https://wa.me/919342739740",
      color: "#128C7E",
    },
    {
      id: "linkedin",
      icon: FiLinkedin,
      label: "in/aswin-nc",
      url: "https://www.linkedin.com/in/aswin-nc",
      color: "#0e76a8",
    },
    {
      id: "github",
      icon: FiGithub,
      label: "GitHub",
      url: "https://github.com/aswinnc",
      color: themeColors.text,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {/* eslint-disable-next-line */}
      {socials.map(({ id, icon: Icon, label, url, color }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-start h-[50px] w-[50px] rounded-xl shadow-md transition-all duration-300 overflow-hidden hover:w-[160px] hover:rounded-md cursor-pointer`}
          style={{
            backgroundColor: themeColors.bg,
          }}
        >
          <div className="flex items-center gap-2 px-2">
            <Icon className="w-6 h-6" style={{ color }} />
            <span
              className={`text-sm font-medium transition-all duration-300 w-0 overflow-hidden group-hover:w-[90px]`}
              style={{ color: themeColors.text }}
            >
              {label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
