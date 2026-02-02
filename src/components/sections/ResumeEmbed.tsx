'use client'

export default function ResumeEmbed() {
  const resumeUrl = 'https://docs.google.com/document/d/e/2PACX-1vQInaRABZPCG3otOcexcBW3mHBvkAJxcSpLyU01tXuD10_akHZw8_lOlPihpzrfjA/pub?embedded=true'

  return (
    <div className="w-full">
      <div className="border-2 border-neutral-black rounded-md overflow-hidden shadow-brutal-md bg-white">
        <iframe
          src={resumeUrl}
          className="w-full h-[800px] border-0"
          title="Lee Aulder Resume"
          loading="lazy"
          allow="fullscreen"
          style={{ 
            display: 'block',
            minHeight: '800px',
            width: '100%'
          }}
        />
      </div>
    </div>
  )
}
