/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  github?: string;
  category: 'web' | 'systems' | 'academics';
  demoType?: 'hostel_system' | 'sql_sandbox' | 'custom';
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  details: string[];
  logoText: string;
  colorClass: string;
}

export interface VolunteerRole {
  id: string;
  event: string;
  organization: string;
  date: string;
  role: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1 to 5 index for styling
    description?: string;
  }[];
}

// Types for the Smart Hostel Management System Interactive Preview widget
export interface LeaveRequest {
  id: string;
  studentName: string;
  roomNo: string;
  reason: string;
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Declined';
  appliedOn: string;
}

export interface Complaint {
  id: string;
  studentName: string;
  roomNo: string;
  category: 'WiFi' | 'Water' | 'Electricity' | 'Mess' | 'Other';
  description: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  filedOn: string;
}

export interface BroadcastMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  importance: 'normal' | 'urgent';
}
