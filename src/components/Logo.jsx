export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`logo ${className}`} aria-label="Airflow Climate home">
      <svg
        className="logo-mark"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="12" className="logo-bg" />
        <path
          d="M12 26c5.5-9 9-9 12.5 0s7 9 12.5 0"
          stroke="#C9E4F4"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M12 18c5.5-9 9-9 12.5 0s7 9 12.5 0"
          stroke="#7EB8D8"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="24" cy="33.5" r="2.2" fill="#7EB8D8" />
      </svg>
      <span className="logo-wordmark">
        Airflow <em>Climate</em>
      </span>
    </a>
  )
}
