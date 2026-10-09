"use client";
import { useState } from "react";

const jobs = [
  { role: "Senior IT Infrastructure", org: "Cartrack Technologies Indonesia", when: "Jun 2025 to now", tags: ["infra"],
    points: ["Provide end-user IT support and remote troubleshooting for hardware, software, operating system, and network connectivity issues", "Provision laptops for new employees, including operating system setup, application installation, email configuration, and work-access setup.", "Manage antivirus/Endpoint Detection and Response (EDR) operations, review security alerts, apply operating system patches,and investigate security incidents.", "Administer enterprise network infrastructure, including Fortinet and Sophos firewalls, wireless access points, and network devices.", "Maintain on-premises servers and infrastructure; monitor performance and investigate technical issues to support availability and operational reliability.", "Manage IT equipment availability, asset lifecycle needs, vendor coordination, and procurement-related activities."] },
  { role: "Senior IT Specialist", org: "InCorp Indonesia", when: "Sep 2022 to Jun 2025", tags: ["infra", "dev"],
    points: ["Administered Google Workspace and Microsoft 365, including user accounts, access permissions, and productivity platform support.", "Provided user support and remote troubleshooting for hardware, software, network connectivity, and internal business applications.", "Managed IT infrastructure including Proxmox virtualization, Cisco Meraki firewalls, and MikroTik network devices.", "Developed and maintained internal web applications to improve business processes and operational efficiency.", "Managed IT asset inventory, device tracking, lifecycle monitoring, and equipment allocation.", "Maintained user access controls and supported security practices across business systems.", "Coordinated IT budgeting, vendor management, infrastructure maintenance, and operational reporting."] },
  { role: "Full Stack Developer", org: "PT Prodia Widyahusada Tbk", when: "Mar 2022 to Aug 2022", tags: ["dev"],
    points: ["Developed REST APIs and internal web applications with PHP frameworks.", "Tested, fixed, deployed and integrated systems, and supported DevOps activities."] },
  { role: "Full Stack Developer", org: "DKI Jakarta Government", when: "Nov 2019 to Feb 2022", tags: ["dev"],
    points: ["Built and maintained government web applications and services.", "Maintained REST APIs, ran system testing and supported production deployments."] },
];

const tabs = [["all", "All"], ["infra", "Infrastructure & security"], ["dev", "Development"]];

export default function Experience() {
  const [f, setF] = useState("all");
  const list = jobs.filter((j) => f === "all" || j.tags.includes(f));
  return (
    <>
      <div className="tabs" role="tablist">
        {tabs.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={f === k} className={f === k ? "on" : ""} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <ol className="timeline">
        {list.map((j) => (
          <li key={j.org + j.when}>
            <div className="meta"><em>{j.when}</em></div>
            <div>
              <h3>{j.role}</h3>
              <p className="org">{j.org}</p>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
