// Colors
export const AC = '#00CEB0'
export const AC2 = '#00A8CC'
export const ACB = '#00FFD4'
export const t1 = 'rgba(255,255,255,0.90)'
export const t2 = 'rgba(255,255,255,0.52)'
export const t3 = 'rgba(255,255,255,0.28)'
export const t4 = 'rgba(255,255,255,0.12)'
export const t5 = 'rgba(255,255,255,0.055)'
export const bd = 'rgba(255,255,255,0.07)'
export const bd2 = 'rgba(255,255,255,0.13)'
export const CARD = 'rgba(255,255,255,0.038)'
export const CARD2 = 'rgba(255,255,255,0.028)'
export const AMB = '#F0A832'
export const RED = '#FF6060'
export const SKY = '#38BDF8'
export const PUR = '#A97DFF'

export const NAV = [
  { id: 'Dashboard', paths: ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'] },
  { id: 'Pipeline', paths: ['M22 12h-4l-3 9L9 3l-3 9H2'], badge: 'Live', badgeCol: AC },
  { id: 'Attendance', paths: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'] },
  { id: 'Persons', paths: ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'] },
  { id: 'Zones', paths: ['M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z', 'M8 2v16', 'M16 6v16'] },
  { id: 'Machines', paths: ['M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M8 21h8', 'M12 17v4'] },
  { id: 'Safety', paths: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'] },
  { id: 'Cameras', paths: ['M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'], extra: 'camera' },
  { id: 'Alerts', paths: ['M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'], badge: '3', badgeCol: AMB },
  { id: 'Reports', paths: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'] },
  { id: 'Settings', paths: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.07 4.93l-1.41 1.41M3.52 19.07l1.41-1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2'] },
]

export const WK = [
  { img: 12, name: 'D. Kovács', role: 'Operator', pct: 5, col: RED },
  { img: 15, name: 'M. Szabó', role: 'Loader', pct: 72, col: AC },
  { img: 32, name: 'A. Fekete', role: 'Forklift', pct: 88, col: AC },
  { img: 55, name: 'J. Tóth', role: 'Technician', pct: 91, col: ACB },
  { img: 44, name: 'R. Molnár', role: 'Supervisor', pct: 67, col: AMB },
]

export const ROWS = [
  { rank: 1, img: 12, name: 'Dávid Kovács', id: '69fbdd1a', act: 'Standing Idle', ac: 'idle', zone: 'Warehouse A', dur: '0:47:22', prod: 5, cam: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=104&q=60', last: 'Idle > 15min' },
  { rank: 2, img: 15, name: 'Marta Szabó', id: 'a2c3e891', act: 'Loading Conveyor', ac: 'conv', zone: 'Loading Dock', dur: '1:12:05', prod: 72, cam: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=104&q=60', last: 'Active loading' },
  { rank: 3, img: 32, name: 'András Fekete', id: 'f4d1b203', act: 'Forklift Driving', ac: 'fork', zone: 'Exit Gate', dur: '0:58:33', prod: 88, cam: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=104&q=60', last: 'Route complete' },
  { rank: 4, img: 55, name: 'János Tóth', id: '8e5f2a77', act: 'Maintenance', ac: 'maint', zone: 'Assembly Line', dur: '2:01:14', prod: 91, cam: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=104&q=60', last: 'Ticket #44' },
  { rank: 5, img: 44, name: 'Réka Molnár', id: 'c7b0e312', act: 'Supervising', ac: 'sup', zone: 'Warehouse A', dur: '1:33:48', prod: 67, cam: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=104&q=60', last: 'Zone patrol' },
  { rank: 6, img: 62, name: 'Péter Varga', id: '3d9c1f65', act: 'Walking', ac: 'walk', zone: 'Entrance', dur: '0:22:10', prod: 44, cam: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=104&q=60', last: 'No tag' },
]

export const BDG = {
  idle: { bg: 'rgba(255,255,255,0.055)', col: 'rgba(255,255,255,0.38)', brd: 'rgba(255,255,255,0.08)', lbl: 'Idle' },
  conv: { bg: 'rgba(45,212,191,0.09)', col: '#2DD4BF', brd: 'rgba(45,212,191,0.22)', lbl: 'Conveyor' },
  fork: { bg: 'rgba(240,168,50,0.09)', col: AMB, brd: 'rgba(240,168,50,0.22)', lbl: 'Forklift' },
  maint: { bg: 'rgba(169,125,255,0.09)', col: PUR, brd: 'rgba(169,125,255,0.22)', lbl: 'Maintenance' },
  sup: { bg: 'rgba(56,189,248,0.09)', col: SKY, brd: 'rgba(56,189,248,0.22)', lbl: 'Supervising' },
  walk: { bg: 'rgba(0,206,176,0.09)', col: AC, brd: 'rgba(0,206,176,0.22)', lbl: 'Walking' },
}

export const MODS = [
  { rank: 1, name: 'Workforce Monitor', admin: 'D. Kovács', date: 'Active now', metric: '78% prod', fol: [12, 15, 32, 44, 62], status: 'Active', cta: 'Configure' },
  { rank: 2, name: 'Energy Optimizer', admin: 'PowerSync', date: 'Optimizing', metric: '91 kW', fol: [15, 32, 55], status: 'Active', cta: 'Configure' },
  { rank: 3, name: 'Material Flow AI', admin: 'ConveyorAI', date: 'Learning', metric: '64% load', fol: [32, 44], status: 'Learning', cta: 'Enable' },
  { rank: 4, name: 'Safety Monitor', admin: 'SafeVision', date: 'Standby', metric: '0 alerts', fol: [55, 62], status: 'Standby', cta: 'Enable' },
]

export const CHART_DS = {
  total: [120, 185, 240, 195, 320, 285, 390, 540, 480, 610, 720, 840],
  workforce: [80, 120, 160, 130, 210, 185, 255, 370, 320, 410, 480, 560],
  energy: [40, 65, 80, 65, 110, 100, 135, 170, 160, 200, 240, 280],
}

export const CHART_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const MACHINE_DATA = {
  activePercent: 73,
  currentKw: 91,
  expectedKw: 95,
  overloadEvents: 2,
  sparkKw: [88, 91, 85, 94, 110, 96, 91, 87, 93, 91],
}

export const GATING_DATA = {
  level1: { count: 847, label: 'Auto-validated', threshold: '>0.85', color: '#00CEB0' },
  level2: { count: 38,  label: 'Ambiguity filter', threshold: '0.5–0.85', color: '#F0A832' },
  level3: { count: 14,  label: 'LLM escalated', threshold: '<0.5', color: '#A97DFF' },
  tokenSaved: 82,
  totalEvents: 899,
}

export const LOSS_SOURCES = [
  { rank: 1, desc: 'Standing idle — Warehouse A', events: 47, zone: 'Warehouse A', ftPerMonth: 84000, trend: 'up' },
  { rank: 2, desc: 'Unplanned machine stop', events: 12, zone: 'Assembly Line', ftPerMonth: 62000, trend: 'dn' },
  { rank: 3, desc: 'Forklift detour pattern', events: null, zone: 'Exit Gate', extra: '8.4 km extra', ftPerMonth: 31000, trend: 'dn' },
  { rank: 4, desc: 'Conveyor underloading', events: null, zone: 'Loading Dock', extra: '34% of time', ftPerMonth: 28000, trend: 'up' },
  { rank: 5, desc: 'Shift overlap idle', events: 22, zone: 'Entrance', ftPerMonth: 18000, trend: 'st' },
]

export const ROI_DEFAULTS = { headcount: 30, avgWage: 600000, shifts: 1, idlePct: 5, improvePct: 3 }

export const PERSONAS = [
  { id: 'owner',   label: 'Owner / CEO',      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { id: 'manager', label: 'Prod. Manager',     icon: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' },
  { id: 'maint',   label: 'Maintenance Lead',  icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6' },
]

// ── SCADA v7 data ──────────────────────────────────────────

export const S = {
  // WinCC V8 — Siemens 2024 dark navy palette (from ElectronicsDemo reference)
  bg:      '#0d1117',   // near-black with blue tint — page background
  panel:   '#131c28',   // dark navy — panel body
  panel2:  '#1a2535',   // medium navy — panel headers, table headers
  panel3:  '#1e2a3a',   // slightly lighter — hover, alternating rows
  chartBg: '#080c12',   // darkest — chart/camera areas
  border:  '#1e2a3a',   // blue-tinted 1px borders
  border2: '#2a3d52',   // hover/focus borders
  sidebar: '#0a0d12',   // slightly darker than bg — sidebar
  t1:      '#e8eef4',   // cool white — primary text
  t2:      '#7a96aa',   // blue-grey — secondary text
  t3:      '#445a6a',   // muted — labels, hints
  // Siemens teal-cyan — the primary WinCC V8 accent
  blue:    '#00B4C8',   // teal-cyan (NOT steel blue)
  blueB:   'rgba(0,180,200,0.12)',
  green:   '#28A050',   // ok/running — saturated mid-green
  greenB:  'rgba(40,160,80,0.12)',
  amber:   '#C49010',   // warning — amber-gold
  amberB:  'rgba(196,144,16,0.14)',
  red:     '#C82828',   // fault/alarm — mid-red
  redB:    'rgba(200,40,40,0.14)',
  mono:    "'JetBrains Mono','SF Mono','Courier New',monospace",
}

export const FACTORY_STATUS = {
  workersActive:  12,
  workersIdle:     3,
  machinesOk:      8,
  machinesStopped: 1,
  alertsToday:     4,
  shiftStart:   '06:00',
  facility:     'Plant A — Warehouse',
}

export const EVENTS = [
  { id:1, time:'14:41', type:'idle',    severity:'amber', msg:'Worker idle 8 min',        zone:'Zone 3',       cam:'CAM-04' },
  { id:2, time:'14:38', type:'machine', severity:'red',   msg:'Machine stopped',           zone:'Conveyor 2',   cam:'CAM-02' },
  { id:3, time:'14:35', type:'safety',  severity:'red',   msg:'Safety: no helmet detected',zone:'Assembly Line',cam:'CAM-05' },
  { id:4, time:'14:29', type:'idle',    severity:'amber', msg:'Worker idle 12 min',        zone:'Zone 1',       cam:'CAM-01' },
  { id:5, time:'14:22', type:'energy',  severity:'amber', msg:'Motor overload 97 kW',      zone:'Conveyor 1',   cam:'CAM-03' },
  { id:6, time:'14:18', type:'idle',    severity:'amber', msg:'Worker idle 5 min',         zone:'Zone 3',       cam:'CAM-04' },
  { id:7, time:'14:11', type:'safety',  severity:'red',   msg:'Forklift speed exceeded',   zone:'Exit Gate',    cam:'CAM-06' },
  { id:8, time:'13:58', type:'machine', severity:'blue',  msg:'Conveyor 1 restarted',      zone:'Loading Dock', cam:'CAM-02' },
  { id:9, time:'13:44', type:'idle',    severity:'amber', msg:'Break zone overstay',       zone:'Break Area',   cam:'CAM-01' },
  { id:10,time:'13:31', type:'machine', severity:'green', msg:'All systems nominal',       zone:'All zones',    cam:'—'      },
]

export const CAMERAS = [
  { id:'CAM-01', label:'Entrance',      status:'online',  rtsp:'rtsp://192.168.1.101:554', res:'1440p', thumb:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=320&q=65', alert:false },
  { id:'CAM-02', label:'Loading Dock',  status:'online',  rtsp:'rtsp://192.168.1.102:554', res:'1080p', thumb:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=320&q=65', alert:true  },
  { id:'CAM-03', label:'Conveyor Line', status:'online',  rtsp:'rtsp://192.168.1.103:554', res:'1080p', thumb:'https://images.unsplash.com/photo-1553413077-190dd305871c?w=320&q=65', alert:false },
  { id:'CAM-04', label:'Warehouse A',   status:'online',  rtsp:'rtsp://192.168.1.104:554', res:'1440p', thumb:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=320&q=65', alert:true  },
  { id:'CAM-05', label:'Assembly Line', status:'offline', rtsp:'rtsp://192.168.1.105:554', res:'1080p', thumb:'', alert:false },
  { id:'CAM-06', label:'Exit Gate',     status:'online',  rtsp:'rtsp://192.168.1.106:554', res:'2K',    thumb:'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=320&q=65', alert:false },
]

export const WORKERS_SCOREBOARD = [
  { id:1, name:'János Tóth',    role:'Technician', productive:91, idle:9,  rag:'green', zone:'Assembly Line' },
  { id:2, name:'András Fekete', role:'Forklift Op',productive:88, idle:12, rag:'green', zone:'Exit Gate'     },
  { id:3, name:'Marta Szabó',   role:'Loader',     productive:72, idle:28, rag:'green', zone:'Loading Dock'  },
  { id:4, name:'Réka Molnár',   role:'Supervisor', productive:67, idle:33, rag:'amber', zone:'Warehouse A'   },
  { id:5, name:'Péter Varga',   role:'Operator',   productive:44, idle:56, rag:'amber', zone:'Entrance'      },
  { id:6, name:'Dávid Kovács',  role:'Operator',   productive:5,  idle:95, rag:'red',   zone:'Warehouse A'   },
]

export const MACHINES = [
  { id:'M-01', name:'Conveyor 1',    status:'running', load:82, kw:74, zone:'Loading Dock',  uptime:'6h 14m' },
  { id:'M-02', name:'Conveyor 2',    status:'stopped', load:0,  kw:0,  zone:'Loading Dock',  uptime:'—'      },
  { id:'M-03', name:'Shredder A',    status:'running', load:91, kw:91, zone:'Zone 1',         uptime:'4h 52m' },
  { id:'M-04', name:'Press Line 1',  status:'running', load:64, kw:58, zone:'Assembly Line', uptime:'7h 01m' },
  { id:'M-05', name:'Compactor',     status:'warning', load:97, kw:108,zone:'Zone 3',         uptime:'3h 20m' },
  { id:'M-06', name:'Forklift #2',   status:'running', load:55, kw:12, zone:'Exit Gate',      uptime:'2h 40m' },
]
