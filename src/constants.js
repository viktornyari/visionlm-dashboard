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
