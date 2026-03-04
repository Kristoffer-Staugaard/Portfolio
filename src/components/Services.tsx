import React, { useState } from 'react';
import '../styles/Services.scss';

const SERVICES_DATA = [
  {
    id: 'branding',
    title: 'Branding Identity',
    shortTitle: 'Branding Identity',
    description: 'We design brands, systems, and experiences that feel intentional from the first tap to the last interaction.',
    skills: [
      ['Identity Branding', 'UI Design', 'Art Direction', 'Interactive Design'],
      ['UX Design / Research', 'UX Copywriting', 'Creative Direction']
    ],
    animation: (
      <div className="animation-container branding-anim">
        <div className="starry-bg"></div>
        <div className="branding-geometry">
          {/* Outer rotating rings */}
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <div className="ring r3"></div>

          {/* Construction lines */}
          <div className="constr-line h1"></div>
          <div className="constr-line h2"></div>
          <div className="constr-line v1"></div>
          <div className="constr-line v2"></div>

          {/* Typography Spec */}
          <div className="type-spec">
            <span className="ts-upper">A</span>
            <span className="ts-lower">a</span>
          </div>

          {/* Color Scraps */}
          <div className="color-swatches">
            <div className="swatch sw1"></div>
            <div className="swatch sw2"></div>
            <div className="swatch sw3"></div>
          </div>

          {/* Core Logo Shape */}
          <div className="core-shape-container">
            <div className="core-shape s1"></div>
            <div className="core-shape s2"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'web',
    title: 'Web Design & Development',
    shortTitle: 'Web Design & Dev',
    description: 'We build digital products, websites and web-applications that combine beautiful design with robust, scalable technology architecture.',
    skills: [
      ['Frontend Development', 'Backend Systems', 'CMS Integration', 'E-commerce'],
      ['Web Animations', 'Technical SEO', 'Performance Tuning']
    ],
    animation: (
      <div className="animation-container web-anim">
        <div className="blueprint-bg"></div>
        <div className="web-geometry">
          <div className="browser-window">
            <div className="browser-header">
              <div className="b-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="b-url"></div>
            </div>
            <div className="browser-body">
              <div className="b-sidebar">
                <div className="b-nav-item active"></div>
                <div className="b-nav-item"></div>
                <div className="b-nav-item"></div>
              </div>
              <div className="b-content">
                <div className="b-hero">
                  <div className="b-img"></div>
                  <div className="b-text-group">
                    <div className="b-text tl1"></div>
                    <div className="b-text tl2"></div>
                  </div>
                </div>
                <div className="b-grid">
                  <div className="b-card"></div>
                  <div className="b-card"></div>
                  <div className="b-card"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="code-editor">
            <div className="ce-header">
              <span className="ce-tab">App.tsx</span>
            </div>
            <div className="ce-body">
              <div className="ce-numbers">
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13
              </div>
              <pre className="ce-code">
                {`import { FC } from 'react';
import { motion } from 'framer-motion';

export const App: FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <System />
    </motion.div>
  );
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'motion',
    title: 'Graphic & Motion Design',
    shortTitle: 'Motion Systems',
    description: 'We bring interfaces to life with purposeful motion design that guides attention, explains relationships, and delights users.',
    skills: [
      ['2D/3D Animation', 'Micro-interactions', 'Motion Systems', 'Video Production'],
      ['Lottie Animations', 'WebGL Experiences', 'Creative Direction']
    ],
    animation: (
      <div className="animation-container motion-anim">
        <div className="dense-starfield"></div>
        <div className="motion-geometry">

          <div className="timeline-panel">
            <div className="tl-head">
              <div className="tl-controls">
                <div className="tl-play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="tl-ruler">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`tl-tick ${i % 5 === 0 ? 'major' : ''}`}></div>
                ))}
              </div>
            </div>
            <div className="tl-tracks">
              <div className="tl-track">
                <span className="track-label">Position</span>
                <div className="kf kf1"></div>
                <div className="kf kf2"></div>
              </div>
              <div className="tl-track">
                <span className="track-label">Scale</span>
                <div className="kf kf3"></div>
              </div>
              <div className="tl-track">
                <span className="track-label">Rotation</span>
                <div className="kf kf4"></div>
                <div className="kf kf5"></div>
              </div>
            </div>
            <div className="tl-playhead">
              <div className="playhead-top"></div>
              <div className="playhead-line"></div>
            </div>
          </div>

          <div className="bezier-graph">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 10 90 C 10 10, 90 90, 90 10" fill="none" stroke="#525252" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M 10 90 C 40 90, 60 10, 90 10" fill="none" stroke="#d4d4d4" strokeWidth="2.5" className="curve-path" />
              <line x1="10" y1="90" x2="40" y2="90" stroke="#737373" strokeWidth="1" className="handle-line l1" />
              <line x1="90" y1="10" x2="60" y2="10" stroke="#737373" strokeWidth="1" className="handle-line l2" />
              <circle cx="10" cy="90" r="2.5" fill="#a3a3a3" />
              <circle cx="90" cy="10" r="2.5" fill="#a3a3a3" />
              <circle cx="40" cy="90" r="2.5" fill="#e5e5e5" className="handle-pt h1" />
              <circle cx="60" cy="10" r="2.5" fill="#e5e5e5" className="handle-pt h2" />
            </svg>
          </div>

          <div className="motion-stage">
            <div className="stage-object"></div>
            <div className="stage-ghost g1"></div>
            <div className="stage-ghost g2"></div>
            <div className="stage-ghost g3"></div>
            <svg className="stage-path" viewBox="0 0 200 100">
              <path d="M 20 80 Q 100 0, 180 80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>

        </div>
      </div>
    )
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCardClass = (index: number) => {
    if (expandedIndex === null) return 'service-card default';
    if (expandedIndex === index) return 'service-card expanded';
    return 'service-card collapsed';
  };

  return (
    <section className={`services-grid ${expandedIndex !== null ? 'has-expanded' : ''}`}>
      <div className="section-header">
        <div className="sh-label">
          <span>[ SERVICES & EXPERTISE ]</span>
        </div>
        <div className="sh-content">
          <h2>Digital Design Powerhouse</h2>
          <p>Over the last decade, we've refined a wide range of skills in digital design, offering services mastered to perfection and always driven by the purpose of motion.</p>
        </div>
      </div>

      <div className="cards-container">
        {SERVICES_DATA.map((service, index) => (
          <div key={service.id} className={getCardClass(index)} onClick={() => toggleCard(index)}>
            <div className="card-inner">

              <div className="expanded-content">
                <div className="expanded-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="skills-list">
                    {service.skills.map((col, cIdx) => (
                      <ul key={cIdx}>
                        {col.map((skill, sIdx) => (
                          <li key={sIdx}>→ {skill}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animation-section">
                {service.animation}
                <div className="text-content default-title">
                  <h3>{service.title}</h3>
                </div>
              </div>

              <div className="collapsed-title">
                <span>{service.shortTitle}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
