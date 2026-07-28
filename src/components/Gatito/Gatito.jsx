import './Gatito.css'

// ilustración reutilizada de la tarea anterior
function Gatito() {
  return (
    <svg className="gatito" width="200" height="170" viewBox="0 0 200 170" fill="none" aria-hidden="true">
      <ellipse cx="118" cy="150" rx="50" ry="7" fill="#1d2740" />

      <g className="gatito-cola">
        <path d="M156 128 Q182 122 178 96" stroke="#F6C49B" strokeWidth="13" strokeLinecap="round" fill="none" />
      </g>

      <ellipse cx="126" cy="114" rx="34" ry="32" fill="#F6C49B" />
      <ellipse cx="126" cy="122" rx="19" ry="21" fill="#FCE4CB" />

      <path d="M102 58 L104 32 L124 46 Z" fill="#F6C49B" />
      <path d="M150 58 L148 32 L128 46 Z" fill="#F6C49B" />
      <path d="M107 52 L108 39 L119 47 Z" fill="#F2A9A2" />
      <path d="M145 52 L144 39 L133 47 Z" fill="#F2A9A2" />

      <circle cx="126" cy="72" r="28" fill="#F6C49B" />

      <g stroke="#6B4B3E" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M111 72 Q116 66 121 72" />
        <path d="M131 72 Q136 66 141 72" />
      </g>

      <path d="M123 79 L129 79 L126 83 Z" fill="#E58F8F" />
      <path d="M121 87 Q123.5 90 126 87 Q128.5 90 131 87" stroke="#6B4B3E" strokeWidth="2" strokeLinecap="round" fill="none" />

      <g stroke="#D9A87E" strokeWidth="2" strokeLinecap="round">
        <path d="M96 74 L82 71 M96 80 L82 81" />
        <path d="M156 74 L170 71 M156 80 L170 81" />
      </g>

      <ellipse cx="107" cy="81" rx="5.5" ry="3.2" fill="#F7B9B0" />
      <ellipse cx="145" cy="81" rx="5.5" ry="3.2" fill="#F7B9B0" />

      <path d="M6 138 Q40 148 62 134 Q74 126 84 128" stroke="#8E8AA6" strokeWidth="6" strokeLinecap="round" fill="none" />
      <g transform="translate(84 128) rotate(-30)">
        <rect x="0" y="-7" width="16" height="14" rx="4" fill="#8E8AA6" />
        <path d="M16 -3.5 h8 M16 3.5 h8" stroke="#B9B4CC" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="gatito-chispas" stroke="#F6C86B" strokeWidth="2.4" strokeLinecap="round">
        <path d="M108 112 l6 -6 M112 120 l8 -1 M102 104 l1 -8" />
      </g>

      <ellipse cx="112" cy="140" rx="10" ry="7" fill="#F6C49B" />
      <ellipse cx="140" cy="140" rx="10" ry="7" fill="#F6C49B" />
    </svg>
  )
}

export default Gatito
