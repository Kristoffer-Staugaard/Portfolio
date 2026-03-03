import React from 'react';

export default function Services() {
  return (
    <section className="services-grid">
      {/* Card 1: Branding Identity */}
      <div className="service-card">
        <div className="card-inner">
          <div className="animation-container">
            <div className="starry-bg"></div>
            <div className="geometry-wrapper" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="crosshair-h" style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: '#262626' }}></div>
              <div className="crosshair-v" style={{ position: 'absolute', height: '100%', width: '1px', backgroundColor: '#262626' }}></div>
              <div className="circle-dashed" style={{ position: 'absolute', width: '11rem', height: '11rem', borderRadius: '50%', border: '1px dashed #404040' }}></div>
              <div className="circle-dotted" style={{ position: 'absolute', width: '11rem', height: '11rem', borderRadius: '50%', border: '1px dotted #404040', transform: 'rotate(45deg)' }}></div>
              <div className="ascii-core">
                <pre>
{`      .,:;;;;;;;;;;;;;;:,.      
   .,:;;;;;;;;;;;;;;;;;;;;:,.   
  .:;;;;;;;;;;;;;;;;;;;;;;;;;:.  
 .:;;;;;;;;;;;;;;;;;;;;;;;;;;;:. 
 :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;: 
 :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;: 
 :;;;;;;;;;;;;;;;;;;;;;;;;;;;;;: 
 ':;;;;;;;;;;;;;;;;;;;;;;;;;;;:' 
  ':;;;;;;;;;;;;;;;;;;;;;;;;;:'  
   ',:;;;;;;;;;;;;;;;;;;;;:,'   
      ',:;;;;;;;;;;;;;;:,'      `}
                </pre>
              </div>
            </div>
          </div>
          <div className="gradient-bottom"></div>
          <div className="text-content">
            <h3>Branding Identity</h3>
          </div>
        </div>
      </div>

      {/* Card 2: Web Design & Dev */}
      <div className="service-card">
        <div className="card-inner">
          <div className="animation-container">
            <div className="blueprint-bg" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            <div className="geometry-wrapper" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              <div className="framing-lines" style={{ position: 'absolute', inset: '1.5rem', border: '1px solid #262626' }}></div>
              <div className="ascii-matrix" style={{ position: 'relative', zIndex: 10, backgroundColor: '#0a0a0a', border: '1px solid #262626', padding: '0.75rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                <div className="matrix-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #262626', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#525252' }}>SYS.DAT</span>
                  <div className="dots" style={{ display: 'flex', gap: '0.25rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#404040' }}></span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#404040' }}></span>
                  </div>
                </div>
                <pre style={{ fontSize: '7px', lineHeight: '10px', color: '#737373', letterSpacing: '0.2em' }}>
{`+---+---+---+---+
|...|###|...|...|
+---+---+---+---+
|...|...|...|###|
+---+---+---+---+
|###|...|...|...|
+---+---+---+---+
|...|...|###|...|
+---+---+---+---+`}
                </pre>
              </div>
            </div>
          </div>
          <div className="gradient-bottom"></div>
          <div className="text-content">
            <h3>Web Design & Dev</h3>
          </div>
        </div>
      </div>

      {/* Card 3: Motion Systems */}
      <div className="service-card">
        <div className="card-inner">
          <div className="animation-container">
            <div className="dense-starfield" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.3 }}></div>
            <div className="dense-starfield-2" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>
            
            <div className="fibo-geometry" style={{ position: 'relative', width: '12rem', height: '8rem', border: '1px solid #404040', display: 'flex', zIndex: 10, backgroundColor: 'rgba(10,10,10,0.5)', backdropFilter: 'blur(4px)' }}>
              <div className="left-square" style={{ width: '8rem', height: '8rem', borderRight: '1px solid #404040', position: 'relative', overflow: 'hidden' }}>
                <div className="arc" style={{ position: 'absolute', top: 0, right: 0, width: '16rem', height: '16rem', border: '1px dashed #737373', borderRadius: '50%', transformOrigin: 'top right' }}></div>
              </div>
              <div className="right-section" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="top-square" style={{ height: '4rem', borderBottom: '1px solid #404040', position: 'relative', overflow: 'hidden' }}>
                  <div className="arc" style={{ position: 'absolute', bottom: 0, left: 0, width: '8rem', height: '8rem', border: '1px dashed #737373', borderRadius: '50%', transformOrigin: 'bottom left' }}></div>
                </div>
                <div className="bottom-section" style={{ flex: 1, display: 'flex' }}>
                  <div className="left-small" style={{ width: '2rem', borderRight: '1px solid #404040', position: 'relative', overflow: 'hidden' }}>
                    <div className="arc" style={{ position: 'absolute', top: 0, right: 0, width: '4rem', height: '4rem', border: '1px dashed #737373', borderRadius: '50%', transformOrigin: 'top right' }}></div>
                  </div>
                  <div className="right-smallest" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                    <div className="h-4-square" style={{ height: '1rem', borderBottom: '1px solid #404040', position: 'relative', overflow: 'hidden' }}>
                       <div className="arc" style={{ position: 'absolute', bottom: 0, left: 0, width: '2rem', height: '2rem', border: '1px dashed #737373', borderRadius: '50%' }}></div>
                    </div>
                    <div className="plus" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: '#737373', fontFamily: 'monospace' }}>+</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="math-note-1" style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', fontSize: '8px', fontFamily: 'monospace', color: '#525252' }}>φ = 1.618</div>
            <div className="math-note-2" style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', fontSize: '8px', fontFamily: 'monospace', color: '#525252' }}>Fn = Fn-1 + Fn-2</div>
          </div>
          <div className="gradient-bottom"></div>
          <div className="text-content">
            <h3>Motion Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
