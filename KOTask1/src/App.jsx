import React from 'react';
import './App.css';

const data = [
  { src: '/images/domain-256.png', title: 'The TLD', description: 'Does the domain extension match the language of the domain name?' },
  { src: '/images/ruler-256.png', title: 'Domain Length', description: 'Is the domain short enough to remember?' },
  { src: '/images/geography-256.png', title: 'Language', description: 'How complex is the actuall domain name?' },
  { src: '/images/medal-3-256.png', title: 'Internacional Recognition', description: 'Can the domain name be used on an international scale?' },
  { src: '/images/search-9-256.png', title: 'Search Engine', description: 'Does the domain follow search engine guidelines?' },
  { src: '/images/megaphone-3-256.png', title: 'Advertising Potential', description: 'Could the domain be used for advertising campaigns?' },
  { src: '/images/procent-badge-256.png', title: 'Sales Opportunities', description: 'Can the domain be used on an international scale?' },
  { src: '/images/text-256.png', title: 'Typo Susceptibility', description: 'How high is the risk on mistyping the domain name?' },
  { src: '/images/idea-256.png', title: 'Business Potential', description: 'Can the domain be used as your company address?' },
];

export default function App() {
  return (
    <div className="data-container">
      {data.map((data, index) => (
        <div key={index} className="data-item">
          <img src={data.src} alt={data.title} className="data-image" />
          <div className="data-text-container">
            <h3 className="data-title">{data.title}</h3>
            <p className="data-description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
