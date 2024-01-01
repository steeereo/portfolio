export function PhosphorIcon({ label, path, size, ...rest }) {
  return (
    <svg
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      {...rest}
    >
      <path d={path} />
    </svg>
  );
}

export function HomeIcon({ size }) {
  return (
    <PhosphorIcon
      label="Home"
      size={size}
      path="M218.8 103.7l-80-72.7a16 16 0 00-21.6 0l-80 72.7a16 16 0 00-5.2 11.8v92.1a16.4 16.4 0 004 11 15.9 15.9 0 0012 5.4h48a8 8 0 008-8v-48a8 8 0 018-8h32a8 8 0 018 8v48a8 8 0 008 8h48a15.6 15.6 0 007.6-1.9A16.1 16.1 0 00224 208v-92.5a16 16 0 00-5.2-11.8z"
    />
  );
}

export function NavigationIcon({ size }) {
  return (
    <PhosphorIcon
      label="Menu"
      size={size}
      path="M180 144h-20v-32h20a36 36 0 10-36-36v20h-32V76a36 36 0 10-36 36h20v32H76a36 36 0 1036 36v-20h32v20a36 36 0 1036-36zm-20-68a20 20 0 1120 20h-20zM56 76a20 20 0 0140 0v20H76a20.1 20.1 0 01-20-20zm40 104a20 20 0 11-20-20h20zm16-68h32v32h-32zm68 88a20.1 20.1 0 01-20-20v-20h20a20 20 0 010 40z"
    />
  );
}

export function NoteIcon({ size }) {
  return (
    <PhosphorIcon
      label="Note"
      size={size}
      path="M200 32h-16v-8a8 8 0 00-16 0v8h-32v-8a8 8 0 00-16 0v8H88v-8a8 8 0 00-16 0v8H56a16 16 0 00-16 16v152a32 32 0 0032 32h112a32 32 0 0032-32V48a16 16 0 00-16-16zm-40 136H96a8 8 0 010-16h64a8 8 0 010 16zm0-32H96a8 8 0 010-16h64a8 8 0 010 16z"
    />
  );
}

export function TwitterIcon({ size }) {
  return (
    <PhosphorIcon
      label="Twitter logo"
      size={size}
      path="M245.7 77.7l-30.2 30.1c-6 69.9-65 124.2-135.5 124.2-14.5 0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8 8 0 013.9-11.9c.2-.1 23.8-9.1 39.1-26.4a108.6 108.6 0 01-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1 8.1 0 015.5-6.2 8 8 0 018.1 1.9c.3.4 33.6 33.2 74.3 43.8V88a48.3 48.3 0 0148.6-48 48.2 48.2 0 0141 24H240a8 8 0 017.4 4.9 8.4 8.4 0 01-1.7 8.8z"
    />
  );
}

export function EmailIcon({ size }) {
  return (
    <PhosphorIcon
      label="Email"
      size={size}
      path="M227.7 48.3l-52.4 185.9a15.9 15.9 0 01-14.1 11.6h-1.4a16 16 0 01-14.4-9.1l-35.7-75.4a4.1 4.1 0 01.8-4.6l51.3-51.3a8 8 0 10-11.3-11.3l-51.3 51.4a4.1 4.1 0 01-4.6.8l-75-35.5a16.6 16.6 0 01-9.5-15.6 15.9 15.9 0 0111.7-14.5l186.3-52.5a16 16 0 0117.7 6.5 16.7 16.7 0 011.9 13.6z"
    />
  );
}

export function ShareIcon({ size }) {
  return (
    <PhosphorIcon
      label="Share"
      size={size}
      path="M229.7 109.7l-48 48a8.3 8.3 0 01-5.7 2.3 8.5 8.5 0 01-3.1-.6 8 8 0 01-4.9-7.4v-40a87.9 87.9 0 00-85.2 66 8.1 8.1 0 01-7.8 6l-2-.3a8 8 0 01-5.7-9.7A103.9 103.9 0 01168 96V56a8 8 0 014.9-7.4 8.4 8.4 0 018.8 1.7l48 48a8.1 8.1 0 010 11.4zM192 208H40V88a8 8 0 00-16 0v120a16 16 0 0016 16h152a8 8 0 000-16z"
    />
  );
}

export function SpinnerIcon({ size }) {
  return (
    <div className="inline-flex animate-spin">
      <PhosphorIcon
        label="Loading..."
        size={size}
        path="M232 128A104 104 0 1184.7 33.4a8.1 8.1 0 0110.6 4 8 8 0 01-4 10.6 88 88 0 1073.4 0 8 8 0 01-4-10.6 8.1 8.1 0 0110.6-4A104.4 104.4 0 01232 128z"
      />
    </div>
  );
}

export function FeedIcon({ size }) {
  return (
    <PhosphorIcon
      label="Feed"
      size={size}
      path="M44 47.992c.004-6.627 5.38-11.996 12.008-11.992A164.1 164.1 0 0 1 220 199.992c.004 6.628-5.365 12.004-11.992 12.008-6.628.004-12.004-5.365-12.008-11.992A140.101 140.101 0 0 0 55.992 60C49.365 59.996 43.996 54.62 44 47.992ZM44 120c0-6.627 5.373-12 12-12a92.008 92.008 0 0 1 65.054 26.946A92.008 92.008 0 0 1 148 200c0 6.627-5.373 12-12 12s-12-5.373-12-12a68.003 68.003 0 0 0-68-68c-6.627 0-12-5.373-12-12ZM72 200c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16Z"
    />
  );
}

export function ExternalIcon({ size }) {
  return (
    <PhosphorIcon
      label="Open in new tab"
      size={size}
      path="M76 88c-6.627 0-12-5.373-12-12s5.373-12 12-12h104c6.627 0 12 5.373 12 12v104c0 6.627-5.373 12-12 12s-12-5.373-12-12v-75.029l-83.515 83.514c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97L151.029 88H76Z"
    />
  );
}

export function GithubIcon({ size }) {
  return (
    <PhosphorIcon
      label="GitHub"
      size={size}
      path="M128 0C57.28 0 0 57.28 0 128c0 56.64 36.64 104.48 87.52 121.44 6.4 1.12 8.8-2.72 8.8-6.08 0-3.04-.16-13.12-.16-23.84-32.16 5.92-40.48-7.84-43.04-15.04-1.44-3.68-7.68-15.04-13.12-18.08-4.48-2.4-10.88-8.32-.16-8.48 10.08-.16 17.28 9.28 19.68 13.12 11.52 19.36 29.92 13.92 37.28 10.56 1.12-8.32 4.48-13.92 8.16-17.12-28.48-3.2-58.24-14.24-58.24-63.2 0-13.92 4.96-25.44 13.12-34.4-1.28-3.2-5.76-16.32 1.28-33.92 0 0 10.72-3.36 35.2 13.12 10.24-2.88 21.12-4.32 32-4.32 10.88 0 21.76 1.44 32 4.32 24.48-16.64 35.2-13.12 35.2-13.12 7.04 17.6 2.56 30.72 1.28 33.92 8.16 8.96 13.12 20.32 13.12 34.4 0 49.12-29.92 60-58.4 63.2 4.64 4 8.64 11.68 8.64 23.68 0 17.12-.16 30.88-.16 35.2 0 3.36 2.4 7.36 8.8 6.08A128.203 128.203 0 0 0 256 128C256 57.28 198.72 0 128 0Z"
    />
  );
}

export function MusicIcon({ size }) {
  return (
    <PhosphorIcon
      label="Music note"
      size={size}
      path="M210.3,56.3l-80-24a8.2,8.2,0,0,0-7.1,1.3A8.1,8.1,0,0,0,120,40V148.3A47.4,47.4,0,0,0,88,136a48,48,0,1,0,48,48V98.8l69.7,20.9a8.2,8.2,0,0,0,7.1-1.3A8.1,8.1,0,0,0,216,112V64A8.1,8.1,0,0,0,210.3,56.3Z"
    />
  );
}

export function GlobeIcon({ size }) {
  return (
    <PhosphorIcon
      label="Globe"
      size={size}
      path="M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"
    />
  );
}

export function ShieldIcon({ size }) {
  return (
    <PhosphorIcon
      label="Shield"
      size={size}
      path="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.62,75.82,119.34,91,124.38a15.44,15.44,0,0,0,10,0c15.2-5.05,91-34.77,91-124.39V56A16,16,0,0,0,208,40Zm-37,87.43-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,1,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43Z"
    />
  );
}

export function LockIcon({ size }) {
  return (
    <PhosphorIcon
      label="Lock"
      size={size}
      path="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z"
    />
  );
}

export function CursorIcon({ size }) {
  return (
    <PhosphorIcon
      label="CursorClick"
      size={size}
      path="M120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM96,32a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0v8A8,8,0,0,0,96,32ZM28.42,120.85l-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31Zm135.65,15.9,50.34-21.88A16,16,0,0,0,213,85.07L52.92,32.8A15.95,15.95,0,0,0,32.8,52.92L85.07,213a15.82,15.82,0,0,0,14.41,11l.78,0a15.84,15.84,0,0,0,14.61-9.59l21.88-50.34L192,219.31a16,16,0,0,0,22.63,0l4.68-4.68a16,16,0,0,0,0-22.63Z"
    />
  );
}

export function CloseIcon({ size }) {
  return (
    <PhosphorIcon
      label="Close"
      size={size}
      path="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
    />
  );
}

export function PlusIcon({ size }) {
  return (
    <PhosphorIcon
      label="Plus"
      size={size}
      path="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
    />
  );
}
